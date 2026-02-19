import {
  createContext,
  useContext,
  useId,
  useMemo,
  useState,
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
import DetailsSheetPanel from "@/components/details/DetailsSheetPanel";
import ApplicationForm, {
  type ApplicationFormResult,
} from "@/components/application/ApplicationForm";

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
  const [formKey, setFormKey] = useState(0);
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

  const submitApplication = async (result: ApplicationFormResult) => {
    if (isSubmitting) return;
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...result.legacy,
          form: result.form,
          website: result.honeypot,
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
    setFormKey((previous) => previous + 1);
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
          className="w-full overflow-y-auto border-l border-border p-0 sm:max-w-3xl [&>button]:hidden"
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
                      Short application: three sections, about 3-5 minutes.
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

              <ApplicationForm
                key={formKey}
                idPrefix={formId}
                disabled={isSubmitting}
                submitting={isSubmitting}
                onSubmit={submitApplication}
              />

              {submitError ? (
                <p className="-mt-2 px-6 pb-6 text-sm text-destructive" role="alert">
                  {submitError}
                </p>
              ) : null}
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
