import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold tracking-tight ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-glow/20 focus-visible:ring-offset-1 focus-visible:shadow-[0_0_8px_rgba(229,218,194,0.1),0_0_15px_rgba(229,218,194,0.05)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_12px_rgba(251,146,60,0.15)] hover:shadow-[0_0_18px_rgba(251,146,60,0.25)]",
        noShadow: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-[0_0_12px_rgba(239,68,68,0.15)] hover:shadow-[0_0_18px_rgba(239,68,68,0.25)]",
        outline:
          "border border-input bg-background hover:bg-accent text-[hsl(34_100%_84%)] hover:text-[hsl(34_100%_84%)] shadow-[0_0_8px_rgba(251,146,60,0.1)] hover:shadow-[0_0_15px_rgba(251,146,60,0.2)]",
        secondary:
          "bg-secondary text-[hsl(34_100%_84%)] hover:bg-secondary/80 hover:text-[hsl(34_100%_84%)] shadow-[0_0_10px_rgba(251,146,60,0.1)] hover:shadow-[0_0_15px_rgba(251,146,60,0.15)]",
        ghost:
          "hover:bg-accent text-[hsl(34_100%_84%)] hover:text-[hsl(34_100%_84%)]",
        link: "text-primary underline-offset-4 hover:underline shadow-none",
        auburn:
          "bg-auburn-primary text-white hover:bg-auburn-dark transition-all duration-300 shadow-[0_0_15px_rgba(251,146,60,0.2)] hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]",
        "auburn-outline":
          "border border-auburn-primary/30 bg-auburn-primary/10 text-auburn-primary hover:bg-auburn-primary/20 hover:border-auburn-primary/50 transition-all duration-300 shadow-[0_0_12px_rgba(251,146,60,0.15)] hover:shadow-[0_0_18px_rgba(251,146,60,0.25)]",
      },
      size: {
        default: "h-9 px-3 py-1.5",
        sm: "h-8 px-2.5",
        lg: "h-10 px-5",
        icon: "h-9 w-9",
        custom: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
