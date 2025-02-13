import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const handleClick = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div className="accordion">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          >
            {item.content}
          </AccordionItem>
        ))}
      </div>
    );
  };
  
  export default Accordion;

