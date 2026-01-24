import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

// Provides consistent top padding to clear the fixed header across breakpoints
export function PageWrapper({ children, className = "" }: PageWrapperProps) {
  const basePadding = "pt-24 md:pt-28 lg:pt-32 bg-white";
  const composedClassName = className
    ? `${basePadding} ${className}`
    : basePadding;

  return <div className={composedClassName}>{children}</div>;
}
