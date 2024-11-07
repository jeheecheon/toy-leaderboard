import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const textVariants = cva("whitespace-break-spaces", {
  variants: {
    size: {
      xsmall: "text-xs lg:text-sm",
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
      xlarge: "text-xl",
    },
    color: {
      primary: "text-white",
      secondary: "text-gray-400",
      highlight: "text-highlight",
      gray: "text-dark-gray",
    },
    weight: {
      normal: "font-normal",
      bold: "font-bold",
      light: "font-light",
    },
    alignment: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
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
    alignment: "left",
    font: "quantico",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  children?: string;
  className?: string;
}

function TextAtom(props: TextProps) {
  const { size, color, weight, alignment, children, className } = props;

  const classes = textVariants({ size, color, weight, alignment });

  return <p className={twMerge(classes, className)}>{children}</p>;
}

export default TextAtom;
