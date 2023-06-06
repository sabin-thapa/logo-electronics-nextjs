import styles from "@/styles/Button.module.css";
import classNames from "classnames";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fontColor?: string;
  borderWidth?: string;
  bolderBorder?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  fontColor,
  borderWidth,
  bolderBorder,
  ...props
}) => {

  const buttonStyles = {
    color: fontColor,
    borderWidth: borderWidth
  }

  return (
    <button
      className={classNames(
        styles.btn,
        "text-white px-6 py-2 font-poppins font-bold text-lg",
        { [styles.gradient_font]: !fontColor },
        {[styles.bolder_border]: bolderBorder},
        className
      )}
      style={buttonStyles}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
