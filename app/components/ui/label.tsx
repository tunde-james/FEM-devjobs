import { cn } from "@/app/lib/cn";
import { cva } from "class-variance-authority";
import React from "react";

type LabelProps = {
  className?: string;
  children?: React.ReactNode;
};

function Label({ className, children, ...props }: LabelProps) {
  return (
    <label className={cn(labelVariants(), className)} {...props}>
      {children}
    </label>
  );
}

const labelVariants = cva("text-base");

export default Label;
