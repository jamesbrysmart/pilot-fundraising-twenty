import { createRoot, type Root } from "react-dom/client";
import FormsIsland from "../components/forms/FormsIsland";

let root: Root | undefined;

export function mountForms(type: "enquiry" | "contact", source?: string) {
  if (!root) {
    const host = document.getElementById("forms-root");
    if (!host) return;
    root = createRoot(host);
    root.render(<FormsIsland initialType={type} initialSource={source} />);
  } else {
    document.dispatchEvent(new CustomEvent("f42:open-form", { detail: { type, source } }));
  }
}
