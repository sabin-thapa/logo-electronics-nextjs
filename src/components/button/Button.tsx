import styles from "@/styles/Button.module.css";
import homeStyles from "@/styles/Home.module.css";
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
  active?: string;
  animated?: boolean;
  hovered?: boolean;
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
  active,
  animated,
  data,
  hovered,
  ...props
}) => {
  // const [contentHeight, setContentHeight] = useState<number | undefined>(0);

  const buttonStyles = {
    color: fontColor,
    borderWidth: borderWidth,
    height: isExpanded ? `${contentHeight}px` : undefined,
  };

  const gradientTransition = animated ? "transition-all duration-500" : "";

  const gradientStyles = hovered
    ? {
        background:
          "linear-gradient( 90deg, #920aa8 2%,  #e019cc 20%,#ff81e3 48%,#fc75d6 52%,#df55f6 60%,#e822ec 71%,#e80f91 75%,#ee19d8 81.25%,#f323b7 87.5%,#fe3873 100%)",
        // backgroundSize: "100% auto",
        backgroundPosition: hovered ? "left center" : "right center",
        animation: hovered ? "fillBackground 5s infinite linear" : "none",
      }
    : {};

  return (
    <button
      onClick={props.onClick}
      className={classNames(
        { [styles.btn]: active },
        { [styles.btn_white]: active === "" },
        className,
        `text-white px-8 py-1 font-bold rounded-full`,
        { [styles.gradient_font]: !fontColor && active },
        { "text-white": active === "" },
        { [styles.bolder_border]: bolderBorder },
        { "font-bespax": bespax },
        { "font-poppins": !bespax },
        { "text-2xl": hovered },
        { "text-lg": !hovered && animated },
        { "text-2xl": !animated },
        { [gradientTransition]: animated }
      )}
      style={{ ...buttonStyles, ...gradientStyles }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
