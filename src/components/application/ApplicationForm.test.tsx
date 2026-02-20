import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ApplicationForm, {
  initialForm,
  type ApplicationFormV1,
} from "@/components/application/ApplicationForm";

function buildValidForm(): ApplicationFormV1 {
  return {
    ...initialForm,
    orgName: "Northbridge Foundation",
    contactName: "Jane Smith",
    contactEmail: "jane@northbridge.org",
    currentSystem: "Bloomerang",
    donationsPerMonthBand: "201-500",
    annualFundraisingVolumeBand: "£1M-£5M",
  };
}

describe("ApplicationForm submit behavior", () => {
  it("does not submit from implicit form submit events", () => {
    const onSubmit = vi.fn();
    const { container } = render(
      <ApplicationForm
        idPrefix="application-form-test"
        value={buildValidForm()}
        activeSection="readiness"
        onSubmit={onSubmit}
      />,
    );

    const form = container.querySelector("form");
    expect(form).not.toBeNull();
    fireEvent.submit(form!);

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("submits when the submit button is explicitly activated", () => {
    const onSubmit = vi.fn();
    render(
      <ApplicationForm
        idPrefix="application-form-test"
        value={buildValidForm()}
        activeSection="readiness"
        onSubmit={onSubmit}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /submit application/i }));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
