"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  q: string;
  a: string;
}

export function FAQAccordion({
  items,
  idPrefix = "faq",
  html = false,
}: {
  items: FAQItem[];
  idPrefix?: string;
  html?: boolean;
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={`${idPrefix}-${i}`} value={`${idPrefix}-${i}`}>
          <AccordionTrigger>{item.q}</AccordionTrigger>
          <AccordionContent>
            {html ? (
              <span dangerouslySetInnerHTML={{ __html: item.a }} />
            ) : (
              item.a
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
