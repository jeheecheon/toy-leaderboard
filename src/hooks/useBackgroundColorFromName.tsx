import { getRGBFromString } from "@/utils/color";
import { useEffect, useRef } from "react";

function useBackgroundColorFromName(name: string) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const color = getRGBFromString(name);
      ref.current.style.backgroundColor = color;
    }
  }, [name]);

  return ref;
}

export default useBackgroundColorFromName;
