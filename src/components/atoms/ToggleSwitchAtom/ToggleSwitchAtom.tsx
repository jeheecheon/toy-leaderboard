import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ToggleSwitchAtomProps extends HTMLAttributes<HTMLButtonElement> {
  isOn: boolean;
}

function ToggleSwitchAtom(props: ToggleSwitchAtomProps) {
  const { isOn, onClick } = props;

  return (
    <button
      className="w-[3.7rem] h-8 rounded-full border-2 border-stone-800 flex items-center p-1"
      onClick={onClick}
    >
      <div
        className={twMerge(
          "h-6 w-6 bg-stone-400 rounded-full shadow-md transition-transform duration-300 ease-in-out",
          isOn ? "transform translate-x-full" : "transform"
        )}
      />
    </button>
  );
}

export default ToggleSwitchAtom;
