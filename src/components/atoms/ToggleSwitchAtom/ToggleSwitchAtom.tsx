import { cva, VariantProps } from "class-variance-authority";

const toggleControlVariants = cva(
  "h-6 w-6 bg-stone-400 rounded-full shadow-md transition-transform duration-300 ease-in-out",
  {
    variants: {
      isOn: {
        true: "transform translate-x-full",
        false: "transform",
      },
    },
  }
);

interface ToggleSwitchAtomProps
  extends VariantProps<typeof toggleControlVariants> {
  isOn: boolean;
  onClick: () => void;
}

function ToggleSwitchAtom(props: ToggleSwitchAtomProps) {
  const { isOn, onClick } = props;

  const classes = toggleControlVariants({ isOn });

  return (
    <button
      className="w-[3.7rem] h-8 rounded-full border-2 border-stone-800 flex items-center p-1"
      onClick={onClick}
    >
      <div className={classes} />
    </button>
  );
}

export default ToggleSwitchAtom;
