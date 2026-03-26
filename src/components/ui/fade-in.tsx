import { type ReactNode } from "react";
import { useInView } from "../../hooks/use-in-view";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export function FadeIn({ children, delay = 10, className = "", threshold = 0.05, rootMargin = "50px" }: FadeInProps) {
  const { ref, isInView } = useInView({ threshold, rootMargin });

  return (
    <div
      ref={ref}
      style={{
        animationDelay: `${delay}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(15px)",
        transition: `opacity 0.4s ease-out ${delay}ms, transform 0.4s ease-out ${delay}ms`,
      }}
      className={`${className}`}
    >
      {children}
    </div>
  );
}