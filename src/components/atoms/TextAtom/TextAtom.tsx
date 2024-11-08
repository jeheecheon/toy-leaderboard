import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const textVariants = cva("whitespace-break-spaces inline", {
  variants: {
    size: {
      "3xsmall": "text-3xs",
      xsmall: "text-xs lg:text-sm",
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
      xlarge: "text-xl",
      "4xlarge": "text-[2.1875rem]",
      "5xlarge": "text-[2.5em]",
      "6xlarge": "text-[6em]",
    },
    color: {
      primary: "text-white",
      secondary: "text-gray-400",
      highlight: "text-highlight",
      gray: "text-dark-gray",
    },
    weight: {
      normal: "font-normal",
      semibold: "font-semibold",
      bold: "font-bold",
      light: "font-light",
    },
    font: {
      inter: "font-inter",
      quantico: "font-quantico",
    },
  },
  defaultVariants: {
    size: "medium",
    color: "primary",
    weight: "normal",
    font: "quantico",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  children?: ReactNode;
  className?: string;
}

function TextAtom(props: TextProps) {
  const { size, color, weight, children, className, font } = props;

  const classes = textVariants({ size, color, weight, font });

  return <p className={twMerge(classes, className)}>{children}</p>;
}

export default TextAtom;
