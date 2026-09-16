"use client";

import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { FeedbacksCard } from "@/components/feedbacks/feedbacks-card";
import { GoogleLogo, Raycast } from "@/components/icons/logo";

// PLACEHOLDER: Replace with real client feedback when available.
const data = [
  {
    quote:
      "“We needed a website that looked professional without a long agency process. The work was delivered on time and on budget.”",
    name: "Canmore Outfitter",
    role: "Outdoor Recreation, Canmore AB",
    logo: "/logos/cal.webp",
  },
  // PLACEHOLDER: Replace with real client feedback when available.
  {
    quote:
      "“Straightforward to work with. We knew the scope and the cost upfront, and the site does what we need it to do.”",
    name: "Calgary Trades Company",
    role: "Home Services, Calgary AB",
    logo: <GoogleLogo className="h-10 w-auto" />,
  },
  // PLACEHOLDER: Replace with real client feedback when available.
  {
    quote:
      "“Our new site works well on phones and gives guests the information they need before they arrive.”",
    name: "Banff Hospitality Business",
    role: "Hospitality, Banff AB",
    logo: <Raycast className="h-10 w-auto" />,
  },
];

export const Feedbacks = () => {
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
    <section className="w-full overflow-hidden">
      <Container className="flex flex-col gap-15 py-20 md:py-30">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <Header>Client Feedback</Header>
          <div>
            <Button text="Start Your Project" />
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="w-full overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out will-change-transform"
              style={{
                transform: `translate3d(-${activeIndex * slideDistance}px, 0, 0)`,
              }}
            >
              {data.map((item, index) => (
                <FeedbacksCard
                  key={index}
                  ref={index === 0 ? firstCardRef : undefined}
                  item={item}
                />
              ))}
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="bg-natural-white shadow-card-lg mx-auto flex h-fit w-fit items-center justify-center gap-3 rounded-full px-4 py-3">
              {data.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show feedback ${index + 1}`}
                  aria-current={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer size-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-heading"
                      : "bg-natural-black/15 hover:bg-natural-black/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

