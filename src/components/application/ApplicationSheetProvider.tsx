import {
  createContext,
  useContext,
  useId,
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import DetailsSheetPanel from "@/components/details/DetailsSheetPanel";

type ApplicationFormData = {
  name: string;
  email: string;
  organization: string;
  currentCrm: string;
  goals: string;
};

type ApplicationUtmData = {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
};

type ApplicationSheetContextValue = {
  isOpen: boolean;
  openApplication: () => void;
  closeApplication: () => void;
  toggleApplication: () => void;
  isDetailsOpen: boolean;
  openDetails: () => void;
  closeDetails: () => void;
};

const ApplicationSheetContext = createContext<
  ApplicationSheetContextValue | undefined
>(undefined);

const initialFormData: ApplicationFormData = {
  name: "",
  email: "",
  organization: "",
  currentCrm: "",
  goals: "",
};

export const useApplicationSheet = () => {
  const context = useContext(ApplicationSheetContext);
  if (!context) {
    throw new Error(
      "useApplicationSheet must be used within ApplicationSheetProvider",
    );
  }
  return context;
};

export const useDetailsSheet = () => {
  const context = useContext(ApplicationSheetContext);
  if (!context) {
    throw new Error("useDetailsSheet must be used within ApplicationSheetProvider");
  }
  return {
    isOpen: context.isDetailsOpen,
    openDetails: context.openDetails,
    closeDetails: context.closeDetails,
  };
};

const ApplicationSheetProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState<ApplicationFormData>(initialFormData);
  const [honeypot, setHoneypot] = useState("");
  const formId = useId();

  const openApplication = () => {
    setIsDetailsOpen(false);
    setIsOpen(true);
  };
  const closeApplication = () => setIsOpen(false);
  const toggleApplication = () =>
    setIsOpen((previous) => {
      const next = !previous;
      if (next) {
        setIsDetailsOpen(false);
      }
      return next;
    });
  const openDetails = () => {
    setIsOpen(false);
    setIsDetailsOpen(true);
  };
  const closeDetails = () => setIsDetailsOpen(false);

  const handleChange =
    (field: keyof ApplicationFormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((previous) => ({ ...previous, [field]: event.target.value }));
    };

  const getUtmData = (): ApplicationUtmData => {
    const params = new URLSearchParams(window.location.search);
    const value = (key: string) => params.get(key) ?? undefined;
    return {
      source: value("utm_source"),
      medium: value("utm_medium"),
      campaign: value("utm_campaign"),
      content: value("utm_content"),
      term: value("utm_term"),
    };
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (isSubmitting) return;
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          pageUrl: window.location.href,
          utm: getUtmData(),
          website: honeypot,
        }),
      });

      if (!response.ok) {
        setSubmitError("Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setSubmitError(null);
    setIsSubmitting(false);
    setFormData(initialFormData);
    setHoneypot("");
    setIsOpen(false);
  };

  const contextValue = useMemo(
    () => ({
      isOpen,
      openApplication,
      closeApplication,
      toggleApplication,
      isDetailsOpen,
      openDetails,
      closeDetails,
    }),
    [isOpen, isDetailsOpen],
  );

  const showEdgeToggle = location.pathname === "/";

  return (
    <ApplicationSheetContext.Provider value={contextValue}>
      {children}

      {showEdgeToggle ? (
        <button
          type="button"
          onClick={toggleApplication}
          aria-expanded={isOpen}
          aria-controls="application-sheet"
          aria-label={isOpen ? "Close application panel" : "Open application panel"}
          className="fixed right-0 top-1/2 z-40 -translate-y-1/2 rounded-l-md border border-r-0 border-border bg-background/95 px-2 py-3 text-[11px] uppercase tracking-wider text-muted-foreground shadow-sm backdrop-blur transition-colors hover:text-foreground"
        >
          <span className="[writing-mode:vertical-rl] [text-orientation:mixed]">
            {isOpen ? "Close Application" : "Apply For Pilot"}
          </span>
        </button>
      ) : null}

      <Sheet
        open={isOpen}
        onOpenChange={(nextOpen) => {
          setIsOpen(nextOpen);
          if (nextOpen) {
            setIsDetailsOpen(false);
          }
        }}
      >
        <SheetContent
          id="application-sheet"
          side="right"
          className="w-full overflow-y-auto border-l border-border p-0 sm:max-w-xl [&>button]:hidden"
        >
          {submitted ? (
            <div className="px-6 pb-10 pt-12">
              <h2 className="text-2xl font-semibold tracking-tight">
                Application received
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Thanks for applying. We&apos;ll review your submission and follow
                up within a few days.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Button onClick={resetAndClose}>Close panel</Button>
              </div>
            </div>
          ) : (
            <>
              <SheetHeader className="border-b border-border px-6 py-6 text-left">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <SheetTitle className="text-xl tracking-tight">
                      Apply for Pilot
                    </SheetTitle>
                    <SheetDescription>
                      Short application: five fields, about 3-5 minutes.
                    </SheetDescription>
                  </div>
                  <button
                    type="button"
                    onClick={closeApplication}
                    className="rounded-md border border-border bg-background px-3 py-2 text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Hide to edge -&gt;
                  </button>
                </div>
              </SheetHeader>

              <form onSubmit={handleSubmit} className="space-y-6 px-6 py-6">
                <div
                  aria-hidden="true"
                  className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
                >
                  <Label htmlFor={`${formId}-website`}>Website</Label>
                  <Input
                    id={`${formId}-website`}
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(event) => setHoneypot(event.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`${formId}-name`}>Your name</Label>
                  <Input
                    id={`${formId}-name`}
                    required
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={handleChange("name")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`${formId}-email`}>Work email</Label>
                  <Input
                    id={`${formId}-email`}
                    type="email"
                    required
                    placeholder="jane@nonprofit.org"
                    value={formData.email}
                    onChange={handleChange("email")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`${formId}-organization`}>Organization</Label>
                  <Input
                    id={`${formId}-organization`}
                    required
                    placeholder="Community Foundation of..."
                    value={formData.organization}
                    onChange={handleChange("organization")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`${formId}-crm`}>Current CRM (optional)</Label>
                  <Input
                    id={`${formId}-crm`}
                    placeholder="Bloomerang, Salesforce, spreadsheets..."
                    value={formData.currentCrm}
                    onChange={handleChange("currentCrm")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`${formId}-goals`}>
                    What do you want to evaluate in the pilot?
                  </Label>
                  <Textarea
                    id={`${formId}-goals`}
                    required
                    rows={4}
                    placeholder="A few sentences is enough."
                    value={formData.goals}
                    onChange={handleChange("goals")}
                  />
                </div>

                <div className="flex items-center justify-between gap-4 pt-1">
                  <p className="text-xs text-muted-foreground">
                    No commitment required to apply.
                  </p>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit application"}
                  </Button>
                </div>

                {submitError ? (
                  <p className="text-sm text-destructive" role="alert">
                    {submitError}
                  </p>
                ) : null}
              </form>
            </>
          )}
        </SheetContent>
      </Sheet>

      <DetailsSheetPanel
        open={isDetailsOpen}
        onOpenChange={(nextOpen) => {
          setIsDetailsOpen(nextOpen);
          if (nextOpen) {
            setIsOpen(false);
          }
        }}
        onClose={closeDetails}
        onOpenApplication={openApplication}
      />
    </ApplicationSheetContext.Provider>
  );
};

export default ApplicationSheetProvider;
