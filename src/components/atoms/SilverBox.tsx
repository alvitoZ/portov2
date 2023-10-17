import * as React from "react";
import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";

const silverBoxVariants = cva("", {
  variants: {
    variant: {
      default: "hover:opacity-70 bg-[url('/uploads/Combat_rectangle.png')]",
      blue: "hover:opacity-70 bg-[#07A8DE]",
    },
    size: {
      default: "w-[45vw]",
      md: "w-[20vw]",
      sm: "w-[10vw]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface SilverBoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof silverBoxVariants> {}

const SilverBox = React.forwardRef<HTMLInputElement, SilverBoxProps>(
  ({ className, children, variant, size, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        <div
          //  className={` w-[50vw]`}
          className={cn(silverBoxVariants({ variant, size }))}
        >
          <div
            //    className="bg-[url('/uploads/Combat_icon.png')] bg-no-repeat bg-center"
            className={cn("bg-no-repeat", className)}
          >
            <div className={`flex p-4 gap-4 flex-row items-end relative`}>
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
SilverBox.displayName = "SilverBox";

export { SilverBox };
