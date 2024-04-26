import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionContent = [
  {
    id: 1,
    title: "When does minting begin?",
    des: "Minting is on friday evening",
  },
  {
    id: 2,
    title: "Who can mint one?",
    des: "Anyone who holds $blob",
  },
  {
    id: 3,
    title: "Why should I hold one?",
    des: "What you mean? Just blob",
  },
  {
    id: 4,
    title: "What does it cost?",
    des: "10,000 $BLOB",
  },
];

export default function Royalties() {
  return (
    <div className="p-4 md:p-40 flex flex-col md:flex-row items-center gap-8 md:gap-16">
      <div className="md:w-4/5 p-12">
        {accordionContent.map((item) => (
          <Accordion key={item.id} type="single" collapsible>
            <AccordionItem value={`item-${item.id}`}>
              <AccordionTrigger className="text-3xl">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>{item.des}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>

      <div className="w-1/2 md:w-1/4">
        <p className="text-5xl md:text-7xl text-center leading-10">
          Fuck it, we just blob!
        </p>
      </div>
    </div>
  );
}
