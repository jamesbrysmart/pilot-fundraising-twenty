import { useMemo, useRef, useState, type FormEvent } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export type ApplicationFormSection = "org" | "setup" | "readiness";

export type ApplicationFormV1 = {
  orgName: string;
  orgWebsite: string;
  country: string;
  annualFundraisingVolumeBand: string;
  contactName: string;
  contactEmail: string;

  currentSystem: string;
  currentSystemOther: string;
  donationsPerMonthBand: string;
  crmChangeReason: string;

  pilotNotes: string;
};

export type ApplicationFormResult = {
  formVersion: "v1";
  form: ApplicationFormV1;
  honeypot: string;
  // Back-compat fields expected by the current capture endpoint / Google Sheet columns.
  legacy: {
    name: string;
    email: string;
    organization: string;
    currentCrm: string;
    goals: string;
  };
};

type Props = {
  disabled?: boolean;
  submitting?: boolean;
  idPrefix: string;
  onSubmit: (result: ApplicationFormResult) => void;
};

const revenueBands = [
  "Under $250k",
  "$250k-$1M",
  "$1M-$5M",
  "$5M-$20M",
  "$20M+",
  "Not sure",
] as const;

const donationVolumeBands = [
  "0-50",
  "51-200",
  "201-500",
  "501-2,000",
  "2,000+",
  "Not sure",
] as const;

const currentSystems = [
  "Bloomerang",
  "Salesforce Nonprofit Cloud / NPSP",
  "Blackbaud (Raiser's Edge / RE NXT)",
  "DonorPerfect",
  "Neon CRM",
  "Little Green Light",
  "Spreadsheets",
  "Other",
  "Not sure",
] as const;

const initialForm: ApplicationFormV1 = {
  orgName: "",
  orgWebsite: "",
  country: "",
  annualFundraisingVolumeBand: "",
  contactName: "",
  contactEmail: "",

  currentSystem: "",
  currentSystemOther: "",
  donationsPerMonthBand: "",
  crmChangeReason: "",

  pilotNotes: "",
};

type FieldKey =
  | "orgName"
  | "contactName"
  | "contactEmail"
  | "currentSystem"
  | "donationsPerMonthBand"
  | "annualFundraisingVolumeBand";

const fieldToSection: Record<FieldKey, ApplicationFormSection> = {
  orgName: "org",
  contactName: "org",
  contactEmail: "org",
  currentSystem: "setup",
  donationsPerMonthBand: "setup",
  annualFundraisingVolumeBand: "setup",
};

function normalizeEmail(value: string): string {
  return value.trim();
}

function buildCurrentCrm(form: ApplicationFormV1): string {
  if (!form.currentSystem) return "";
  if (form.currentSystem !== "Other") return form.currentSystem;
  const other = form.currentSystemOther.trim();
  return other ? `Other: ${other}` : "Other";
}

function requiredMissing(form: ApplicationFormV1): FieldKey[] {
  const missing: FieldKey[] = [];
  if (!form.orgName.trim()) missing.push("orgName");
  if (!form.contactName.trim()) missing.push("contactName");
  if (!normalizeEmail(form.contactEmail)) missing.push("contactEmail");
  if (!form.currentSystem) missing.push("currentSystem");
  if (!form.donationsPerMonthBand) missing.push("donationsPerMonthBand");
  if (!form.annualFundraisingVolumeBand) {
    missing.push("annualFundraisingVolumeBand");
  }
  return missing;
}

function sectionComplete(form: ApplicationFormV1, section: ApplicationFormSection): boolean {
  const missing = requiredMissing(form);
  return !missing.some((key) => fieldToSection[key] === section);
}

function friendlyMissingLabel(key: FieldKey): string {
  switch (key) {
    case "orgName":
      return "Organization name";
    case "contactName":
      return "Primary contact name";
    case "contactEmail":
      return "Primary contact email";
    case "currentSystem":
      return "Current system";
    case "donationsPerMonthBand":
      return "Gift transactions per month";
    case "annualFundraisingVolumeBand":
      return "Annual fundraising volume";
  }
}

export default function ApplicationForm({
  disabled,
  submitting,
  idPrefix,
  onSubmit,
}: Props) {
  const [activeSection, setActiveSection] = useState<ApplicationFormSection>("org");
  const [form, setForm] = useState<ApplicationFormV1>(initialForm);
  const [honeypot, setHoneypot] = useState("");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const fieldRefs = useRef<Record<string, HTMLElement | null>>({});

  const missing = useMemo(() => requiredMissing(form), [form]);
  const canSubmit = missing.length === 0;

  const missingSummary = useMemo(() => {
    if (missing.length === 0) return null;
    const labels = missing.slice(0, 3).map(friendlyMissingLabel);
    const extraCount = Math.max(0, missing.length - labels.length);
    return extraCount > 0 ? `${labels.join(", ")} +${extraCount}` : labels.join(", ");
  }, [missing]);

  const goToNextSection = () => {
    setActiveSection((previous) => {
      if (previous === "org") return "setup";
      if (previous === "setup") return "readiness";
      return "readiness";
    });
  };

  const goToPreviousSection = () => {
    setActiveSection((previous) => {
      if (previous === "readiness") return "setup";
      if (previous === "setup") return "org";
      return "org";
    });
  };

  const focusField = (field: FieldKey) => {
    const section = fieldToSection[field];
    setActiveSection(section);
    requestAnimationFrame(() => {
      const el = fieldRefs.current[field];
      if (el && "focus" in el) {
        (el as any).focus();
      }
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setAttemptedSubmit(true);

    const nextMissing = requiredMissing(form);
    if (nextMissing.length > 0) {
      focusField(nextMissing[0]);
      return;
    }

    if (activeSection !== "readiness") {
      setActiveSection("readiness");
      return;
    }

    const details: string[] = [];
    const crmChangeReason = form.crmChangeReason.trim();
    const pilotNotes = form.pilotNotes.trim();
    if (crmChangeReason) details.push(`CRM context:\n${crmChangeReason}`);
    if (pilotNotes) details.push(`Pilot notes:\n${pilotNotes}`);

    onSubmit({
      formVersion: "v1",
      form: {
        ...form,
        contactEmail: normalizeEmail(form.contactEmail),
      },
      honeypot,
      legacy: {
        name: form.contactName.trim(),
        email: normalizeEmail(form.contactEmail),
        organization: form.orgName.trim(),
        currentCrm: buildCurrentCrm(form),
        goals: details.join("\n\n"),
      },
    });
  };

  const showInlineError = (field: FieldKey) =>
    attemptedSubmit && missing.includes(field);

  return (
    <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6">
      <div
        aria-hidden="true"
        className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
      >
        <Label htmlFor={`${idPrefix}-website`}>Website</Label>
        <Input
          id={`${idPrefix}-website`}
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      <Tabs value={activeSection} onValueChange={(value) => setActiveSection(value as ApplicationFormSection)}>
        <div className="-mx-6 overflow-x-auto border-b border-border px-6">
          <TabsList className="h-auto w-full justify-start rounded-none bg-transparent p-0 text-muted-foreground">
          {(
            [
              ["org", "Org snapshot"],
              ["setup", "Current setup"],
              ["readiness", "Confirm"],
            ] as Array<[ApplicationFormSection, string]>
          ).map(([section, label]) => (
            <TabsTrigger
              key={section}
              value={section}
              className={cn(
                "mr-1 inline-flex items-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-xs transition-colors data-[state=active]:bg-secondary data-[state=active]:text-foreground data-[state=active]:shadow-none",
              )}
            >
              <span>{label}</span>
              {sectionComplete(form, section) ? (
                <Check className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
              ) : null}
            </TabsTrigger>
          ))}
          </TabsList>
        </div>

        <TabsContent value="org" className="mt-0 space-y-5 pt-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor={`${idPrefix}-contactName`}>Your name</Label>
              <Input
                id={`${idPrefix}-contactName`}
                value={form.contactName}
                onChange={(e) => setForm((p) => ({ ...p, contactName: e.target.value }))}
                ref={(el) => {
                  fieldRefs.current.contactName = el;
                }}
                aria-invalid={showInlineError("contactName")}
                placeholder="Jane Smith"
              />
              {showInlineError("contactName") ? (
                <p className="text-xs text-destructive">Required.</p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor={`${idPrefix}-contactEmail`}>Work email</Label>
              <Input
                id={`${idPrefix}-contactEmail`}
                type="email"
                value={form.contactEmail}
                onChange={(e) => setForm((p) => ({ ...p, contactEmail: e.target.value }))}
                ref={(el) => {
                  fieldRefs.current.contactEmail = el;
                }}
                aria-invalid={showInlineError("contactEmail")}
                placeholder="jane@nonprofit.org"
              />
              {showInlineError("contactEmail") ? (
                <p className="text-xs text-destructive">Required.</p>
              ) : null}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${idPrefix}-orgName`}>Organization</Label>
            <Input
              id={`${idPrefix}-orgName`}
              value={form.orgName}
              onChange={(e) => setForm((p) => ({ ...p, orgName: e.target.value }))}
              ref={(el) => {
                fieldRefs.current.orgName = el;
              }}
              aria-invalid={showInlineError("orgName")}
              placeholder="Community Foundation of..."
            />
            {showInlineError("orgName") ? (
              <p className="text-xs text-destructive">Required.</p>
            ) : null}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor={`${idPrefix}-orgWebsite`}>
                Website <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Input
                id={`${idPrefix}-orgWebsite`}
                value={form.orgWebsite}
                onChange={(e) => setForm((p) => ({ ...p, orgWebsite: e.target.value }))}
                placeholder="https://"
                inputMode="url"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`${idPrefix}-country`}>Country</Label>
              <Input
                id={`${idPrefix}-country`}
                value={form.country}
                onChange={(e) => setForm((p) => ({ ...p, country: e.target.value }))}
                placeholder="United States"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="setup" className="mt-0 space-y-5 pt-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Annual fundraising volume</Label>
              <Select
                value={form.annualFundraisingVolumeBand}
                onValueChange={(value) =>
                  setForm((p) => ({ ...p, annualFundraisingVolumeBand: value }))
                }
              >
                <SelectTrigger
                  ref={(el) => {
                    fieldRefs.current.annualFundraisingVolumeBand = el;
                  }}
                  aria-invalid={showInlineError("annualFundraisingVolumeBand")}
                >
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  {revenueBands.map((band) => (
                    <SelectItem key={band} value={band}>
                      {band}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {showInlineError("annualFundraisingVolumeBand") ? (
                <p className="text-xs text-destructive">Required.</p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label>Gift transactions per month</Label>
              <Select
                value={form.donationsPerMonthBand}
                onValueChange={(value) => setForm((p) => ({ ...p, donationsPerMonthBand: value }))}
              >
                <SelectTrigger
                  ref={(el) => {
                    fieldRefs.current.donationsPerMonthBand = el;
                  }}
                  aria-invalid={showInlineError("donationsPerMonthBand")}
                >
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  {donationVolumeBands.map((band) => (
                    <SelectItem key={band} value={band}>
                      {band}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {showInlineError("donationsPerMonthBand") ? (
                <p className="text-xs text-destructive">Required.</p>
              ) : null}
            </div>
          </div>

          <div className="space-y-2">
            <Label>What system are you currently using?</Label>
            <Select
              value={form.currentSystem}
              onValueChange={(value) =>
                setForm((p) => ({
                  ...p,
                  currentSystem: value,
                  currentSystemOther: value === "Other" ? p.currentSystemOther : "",
                }))
              }
            >
              <SelectTrigger
                ref={(el) => {
                  fieldRefs.current.currentSystem = el;
                }}
                aria-invalid={showInlineError("currentSystem")}
              >
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                {currentSystems.map((system) => (
                  <SelectItem key={system} value={system}>
                    {system}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {form.currentSystem === "Other" ? (
              <div className="pt-3">
                <Input
                  value={form.currentSystemOther}
                  onChange={(e) => setForm((p) => ({ ...p, currentSystemOther: e.target.value }))}
                  placeholder="Type the system..."
                />
              </div>
            ) : null}
            {showInlineError("currentSystem") ? (
              <p className="text-xs text-destructive">Required.</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${idPrefix}-crmChangeReason`}>
              What&apos;s prompting you to evaluate a new CRM right now?{" "}
              <span className="text-muted-foreground">(optional)</span>
            </Label>
            <Textarea
              id={`${idPrefix}-crmChangeReason`}
              rows={4}
              value={form.crmChangeReason}
              onChange={(e) => setForm((p) => ({ ...p, crmChangeReason: e.target.value }))}
              placeholder="A few sentences is enough."
            />
          </div>
        </TabsContent>

        <TabsContent value="readiness" className="mt-0 space-y-5 pt-5">
          <div className="space-y-2">
            <div className="rounded-md bg-muted/30 p-4">
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Pilot Reminder
              </p>
              <ul className="mt-3 space-y-2.5">
                {[
                  "March-April pilot (4 weeks).",
                  "Week 1 includes a fundraising team workshop to agree the workflows we'll test.",
                  "We'll ask for a point person internally to coordinate setup and weekly check-ins.",
                  "We are selecting 5-10 organizations for this cohort.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 h-px w-4 bg-border shrink-0" aria-hidden="true" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                If the timing isn't right but you'd still like to apply, add a note below and we'll stay in touch.
              </p>
            </div>

            <Label htmlFor={`${idPrefix}-pilotNotes`}>
              Anything else we should know?{" "}
              <span className="text-muted-foreground">(optional)</span>
            </Label>
            <Textarea
              id={`${idPrefix}-pilotNotes`}
              rows={4}
              value={form.pilotNotes}
              onChange={(e) => setForm((p) => ({ ...p, pilotNotes: e.target.value }))}
              ref={(el) => {
                fieldRefs.current.pilotNotes = el;
              }}
              placeholder="Anything that helps us evaluate fit or make the pilot successful."
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="sticky bottom-0 -mx-6 border-t border-border bg-background/95 px-6 py-4 backdrop-blur">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            {attemptedSubmit && missingSummary ? (
              <>
                Missing: <span className="text-foreground">{missingSummary}</span>
              </>
            ) : activeSection !== "readiness" ? (
              <>
                Next: <span className="text-foreground">Confirm</span>
              </>
            ) : (
              "No commitment required to apply."
            )}
          </p>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              disabled={Boolean(disabled) || activeSection === "org"}
              onClick={goToPreviousSection}
            >
              Back
            </Button>
            {activeSection === "readiness" ? (
              <Button type="submit" disabled={Boolean(disabled)}>
                {submitting ? "Submitting..." : "Submit application"}
              </Button>
            ) : (
              <Button type="button" disabled={Boolean(disabled)} onClick={goToNextSection}>
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
