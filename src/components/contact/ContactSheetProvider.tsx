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

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type ContactUtmData = {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
};

type ContactSheetContextValue = {
  isOpen: boolean;
  openContact: (source?: string) => void;
  closeContact: () => void;
};

const ContactSheetContext = createContext<ContactSheetContextValue | undefined>(
  undefined,
);

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

export const useContactSheet = () => {
  const context = useContext(ContactSheetContext);
  if (!context) {
    throw new Error("useContactSheet must be used within ContactSheetProvider");
  }
  return context;
};

const ContactSheetProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("unknown");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [honeypot, setHoneypot] = useState("");
  const formId = useId();

  const openContact = (nextSource = "unknown") => {
    setSource(nextSource);
    setIsOpen(true);
  };
  const closeContact = () => setIsOpen(false);

  const handleChange =
    (field: keyof ContactFormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((previous) => ({ ...previous, [field]: event.target.value }));
    };

  const getUtmData = (): ContactUtmData => {
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source,
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
    setSource("unknown");
    setIsOpen(false);
  };

  const contextValue = useMemo(
    () => ({
      isOpen,
      openContact,
      closeContact,
    }),
    [isOpen],
  );

  return (
    <ContactSheetContext.Provider value={contextValue}>
      {children}

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          side="right"
          className="w-full overflow-y-auto border-l border-border p-0 sm:max-w-xl"
        >
          {submitted ? (
            <div className="px-6 pb-10 pt-12">
              <h2 className="text-2xl font-semibold tracking-tight">Message received</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Thanks for reaching out. We will follow up soon.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Button onClick={resetAndClose}>Close panel</Button>
              </div>
            </div>
          ) : (
            <>
              <SheetHeader className="border-b border-border px-6 py-6 text-left">
                <div className="space-y-2">
                  <SheetTitle className="text-xl tracking-tight">Get in touch</SheetTitle>
                  <SheetDescription>
                    Questions, collaboration, or pilot interest - send us a note.
                  </SheetDescription>
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
                  <Label htmlFor={`${formId}-name`}>Name</Label>
                  <Input
                    id={`${formId}-name`}
                    required
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={handleChange("name")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`${formId}-email`}>Email</Label>
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
                  <Label htmlFor={`${formId}-message`}>Message</Label>
                  <Textarea
                    id={`${formId}-message`}
                    required
                    rows={5}
                    placeholder="How can we help?"
                    value={formData.message}
                    onChange={handleChange("message")}
                  />
                </div>

                <div className="flex items-center justify-between gap-4 pt-1">
                  <p className="text-xs text-muted-foreground">
                    We usually respond within a few days.
                  </p>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send message"}
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
    </ContactSheetContext.Provider>
  );
};

export default ContactSheetProvider;
