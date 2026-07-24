import GreenShootMark from "@/components/branding/GreenShootMark";

const Footer = () => {
  return (
    <footer className="relative py-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0">
        <span className="relative left-1/2 block h-px w-screen -translate-x-1/2 bg-border" />

        <div className="absolute left-1/2 top-0 w-screen -translate-x-1/2">
          <div className="container relative">
            <div className="absolute left-[58%] top-0 -translate-x-1/2 -translate-y-[85%] md:left-auto md:right-12 md:translate-x-0">
              <GreenShootMark />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <p className="text-xs text-muted-foreground">
          Fundraising for Twenty is a specialist fundraising app for{" "}
          <a
            href="https://twenty.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors hover:text-foreground"
          >
            Twenty CRM
          </a>
          , developed and supported by{" "}
          <a
            href="https://3trees.digital"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors hover:text-foreground"
          >
            3Trees Digital
          </a>
          . It is not an official Twenty product.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
