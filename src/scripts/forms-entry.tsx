import { createRoot, type Root } from "react-dom/client";
import FormsIsland, { type FormRequest } from "../components/forms/FormsIsland";

let root: Root | undefined;
let requestId = 0;

export function mountForms(type: FormRequest["type"], source?: string) {
  if (!root) {
    const host = document.getElementById("forms-root");
    if (!host) throw new Error("Form host is missing");
    root = createRoot(host);
  }
  root.render(<FormsIsland request={{ id: ++requestId, type, source }} />);
}
