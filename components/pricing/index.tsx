"use client";

import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { GoogleLogo } from "@/components/icons/logo";
import { PricingCard, PricingCardType } from "@/components/pricing/pricing-card";
import Link from "next/link";

const data: PricingCardType[] = [
  {
    category: "Website",
    badge: {
      text: "Fixed price",
      variant: "success",
    },
    title: "Website",
    subtitle: "Complete website for your small business",
    price: 2500,
    billing: " starting",
    cta: "Start Your Project",
    testimonial: {
      name: "Small Business Owner",
      role: "Alberta",
      message: "Clear pricing and a straightforward process from start to finish.",
      avatar: "/avatar/avatar-1.webp",
      brand: <GoogleLogo />,
    },
    features: [
      "Design and development",
      "Mobile responsive",
      "Basic on-page SEO setup",
      "Launch and handoff",
      "Timeline: 3 to 4 weeks",
    ],
    theme: "light",
  },
  {
    category: "Website + Brand Identity",
    badge: {
      text: "Fixed price",
      variant: "success",
    },
    title: "Website + Brand Identity",
    subtitle: "Website plus logo, colours, and typography",
    price: 3800,
    billing: " starting",
    cta: "Start Your Project",
    testimonial: {
      name: "Small Business Owner",
      role: "Canmore AB",
      message: "Everything we needed to look professional online and in print.",
      avatar: "/avatar/avatar-2.webp",
      brand: <GoogleLogo />,
    },
    features: [
      "Everything in Website",
      "Logo design",
      "Colour palette",
      "Typography system",
      "Timeline: 4 to 6 weeks",
    ],
    theme: "dark",
  },
];

export const Pricing = ({ disabelHeader = false }: { disabelHeader?: boolean }) => {
  return (
    <section className="w-full">
      <Container className="flex flex-col gap-20 py-20 md:py-30">
        {!disabelHeader && (
          <div className="flex w-full flex-col justify-between gap-4 lg:flex-row">
            <div className="flex flex-col gap-4">
              <Header>Simple, Fixed Pricing</Header>
              <p className="-tracking-xs text-base leading-6 font-medium text-muted-foreground">
                No retainers. No surprises. You know what you are paying before
                we start.
              </p>
            </div>
            <div className="-tracking-xs text-base leading-6 font-medium">
              Questions? Reach out at{" "}
              <Link
                href="mailto:hello@albordigital.ca"
                className="text-dusty-green underline underline-offset-3"
              >
                hello@albordigital.ca
              </Link>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {data.map((card, index) => (
              <PricingCard key={index} card={card} />
            ))}
          </div>
          <p className="-tracking-xs text-center text-sm leading-6 font-medium text-muted-foreground">
            All prices in Canadian dollars. Final pricing depends on project
            scope and is confirmed before work begins.
          </p>
        </div>
      </Container>
    </section>
  );
};
