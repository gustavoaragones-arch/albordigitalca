"use client";

import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Button } from "@/components/button";
import { TestimonialsCard } from "@/components/testimonials/card";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface Testimonial {
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  quote: string;
  brand: string;
}

// PLACEHOLDER: Replace with real client testimonials when available.
const data: Testimonial[] = [
  {
    author: {
      name: "Canmore Outfitter",
      title: "Outdoor Recreation, Canmore AB",
      avatar: "/avatar/avatar-1.webp",
    },
    quote:
      "The website was delivered on time and looks professional. Our customers can find what they need without calling us first.",
    brand: "/logos/1.webp",
  },
  // PLACEHOLDER: Replace with real client testimonials when available.
  {
    author: {
      name: "Calgary Trades Company",
      title: "Home Services, Calgary AB",
      avatar: "/avatar/avatar-2.webp",
    },
    quote:
      "Clear process from start to finish. We knew what we were getting and what it would cost before work began.",
    brand: "/logos/7.webp",
  },
  // PLACEHOLDER: Replace with real client testimonials when available.
  {
    author: {
      name: "Banff Hospitality Business",
      title: "Hospitality, Banff AB",
      avatar: "/avatar/avatar-3.webp",
    },
    quote:
      "A straightforward experience. The site works well on mobile and reflects our business properly.",
    brand: "/logos/9.webp",
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDistance, setSlideDistance] = useState(0);
  const firstCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateSlideDistance = () => {
      if (!firstCardRef.current) {
        return;
      }

      const cardWidth = firstCardRef.current.getBoundingClientRect().width;
      setSlideDistance(cardWidth + 24);
    };

    updateSlideDistance();

    const resizeObserver = new ResizeObserver(updateSlideDistance);

    if (firstCardRef.current) {
      resizeObserver.observe(firstCardRef.current);
    }

    window.addEventListener("resize", updateSlideDistance);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateSlideDistance);
    };
  }, []);

  return (
    <section className="w-full">
      <Container className="relative flex flex-col gap-15 py-20 md:py-30 lg:gap-20">
        <div className="flex flex-col items-center justify-between gap-8 md:items-start lg:flex-row lg:items-center">
          <Header className="text-center md:text-left">
            What Clients Say
          </Header>
          <Button text="Start Your Project" />
        </div>
        <div className="flex flex-col gap-10">
          <div className="_overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out will-change-transform"
              style={{
                transform: `translate3d(-${activeIndex * slideDistance}px, 0, 0)`,
              }}
            >
              {data.map((testimonial, index) => (
                <TestimonialsCard
                  key={index}
                  ref={index === 0 ? firstCardRef : undefined}
                  {...testimonial}
                />
              ))}
            </div>
          </div>
          {/* dots */}
          <div className="flex w-full items-center justify-center">
            <div className="bg-natural-white shadow-card-lg mx-auto flex h-fit w-fit items-center justify-center gap-3 rounded-full px-4 py-3">
              {data.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-current={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "size-2 cursor-pointer rounded-full transition-all duration-300",
                    activeIndex === index
                      ? "bg-heading"
                      : "bg-natural-black/15 hover:bg-natural-black/30",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

