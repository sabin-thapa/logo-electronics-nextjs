import React, { useState } from "react";
import classNames from "classnames";
import Button from "./Button";
import Image from "next/image";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const products = ["Mouse", "Keyboard", "Monitor"];

  return (
    <div>
      <Button
        onClick={toggleAccordion}
        className={classNames(
          "flex justify-around px-14  w-full mx-6 py-6 bg-white font-bespax"
        )}
        isExpanded={isOpen}
        accordion
      >
        All Products
        <span className="pt-2 pl-4">
          <Image
            src="/assets/arrow_down.svg"
            alt="arrow down"
            height={24}
            width={24}
          />
        </span>
      </Button>
    </div>
  );
};

export default Accordion;
