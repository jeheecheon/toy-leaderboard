import { cva } from "class-variance-authority";

export interface RadioButtonAtomProps {
  title: string;
  isSelected: boolean;
  index: number;
  onClick: (index: number) => void;
}

const radioButtonVariants = cva(
  [
    "flex items-center justify-center cursor-pointer rounded-full",
    "ring-2 transition-colors duration-200 hover:bg-highlight hover:text-gray-700",
    "lg:w-10 lg:h-10 w-8 h-8 text-sm",
  ],
  {
    variants: {
      isSelected: {
        true: "bg-highlight text-gray-700 ring-gray-700",
        false: "bg-stone-500 ring-gray-600 text-gray-800",
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
