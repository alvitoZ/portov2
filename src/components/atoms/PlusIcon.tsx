import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

const plusIconVariants = cva("h-fit w-fit rounded-[50%] ", {
  variants: {
    variant: {
      black: "font-bold text-2xl leading-4 bg-white text-black",
      white: "font-bold text-2xl leading-4 text-white bg-black",
    },
  },
  defaultVariants: {
    variant: "black",
  },
});

export interface PlusIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof plusIconVariants> {}

const PlusIcon = React.forwardRef<HTMLButtonElement, PlusIconProps>(
  ({ className, children, variant, ...props }, ref) => {
    return (
      <button
        className={cn(plusIconVariants({ className, variant }))}
        ref={ref}
        {...props}
      >
        <p className="px-[1px] pb-[3px]">{children}</p>
      </button>
    );
  }
);
PlusIcon.displayName = "PlusIcon";

export { PlusIcon };
