import React, { forwardRef } from "react";
import { cn } from "@/app/lib/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, type, ...props }: InputProps,
  ref,
) {
  return (
    <input type={type} className={cn("", className)} ref={ref} {...props} />
  );
});

export default Input;
