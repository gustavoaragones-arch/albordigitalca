import { cn } from "@/lib/utils";
import type { CSSProperties, HTMLAttributes } from "react";

type SiteIconProps = HTMLAttributes<HTMLSpanElement> & {
  name: string;
  size?: number;
};

export function SiteIcon({
  name,
  className,
  size = 20,
  style,
  ...props
}: SiteIconProps) {
  const maskStyle: CSSProperties = {
    width: size,
    height: size,
    maskImage: `url(/icons/${name}.svg)`,
    WebkitMaskImage: `url(/icons/${name}.svg)`,
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskPosition: "center",
    WebkitMaskPosition: "center",
    maskSize: "contain",
    WebkitMaskSize: "contain",
    ...style,
  };

  return (
    <span
      aria-hidden="true"
      className={cn("inline-block shrink-0 bg-current", className)}
      style={maskStyle}
      {...props}
    />
  );
}
