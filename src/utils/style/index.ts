import { cx, type CxOptions } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

function cn(...classNames: CxOptions) {
  return twMerge(cx(classNames));
}

export { cn };
