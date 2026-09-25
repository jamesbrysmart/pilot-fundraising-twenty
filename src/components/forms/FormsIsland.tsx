import { useEffect } from "react";
import ContactSheetProvider, { useContactSheet } from "../contact/ContactSheetProvider";
import ApplicationPanel from "./ApplicationPanel";

export type FormRequest = { id: number; type: "enquiry" | "contact"; source?: string };

function ContactBridge({ request }: { request: FormRequest }) {
  const { openContact, closeContact } = useContactSheet();
  useEffect(() => {
    if (request.type === "contact") openContact(request.source);
    else closeContact();
  }, [request.id, request.type, request.source, openContact, closeContact]);
  return <ApplicationPanel request={request} />;
}

export default function FormsIsland({ request }: { request: FormRequest }) {
  return (
    <ContactSheetProvider>
      <ContactBridge request={request} />
    </ContactSheetProvider>
  );
}
