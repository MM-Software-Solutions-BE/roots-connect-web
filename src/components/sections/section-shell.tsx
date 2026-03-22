import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  "aria-labelledby"?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
};

/**
 * Shared max-width, horizontal padding, vertical rhythm, anchor offset for sticky nav.
 */
export function SectionShell({
  id,
  "aria-labelledby": labelledBy,
  className,
  containerClassName,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("scroll-mt-24", className)}
    >
      <div
        className={cn(
          "mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
