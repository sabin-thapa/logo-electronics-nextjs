import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Button from "./Button";
import Image from "next/image";
import styles from "@/styles/Button.module.css";

interface AccordionProps {
  onCategorySelect: (category: string | null) => void;
  categories: string[];
}

const Accordion: React.FC<AccordionProps> = ({
  onCategorySelect,
  categories,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | undefined>(0);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category: string) => {
    onCategorySelect(category);
    toggleAccordion();
  };

  useEffect(() => {
    if (isOpen) {
      const height = contentRef.current?.scrollHeight;
      setContentHeight(height);
    } else {
      setContentHeight(undefined);
    }
  }, [isOpen]);

  return (
    <div>
      <Button
        data={categories}
        onClick={toggleAccordion}
        className={classNames(
          "flex justify-around px-12  w-full mx-6 py-6 bg-white font-bespax"
        )}
        isExpanded={isOpen}
        accordion
        contentHeight={contentHeight}
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
        {isOpen && categories && (
          <div ref={contentRef} className="absolute flex">
            <ul
              className={classNames(
                "pb-12 pt-12   flex flex-col gap-2 ",
                styles.gradient_font
              )}
            >
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="px-2 py-1 "
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Button>
    </div>
  );
};

export default Accordion;
