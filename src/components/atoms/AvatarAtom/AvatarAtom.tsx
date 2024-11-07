import useBackgroundColorFromName from "@/hooks/useBackgroundColorFromName";
import useInitials from "@/hooks/useInitials";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const avatarVariants = cva(
  ["rounded-full", "flex", "justify-center", "items-center"],
  {
    variants: {
      size: {
        small: "w-10 h-10 text-lg",
        medium: "w-12 h-12 text-xl",
        large: "w-16 h-16 text-2xl",
      },
    },
    defaultVariants: {
      size: "small",
    },
  }
);

interface AvatarProps extends VariantProps<typeof avatarVariants> {
  name: string;
}

function AvatarAtom(props: AvatarProps) {
  const { size, name } = props;
  const classes = avatarVariants({ size });

  const initials = useInitials(name);
  const ref = useBackgroundColorFromName(name);

  return (
    <div ref={ref} className={twMerge(classes)}>
      {initials}
    </div>
  );
}

export default AvatarAtom;
