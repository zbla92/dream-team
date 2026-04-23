"use client";

type Props = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base md:text-lg",
};

export default function TerminalMark({ size = "md", className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono ${sizeMap[size]} ${className}`}
      aria-label="Dream Team"
    >
      <span className="text-fg-dim">~/</span>
      <span className="text-fg">dream-team</span>
      <span className="text-accent">$</span>
      <span className="text-accent caret">_</span>
    </span>
  );
}
