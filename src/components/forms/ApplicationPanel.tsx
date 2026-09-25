import { useEffect, useId, useState } from "react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";
import ApplicationForm, {
  initialForm,
  type ApplicationFormResult,
  type ApplicationFormSection,
  type ApplicationFormV1,
} from "../application/ApplicationForm";

export default function ApplicationPanel({ initialOpen }: { initialOpen: boolean }) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formKey, setFormKey] = useState(0);
  const [draftSection, setDraftSection] = useState<ApplicationFormSection>("org");
  const [draftForm, setDraftForm] = useState<ApplicationFormV1>(initialForm);
  const formId = useId();

  useEffect(() => {
    const edge = document.querySelector<HTMLButtonElement>("[data-edge-toggle]");
    if (!edge) return;
    edge.setAttribute("aria-expanded", String(isOpen));
    edge.setAttribute("aria-label", isOpen ? "Close enquiry panel" : "Open enquiry panel");
    const label = edge.querySelector("span");
    if (label) label.textContent = isOpen ? "Close Enquiry" : "Enquire";
  }, [isOpen]);

  useEffect(() => {
    const listener = (event: Event) => {
      const { type } = (event as CustomEvent<{ type: string }>).detail;
      if (type === "enquiry") setIsOpen(true);
      if (type === "contact") setIsOpen(false);
    };
    document.addEventListener("f42:open-form", listener);
    return () => document.removeEventListener("f42:open-form", listener);
  }, []);

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
    setDraftSection("org");
    setDraftForm(initialForm);
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent
        id="application-sheet"
        side="right"
        className="w-full overflow-y-auto border-l border-border p-0 sm:max-w-3xl [&>button]:hidden"
      >
        {submitted ? (
          <div className="px-6 pb-10 pt-12">
            <h2 className="text-2xl font-semibold tracking-tight">Enquiry received</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Thanks for getting in touch. We&apos;ll review what you&apos;ve shared
              and contact you to discuss fit and the most useful next step.
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
                    Tell us about your organisation
                  </SheetTitle>
                  <SheetDescription>
                    Short enquiry: three sections, about 3-5 minutes.
                  </SheetDescription>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    You can hide this panel without losing what you’ve entered. Progress isn’t saved if you refresh.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
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
              value={draftForm}
              onChange={setDraftForm}
              activeSection={draftSection}
              onActiveSectionChange={setDraftSection}
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
  );
}
