import zeroXAnd from "@/assets/images/zeroXAnd.png";
import { cva, VariantProps } from "class-variance-authority";

const logoVariants = cva("", {
  variants: {
    size: {
      medium: "w-16 h-fit",
    },
  },
  defaultVariants: {
    size: "medium",
  }
});

function LogoAtom(props: VariantProps<typeof logoVariants>) {
  const { size } = props;
  const classes = logoVariants({ size });

  return <img loading="eager" src={zeroXAnd} className={classes} alt="ZeroXAnd Logo" />;
}

export default LogoAtom;
