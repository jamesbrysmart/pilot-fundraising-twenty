const details = document.querySelector<HTMLDialogElement>("#details-dialog");
const detailsTabs = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-details-tab]"));
const detailsSections = Array.from(document.querySelectorAll<HTMLElement>("[data-details-content]"));

function selectDetails(id: string) {
  for (const tab of detailsTabs) {
    const active = tab.dataset.detailsTab === id;
    tab.classList.toggle("bg-secondary", active);
    tab.classList.toggle("text-foreground", active);
    tab.classList.toggle("text-muted-foreground", !active);
    tab.setAttribute("aria-current", active ? "true" : "false");
  }
  for (const section of detailsSections) section.hidden = section.dataset.detailsContent !== id;
}

let formsPromise: Promise<typeof import("./forms-entry")> | undefined;
function openForm(type: "enquiry" | "contact", source?: string) {
  if (details?.open) details.close();
  formsPromise ??= import("./forms-entry");
  void formsPromise.then(({ mountForms }) => mountForms(type, source));
}

document.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  const panelButton = target.closest<HTMLButtonElement>("[data-panel]");
  if (panelButton) {
    const panel = panelButton.dataset.panel;
    if (panel === "details") {
      selectDetails("starting-point");
      details?.showModal();
    } else if (panel === "enquiry" || panel === "contact") {
      openForm(panel, panelButton.dataset.source);
    }
    return;
  }
  const tab = target.closest<HTMLButtonElement>("[data-details-tab]");
  if (tab?.dataset.detailsTab) selectDetails(tab.dataset.detailsTab);
  if (target.closest("[data-close-details]")) details?.close();
});

details?.addEventListener("click", (event) => {
  if (event.target === details) details.close();
});

const workflowLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-workflow-link]"));
const workflowArticles = workflowLinks
  .map((link) => document.getElementById(link.dataset.workflowLink ?? ""))
  .filter((element): element is HTMLElement => Boolean(element));
function selectWorkflow(id: string) {
  for (const link of workflowLinks) {
    const active = link.dataset.workflowLink === id;
    link.classList.toggle("text-foreground", active);
    link.classList.toggle("text-muted-foreground", !active);
    link.querySelector("span")?.classList.toggle("hidden", !active);
  }
}
for (const link of workflowLinks) {
  link.addEventListener("click", () => selectWorkflow(link.dataset.workflowLink ?? ""));
}
if ("IntersectionObserver" in window && workflowArticles.length) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) =>
      b.intersectionRatio - a.intersectionRatio || a.boundingClientRect.top - b.boundingClientRect.top
    );
    if (visible[0]?.target.id) selectWorkflow(visible[0].target.id);
  }, { rootMargin: "-25% 0px -65% 0px", threshold: [0.15, 0.3, 0.5, 0.7] });
  workflowArticles.forEach((article) => observer.observe(article));
}
