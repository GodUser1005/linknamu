import type { ReactNode } from "react";

type LinkCardProps = {
  label: string;
  href: string;
  icon: ReactNode;
};

export default function LinkCard({ label, href, icon }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center gap-3 rounded-2xl border border-white/60 bg-white/40 px-5 py-4 text-[var(--foreground)] shadow-[0_4px_20px_-10px_rgba(120,72,32,0.3)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-[0_10px_25px_-10px_rgba(120,72,32,0.35)] dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      <span className="flex h-5 w-5 shrink-0 items-center justify-center text-base leading-none">
        {icon}
      </span>
      <span className="flex-1 text-center font-medium">{label}</span>
    </a>
  );
}
