import styles from "@/styles/Footer.module.css";
import classNames from "classnames";
import React from "react";

interface SubHeaderProps {
  text: string;
  fontColor?: string;
  className?: string;
}

const SubHeader: React.FC<SubHeaderProps> = ({
  text,
  fontColor,
  className,
  ...props
}) => {
  return (
    <h1
      className={classNames(
        `uppercase font-extrabold font-bespax text-2xl tracking-widest`,
        className,
        { [styles.gradient_font]: !fontColor }
      )}
      style={{ color: fontColor, fontFamily: "bespax" }}
      {...props}
    >
      {text}
    </h1>
  );
};

export default SubHeader;
