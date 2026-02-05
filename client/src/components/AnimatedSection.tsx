import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
}

export default function AnimatedSection({ 
  children, 
  className = "",
  delay = 0 
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  const delayClass = delay > 0 ? `scroll-animate-delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={`scroll-animate ${isVisible ? 'visible' : ''} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
