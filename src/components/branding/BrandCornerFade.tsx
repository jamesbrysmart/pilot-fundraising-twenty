const BrandCornerFade = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(145deg, hsl(var(--brand-strong)) 0%, hsl(var(--brand-strong)) 42%, hsl(var(--brand-transition)) 76%, hsl(var(--background)) 100%)",
      }}
    />
  );
};

export default BrandCornerFade;
