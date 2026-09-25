import { useEffect, useRef } from "react";
import ContactSheetProvider, { useContactSheet } from "../contact/ContactSheetProvider";
import ApplicationPanel from "./ApplicationPanel";

type FormEventDetail = { type: "enquiry" | "contact"; source?: string };

function ContactBridge({ initialType, initialSource }: { initialType: FormEventDetail["type"]; initialSource?: string }) {
  const { openContact, closeContact } = useContactSheet();
  const actions = useRef({ openContact, closeContact });
  actions.current = { openContact, closeContact };
  const initial = useRef({ type: initialType, source: initialSource });
  useEffect(() => {
    if (initial.current.type === "contact") actions.current.openContact(initial.current.source);
    const listener = (event: Event) => {
      const { type, source } = (event as CustomEvent<FormEventDetail>).detail;
      if (type === "contact") actions.current.openContact(source);
      if (type === "enquiry") actions.current.closeContact();
    };
    document.addEventListener("f42:open-form", listener);
    return () => document.removeEventListener("f42:open-form", listener);
  }, []);
  return <ApplicationPanel initialOpen={initialType === "enquiry"} />;
}

export default function FormsIsland(props: { initialType: FormEventDetail["type"]; initialSource?: string }) {
  return (
    <ContactSheetProvider>
      <ContactBridge {...props} />
    </ContactSheetProvider>
  );
}
