import { Link } from "react-router-dom";
import ApplicationTriggerButton from "@/components/application/ApplicationTriggerButton";
import { useDetailsSheet } from "@/components/application/ApplicationSheetProvider";
import GreenShootMark from "@/components/branding/GreenShootMark";

const Navbar = () => {
  const { openDetails } = useDetailsSheet();

  return (
    <header className="border-b border-border">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground"
          >
            <GreenShootMark className="h-6 w-6 md:h-7 md:w-7" />
            Fundraising for Twenty
          </Link>
          <nav className="hidden items-center gap-3 text-xs text-muted-foreground md:flex">
            <button
              type="button"
              onClick={openDetails}
              className="underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Details
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ApplicationTriggerButton size="sm" variant="outline">
            Apply
          </ApplicationTriggerButton>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
