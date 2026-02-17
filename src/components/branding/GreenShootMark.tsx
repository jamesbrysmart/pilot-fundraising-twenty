import { cn } from "@/lib/utils";

type GreenShootMarkProps = {
  className?: string;
};

const GreenShootMark = ({ className }: GreenShootMarkProps) => {
  return (
    <svg
      viewBox="0 0 36 36"
      aria-hidden="true"
      className={cn("h-20 w-20 text-[hsl(var(--shoot))] md:h-24 md:w-24", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 28.4C17.7 24.5 17.5 20.6 18.3 16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M18 17C18 11.5 22.4 8.2 28.5 8.2C28.5 13.7 24.1 17 18 17Z" fill="currentColor" />
      <path
        d="M18 20.5C18 15.6 14.2 12.8 9 12.8C9 17.7 12.7 20.5 18 20.5Z"
        fill="currentColor"
        fillOpacity="0.82"
      />
      <ellipse
        cx="18"
        cy="29"
        rx="2"
        ry="1.3"
        fill="currentColor"
        fillOpacity="0.28"
      />
    </svg>
  );
};

export default GreenShootMark;
