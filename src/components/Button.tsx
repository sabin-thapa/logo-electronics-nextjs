import styles from "@/styles/Button.module.css";
import classNames from "classnames";
import React, { ReactNode, useEffect, useRef, useState } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fontColor?: string;
  borderWidth?: string;
  bolderBorder?: boolean;
  bespax?: boolean;
  isExpanded?: boolean;
  accordion?: boolean;
  children?: ReactNode;
  data?: string[];
  contentHeight?: number;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  fontColor,
  borderWidth,
  bolderBorder,
  isExpanded,
  bespax,
  accordion,
  contentHeight,
  data,
  ...props
}) => {
  // const [contentHeight, setContentHeight] = useState<number | undefined>(0);

  const buttonStyles = {
    color: fontColor,
    borderWidth: borderWidth,
    height: isExpanded ? `${contentHeight}px` : undefined,
  };

  return (
    <button
      onClick={props.onClick}
      className={classNames(
        styles.btn,
        className,
        `text-white px-8 py-1 font-bold text-2xl rounded-full`,
        { [styles.gradient_font]: !fontColor },
        { [styles.bolder_border]: bolderBorder },
        { "font-bespax": bespax },
        { "font-poppins": !bespax }
      )}
      style={buttonStyles}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
