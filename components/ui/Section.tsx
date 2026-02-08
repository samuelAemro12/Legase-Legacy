import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "gray";
  id?: string;
}

export default function Section({
  children,
  className = "",
  background = "white",
  id,
}: SectionProps) {
  const bgClass = background === "gray" ? "bg-slate-50" : "bg-white";

  return (
    <section id={id} className={`section-padding ${bgClass} ${className}`}>
      <div className="container-custom">{children}</div>
    </section>
  );
}
