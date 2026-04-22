import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] shadow-sm hover:shadow-md hover:-translate-y-[1px] relative overflow-hidden group",
        secondary:
          "bg-white text-[var(--text-primary)] border border-[var(--border-light)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
        ghost:
          "text-[var(--text-primary)] hover:bg-[var(--accent-light)]",
        ghostDark:
          "text-[var(--text-on-dark)] hover:bg-white/5 border border-[var(--border-dark)]",
        link:
          "underline underline-offset-4 text-[var(--text-muted)] hover:text-[var(--text-primary)] font-normal",
        linkDark:
          "underline underline-offset-4 text-[var(--text-muted-dark)] hover:text-white font-normal",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-full",
        md: "h-11 px-6 text-[0.95rem] rounded-full",
        lg: "h-14 px-8 text-base rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
