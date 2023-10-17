import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

const textVariants = cva("", {
  variants: {
    variant: {
      default: "hover:opacity-70 text-[#343233]",
      white: "hover:opacity-70 text-[#FFFFFF]",
    },
    size: {
      default: "text-4xl font-semibold font-oswald ",
      sm: "text-3xl font-semibold font-oswald",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, children, variant, size, ...props }, ref) => {
    return (
      <p
        className={cn(textVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </p>
    );
  }
);
Text.displayName = "Text";

export { Text, textVariants };
