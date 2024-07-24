import { cn } from "@/app/lib/cn";
import { cva } from "class-variance-authority";
import React from "react";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "dark";
};

function button({ className, variant, ...props }: ButtonProps) {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)} />
  );
}

const buttonVariants = cva("py-[15px] px-10 rounded-md", {
  variants: {
    variant: {
      primary: "bg-base-violet text-white hover:bg-base-violet2",
      secondary:
        "bg-base-violet-light text-base-violet hover:bg-base-violet2-light",
      dark: "bg-base-dark text-white hover:bg-dark-gray",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default button;
