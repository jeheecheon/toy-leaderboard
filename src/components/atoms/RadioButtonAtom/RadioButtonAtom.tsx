import { cva } from "class-variance-authority";

export interface RadioButtonAtomProps {
  title: string;
  isSelected: boolean;
  index: number;
  onClick: (index: number) => void;
}

const radioButtonVariants = cva(
  [
    "w-10 h-10 flex items-center justify-center cursor-pointer rounded-full",
    "ring-2",
  ],
  {
    variants: {
      isSelected: {
        true: "bg-highlight text-gray-700 ring-gray-700",
        false: "bg-stone-500 ring-gray-600",
      },
    },
  }
);

function RadioButtonAtom(props: RadioButtonAtomProps) {
  const { title, isSelected, onClick, index } = props;

  return (
    <div
      className={radioButtonVariants({ isSelected })}
      onClick={() => onClick(index)}
    >
      {title}
    </div>
  );
}

export default RadioButtonAtom;
