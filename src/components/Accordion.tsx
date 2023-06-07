import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import ViewButton from "./ViewButton";
import classNames from "classnames";
import Button from "./Button";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const products = ["Mouse", "Keyboard", "Monitor"];

  return (
    <div className="relative">
      <Button
        onClick={toggleAccordion}
        className={classNames(
          "flex justify-around px-14 mx-1 items-start w-full py-4  text-white font-bespax uppercase",
          { "bg-gray-200": isOpen }
        )}
        fontColor="#000"
        isExpanded={isOpen}
        accordion
      >
        Products
      </Button>
    </div>
  );
};

export default Accordion;
