import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="border-b border-border">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="text-sm font-semibold tracking-tight text-foreground">
          Fundraising for Twenty
        </Link>
        <Button asChild size="sm" variant="outline">
          <Link to="/">Apply</Link>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
