import styles from "@/styles/Footer.module.css";
import classNames from "classnames";
import React from "react";

interface SubHeaderProps {
  text: string;
  fontColor?: string;
  className?: string;
  extraLarge?: boolean;
  extraBold?: boolean;
  routhem?: boolean;
}

const SubHeader: React.FC<SubHeaderProps> = ({
  text,
  fontColor,
  className,
  extraLarge,
  extraBold,
  routhem,
  ...props
}) => {
  return (
    <h1
      className={classNames(
        `uppercase text-2xl tracking-widest`,
        className,
        { [styles.gradient_font]: !fontColor },
        { "text-4xl": extraLarge },
        { "font-extrabold": extraBold },
        { "font-medium": !extraBold },
        { "font-routhem": routhem },
        { "font-bespax": !routhem }
      )}
      style={{ color: fontColor }}
      {...props}
    >
      {text}
    </h1>
  );
};

export default SubHeader;
