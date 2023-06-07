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
        ` uppercase font-bold font-routhem text-2xl tracking-widest`,
        { [styles.gradient_font]: !fontColor },
        className
      )}
      style={{ color: fontColor }}
      {...props}
    >
      {text}
    </h1>
  );
};

export default SubHeader;
