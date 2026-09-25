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
  value?: ApplicationFormV1;
  onChange?: (next: ApplicationFormV1) => void;
  activeSection?: ApplicationFormSection;
  onActiveSectionChange?: (next: ApplicationFormSection) => void;
};

const revenueBands = [
  "Under £250k",
  "£250k-£1M",
  "£1M-£5M",
  "£5M+",
  "Not sure",
] as const;

const donationVolumeBands = [
  "0-50",
  "51-200",
  "201-500",
  "501+",
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

export const initialForm: ApplicationFormV1 = {
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

function isValidEmail(value: string): boolean {
  // Pragmatic validation: good UX without trying to fully implement RFC 5322.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
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
  const email = normalizeEmail(form.contactEmail);
  if (!email || !isValidEmail(email)) missing.push("contactEmail");
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
      return "Organisation name";
    case "contactName":
      return "Primary contact name";
    case "contactEmail":
      return "Valid work email";
    case "currentSystem":
      return "Current system";
    case "donationsPerMonthBand":
      return "Donations processed per month";
    case "annualFundraisingVolumeBand":
      return "Annual fundraising volume";
  }
}

export default function ApplicationForm({
  disabled,
  submitting,
  idPrefix,
  onSubmit,
  value,
  onChange,
  activeSection: controlledActiveSection,
  onActiveSectionChange,
}: Props) {
  const [internalActiveSection, setInternalActiveSection] =
    useState<ApplicationFormSection>("org");
  const activeSection = controlledActiveSection ?? internalActiveSection;

  const [internalForm, setInternalForm] = useState<ApplicationFormV1>(initialForm);
  const form = value ?? internalForm;

  const setForm = (
    updater:
      | ApplicationFormV1
      | ((previous: ApplicationFormV1) => ApplicationFormV1),
  ) => {
    const next =
      typeof updater === "function"
        ? updater(form)
        : updater;
    if (onChange) {
      onChange(next);
    } else {
      setInternalForm(next);
    }
  };

  const setActiveSection = (
    updater:
      | ApplicationFormSection
      | ((previous: ApplicationFormSection) => ApplicationFormSection),
  ) => {
    const next =
      typeof updater === "function"
        ? updater(activeSection)
        : updater;
    if (onActiveSectionChange) {
      onActiveSectionChange(next);
    } else {
      setInternalActiveSection(next);
    }
  };
  const [honeypot, setHoneypot] = useState("");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const fieldRefs = useRef<Record<string, HTMLElement | null>>({});

  const missing = useMemo(() => requiredMissing(form), [form]);

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
      if (el) {
        el.focus();
      }
    });
  };

  const handleSubmit = () => {
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
    if (pilotNotes) details.push(`Additional context:\n${pilotNotes}`);

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

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const showInlineError = (field: FieldKey) =>
    attemptedSubmit && missing.includes(field);

  return (
    <form onSubmit={handleFormSubmit} className="space-y-5 px-6 py-6">
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
              {section !== "readiness" && sectionComplete(form, section) ? (
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
                required
                value={form.contactName}
                onChange={(e) => setForm((p) => ({ ...p, contactName: e.target.value }))}
                ref={(el) => {
                  fieldRefs.current.contactName = el;
                }}
                aria-invalid={showInlineError("contactName")}
                aria-describedby={showInlineError("contactName") ? `${idPrefix}-contactName-error` : undefined}
                placeholder="Jane Smith"
              />
              {showInlineError("contactName") ? (
                <p id={`${idPrefix}-contactName-error`} className="text-xs text-destructive">Required.</p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor={`${idPrefix}-contactEmail`}>Work email</Label>
              <Input
                id={`${idPrefix}-contactEmail`}
                type="email"
                required
                value={form.contactEmail}
                onChange={(e) => setForm((p) => ({ ...p, contactEmail: e.target.value }))}
                onBlur={() => {
                  const next = normalizeEmail(form.contactEmail);
                  if (next !== form.contactEmail) {
                    setForm((previous) => ({ ...previous, contactEmail: next }));
                  }
                }}
                ref={(el) => {
                  fieldRefs.current.contactEmail = el;
                }}
                aria-invalid={showInlineError("contactEmail")}
                aria-describedby={showInlineError("contactEmail") ? `${idPrefix}-contactEmail-error` : undefined}
                autoComplete="email"
                inputMode="email"
                spellCheck={false}
                autoCapitalize="none"
                placeholder="jane@nonprofit.org"
              />
              {showInlineError("contactEmail") ? (
                <p id={`${idPrefix}-contactEmail-error`} className="text-xs text-destructive">
                  {normalizeEmail(form.contactEmail)
                    ? "Enter a valid email address."
                    : "Required."}
                </p>
              ) : null}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${idPrefix}-orgName`}>Organisation</Label>
            <Input
              id={`${idPrefix}-orgName`}
              required
              value={form.orgName}
              onChange={(e) => setForm((p) => ({ ...p, orgName: e.target.value }))}
              ref={(el) => {
                fieldRefs.current.orgName = el;
              }}
              aria-invalid={showInlineError("orgName")}
              aria-describedby={showInlineError("orgName") ? `${idPrefix}-orgName-error` : undefined}
              placeholder="Community Foundation of..."
            />
            {showInlineError("orgName") ? (
              <p id={`${idPrefix}-orgName-error`} className="text-xs text-destructive">Required.</p>
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
              <Label htmlFor={`${idPrefix}-country`}>
                Country <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Input
                id={`${idPrefix}-country`}
                value={form.country}
                onChange={(e) => setForm((p) => ({ ...p, country: e.target.value }))}
                placeholder="United Kingdom"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="setup" className="mt-0 space-y-5 pt-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor={`${idPrefix}-annualFundraisingVolumeBand`}>What is your annual fundraising income?</Label>
              <Select
                required
                value={form.annualFundraisingVolumeBand}
                onValueChange={(value) =>
                  setForm((p) => ({ ...p, annualFundraisingVolumeBand: value }))
                }
              >
                <SelectTrigger
                  id={`${idPrefix}-annualFundraisingVolumeBand`}
                  ref={(el) => {
                    fieldRefs.current.annualFundraisingVolumeBand = el;
                  }}
                  aria-invalid={showInlineError("annualFundraisingVolumeBand")}
                  aria-describedby={showInlineError("annualFundraisingVolumeBand") ? `${idPrefix}-annualFundraisingVolumeBand-error` : undefined}
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
                <p id={`${idPrefix}-annualFundraisingVolumeBand-error`} className="text-xs text-destructive">Required.</p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor={`${idPrefix}-donationsPerMonthBand`}>How many donations do you process each month?</Label>
              <Select
                required
                value={form.donationsPerMonthBand}
                onValueChange={(value) => setForm((p) => ({ ...p, donationsPerMonthBand: value }))}
              >
                <SelectTrigger
                  id={`${idPrefix}-donationsPerMonthBand`}
                  ref={(el) => {
                    fieldRefs.current.donationsPerMonthBand = el;
                  }}
                  aria-invalid={showInlineError("donationsPerMonthBand")}
                  aria-describedby={showInlineError("donationsPerMonthBand") ? `${idPrefix}-donationsPerMonthBand-error` : undefined}
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
                <p id={`${idPrefix}-donationsPerMonthBand-error`} className="text-xs text-destructive">Required.</p>
              ) : null}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${idPrefix}-currentSystem`}>Which system does your team currently use to track donations?</Label>
            <Select
              required
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
                id={`${idPrefix}-currentSystem`}
                ref={(el) => {
                  fieldRefs.current.currentSystem = el;
                }}
                aria-invalid={showInlineError("currentSystem")}
                aria-describedby={showInlineError("currentSystem") ? `${idPrefix}-currentSystem-error` : undefined}
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
                <Label htmlFor={`${idPrefix}-currentSystemOther`} className="sr-only">Name of your current system</Label>
                <Input
                  id={`${idPrefix}-currentSystemOther`}
                  value={form.currentSystemOther}
                  onChange={(e) => setForm((p) => ({ ...p, currentSystemOther: e.target.value }))}
                  placeholder="Type the system..."
                />
              </div>
            ) : null}
            {showInlineError("currentSystem") ? (
              <p id={`${idPrefix}-currentSystem-error`} className="text-xs text-destructive">Required.</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${idPrefix}-crmChangeReason`}>
              Why are you exploring a new CRM right now?{" "}
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
                What happens next
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We&apos;ll review what you&apos;ve shared and contact you to discuss
                your current setup, whether Fundraising for Twenty could be a
                good fit and the most useful next step.
              </p>
            </div>

            <Label htmlFor={`${idPrefix}-pilotNotes`}>
              Additional context{" "}
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
              placeholder="Tell us about any priorities, timing, wider CRM needs or implementation questions."
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="sticky bottom-0 -mx-6 border-t border-border bg-background/95 px-6 py-4 backdrop-blur">
        <div className="flex items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground" role="status">
            {attemptedSubmit && missingSummary ? (
              <>
                Missing: <span className="text-foreground">{missingSummary}</span>
              </>
            ) : null}
          </div>
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
              <Button
                type="button"
                disabled={Boolean(disabled)}
                onClick={handleSubmit}
              >
                {submitting ? "Sending..." : "Send enquiry"}
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
