import {
  Button,
  type ButtonProps,
} from "@/components/ui/button";
import { useApplicationSheet } from "@/components/application/ApplicationSheetProvider";

type ApplicationTriggerButtonProps = Omit<ButtonProps, "asChild">;

const ApplicationTriggerButton = ({
  onClick,
  children,
  ...buttonProps
}: ApplicationTriggerButtonProps) => {
  const { openApplication } = useApplicationSheet();

  return (
    <Button
      {...buttonProps}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          openApplication();
        }
      }}
    >
      {children ?? "Apply"}
    </Button>
  );
};

export default ApplicationTriggerButton;
