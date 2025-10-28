import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-ring relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-purple-600/95 to-purple-500/90 text-white border border-primary/30 backdrop-blur-sm hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-purple-500/40 hover:-translate-y-0.5 relative overflow-hidden before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-primary/30 before:to-transparent before:transition-all before:duration-500 hover:before:left-full",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 hover:scale-105 shadow-lg hover:shadow-xl focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border-2 border-primary/30 bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary/10 hover:border-primary/50 hover:scale-105 shadow-md hover:shadow-lg",
        secondary:
          "bg-gradient-to-r from-primary to-yellow-400 text-black border border-primary/50 shadow-lg shadow-primary/40 hover:scale-105 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300",
        ghost:
          "hover:bg-accent/10 hover:text-accent-foreground hover:scale-105 backdrop-blur-sm",
        link: "text-primary professional-link hover:scale-105",
      },
      size: {
        default: "h-10 px-6 py-3 has-[>svg]:px-4",
        sm: "h-9 rounded-xl gap-1.5 px-4 has-[>svg]:px-3",
        lg: "h-12 rounded-xl px-8 py-4 has-[>svg]:px-6",
        icon: "size-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
