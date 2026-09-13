import React from "react";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { CTACard } from "@/components/faq/cta-card";
import {
  AccordionContent,
  AccordionTrigger,
  Accordion,
  AccordionItem,
} from "@/components/ui/accordion";
import Link from "next/link";

const data = [
  {
    question: "Do you take on clients outside Alberta?",
    answer:
      "Yes. We work remotely with small businesses across Canada. Most of our process is handled online.",
  },
  {
    question: "What is included in a website project?",
    answer:
      "Design, development, mobile responsiveness, basic on-page SEO setup, and launch. Scope is defined and fixed before we start. No surprises.",
  },
  {
    question: "Do you offer ongoing maintenance or retainers?",
    answer:
      "No. We deliver a finished product. Ongoing hosting, updates, and maintenance are your responsibility after handoff, though we are happy to answer questions.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most website projects are delivered in 3 to 6 weeks depending on scope and how quickly client materials are provided.",
  },
];

export const FAQ = () => {
  return (
    <section className="w-full">
      <Container className="grid grid-cols-1 gap-15 py-20 md:py-30 lg:grid-cols-2">
        <div className="flex flex-col gap-15 pt-8">
          <div className="flex flex-col gap-4">
            <Header>Frequently Asked Questions</Header>
            <div className="-tracking-xs text-base leading-6 font-medium">
              Have more questions? Reach out at{" "}
              <Link
                href="mailto:hello@albordigital.ca"
                className="text-dusty-green underline underline-offset-3"
              >
                hello@albordigital.ca
              </Link>
            </div>
          </div>
          <CTACard />
        </div>
        <div className="h-full w-full">
          <Accordion defaultValue={["item-1"]}>
            {data.map((item, index) => (
              <React.Fragment key={`${item.question}-${index}`}>
                <AccordionItem
                  value={`${item.question}-${index}`}
                  className="py-8"
                >
                  <AccordionTrigger className="-tracking-xs text-base leading-6 font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
                {data.length - 1 !== index && (
                  <div className="bg-natural-black/15 h-px w-full" />
                )}
              </React.Fragment>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};
