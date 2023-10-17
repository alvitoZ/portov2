import * as React from "react";
import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";

const limitedBoxVariants = cva("w-44 max-w-fit", {
  variants: {
    variant: {
      default: "hover:opacity-70 ",
      blue: "hover:opacity-70 ",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface LimitedBoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof limitedBoxVariants> {}

const LimitedBox = React.forwardRef<HTMLInputElement, LimitedBoxProps>(
  ({ className, children, variant, ...props }, ref) => {
    return (
      <div
        className={cn(limitedBoxVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);
LimitedBox.displayName = "LimitedBox";

export { LimitedBox };
