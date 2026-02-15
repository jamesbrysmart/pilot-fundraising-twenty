const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container">
        <p className="text-xs text-muted-foreground">
          A community-built extension for{" "}
          <a
            href="https://twenty.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            Twenty
          </a>
          . Not an official Twenty product.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
