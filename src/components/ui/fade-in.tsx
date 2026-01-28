import { type ReactNode } from "react";
import { useInView } from "../../hooks/use-in-view";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
}

export function FadeIn({ children, delay = 10, className = "", threshold = 0.1 }: FadeInProps) {
  const { ref, isInView } = useInView({ threshold });

  return (
    <div
      ref={ref}
      style={{
        animationDelay: `${delay}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
      }}
      className={`${className}`}
    >
      {children}
    </div>
  );
}