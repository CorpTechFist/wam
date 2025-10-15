import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-xl border px-3 py-1.5 text-xs font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-ring transition-all duration-300 overflow-hidden backdrop-blur-sm hover:scale-105 shadow-md hover:shadow-lg",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-gradient-to-r from-purple-600/95 to-purple-500/90 text-white backdrop-blur-sm",
        secondary:
          "border-transparent bg-gradient-to-r from-primary to-yellow-400 text-black",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 shadow-lg hover:shadow-xl",
        outline:
          "border-primary/30 bg-background/80 text-foreground [a&]:hover:bg-primary/10 [a&]:hover:border-primary/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
