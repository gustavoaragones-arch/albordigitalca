"use client";

import { cn } from "@/lib/utils";

import { Button } from "@/components/button";
import { useEffect, useState } from "react";
import { SiteIcon } from "@/components/ui/site-icon";
import { Logo } from "@/components/logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Website Design", href: "/website-design" },
  { label: "Brand Identity", href: "/brand-identity" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = ({ className }: { className?: string | undefined }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isDarkMode = pathname === "/" || pathname === "/about";

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        isDarkMode
          ? "absolute inset-x-0 top-9 z-50 mx-auto w-full lg:top-9 lg:max-w-[calc(100%-4rem)]"
          : "mt-9",
        className,
      )}
    >
      <div className="max-w-container mx-auto px-4 lg:px-8">
        <div className="flex min-h-16 items-center justify-between py-2 md:py-0">
          {/* Logo */}
          <div className="flex shrink-0 items-center gap-2 lg:min-w-45">
            <Logo
              className={
                isDarkMode ? "drop-shadow-lg drop-shadow-black/80" : undefined
              }
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors duration-200",
                    isDarkMode
                      ? "text-natural-white/80 hover:text-natural-white"
                      : "text-natural-black/80 hover:text-natural-black",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Navigation */}

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="p-2 text-white/80 hover:text-white"
            >
              {isMenuOpen ? (
                <SiteIcon
                  name="slash-square"
                  size={24}
                  className={cn(
                    isDarkMode ? "text-natural-white" : "text-natural-black",
                  )}
                />
              ) : (
                <SiteIcon
                  name="dots-grid3x3"
                  size={24}
                  className={cn(
                    isDarkMode ? "text-natural-white" : "text-natural-black",
                  )}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
              animate={{ clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }}
              exit={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="fixed inset-0 z-50 flex flex-col bg-neutral-900 md:hidden"
            >
              <div className="flex min-h-16 items-center justify-between px-4 py-2">
                <Logo />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-natural-white/80 hover:text-natural-white"
                  aria-label="Close menu"
                >
                  <SiteIcon
                    name="slash-square"
                    size={24}
                    className="text-natural-white"
                  />
                </button>
              </div>
              <div className="flex flex-1 flex-col gap-1 px-4 pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-3 text-lg font-medium text-white/80 transition-colors duration-200 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-3 pt-4">
                  <Button />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
