import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ItemList from "./ItemList";

function CategoryAccordion({ data }) {
  // console.log(data);
  return (
    <Accordion type="single" collapsible className="flex justify-center my-8">
      <AccordionItem value={`item-${data}`}>
        <AccordionTrigger className="w-[700px]">
          {data.title} ({data.itemCards.length})
        </AccordionTrigger>
        <AccordionContent>
          {<ItemList items={data.itemCards} />}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default CategoryAccordion;
