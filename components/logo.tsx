import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({
  className,
  variant = "logo",
}: {
  className?: string;
  variant?: "logo" | "logotype";
}) => {
  const isLogotype = variant === "logotype";

  return (
    <Link href="/" className="inline-flex shrink-0 items-center">
      <Image
        src={isLogotype ? "/ALBORDIGITAL_LOGOTYPE.png" : "/ALBORDIGITAL_LOGO.png"}
        width={isLogotype ? 2183 : 2183}
        height={isLogotype ? 447 : 1259}
        alt="Albor Digital — Canadian web studio logo"
        className={cn(
          isLogotype ? "h-6 md:h-[33px]" : "h-12 md:h-[66px]",
          "w-auto max-w-full object-contain",
          className,
        )}
      />
    </Link>
  );
};
