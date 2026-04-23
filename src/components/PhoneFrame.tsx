import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Tailwind width constraint, e.g. "w-44 md:w-56" */
  widthClass?: string;
  className?: string;
};

/**
 * Stylised iPhone-ish device chrome. Portrait screenshots (9:19-ish) rendered
 * inside this look intentional instead of letterboxed.
 * Keep it simple — rounded frame + notch + inner bezel.
 */
export default function PhoneFrame({
  children,
  widthClass = "w-44 md:w-52",
  className = "",
}: Props) {
  return (
    <div
      className={[
        "relative aspect-[9/19]",
        widthClass,
        "rounded-[2rem] p-[3px]",
        "bg-gradient-to-br from-zinc-700 via-zinc-900 to-black",
        "shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.04)]",
        className,
      ].join(" ")}
    >
      <div className="relative w-full h-full rounded-[1.85rem] overflow-hidden bg-black">
        {/* notch */}
        <div
          aria-hidden
          className="absolute top-[5px] left-1/2 -translate-x-1/2 h-3.5 w-20 rounded-full bg-black z-20 border border-black/60"
        />
        {children}
      </div>
    </div>
  );
}
