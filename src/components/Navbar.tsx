import { Link } from "react-router-dom";
import ApplicationTriggerButton from "@/components/application/ApplicationTriggerButton";
import { useDetailsSheet } from "@/components/application/ApplicationSheetProvider";

const Navbar = () => {
  const { openDetails } = useDetailsSheet();

  return (
    <header className="border-b border-border">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-sm font-semibold tracking-tight text-foreground">
            Fundraising for Twenty
          </Link>
          <nav className="hidden items-center gap-3 text-xs text-muted-foreground md:flex">
            <Link to="/" className="transition-colors hover:text-foreground">
              Landing
            </Link>
            <button
              type="button"
              onClick={openDetails}
              className="transition-colors hover:text-foreground"
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
