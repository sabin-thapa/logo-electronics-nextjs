import styles from "@/styles/Button.module.css";
import classNames from "classnames";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fontColor?: string;
  borderWidth?: string;
  bolderBorder?: boolean;
  bespax?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  fontColor,
  borderWidth,
  bolderBorder,
  bespax,
  ...props
}) => {
  const buttonStyles = {
    color: fontColor,
    borderWidth: borderWidth,
  };

  return (
    <button
      className={classNames(
        styles.btn,
        `text-white px-6 py-1  font-bold text-2xl rounded-full`,
        { [styles.gradient_font]: !fontColor },
        { [styles.bolder_border]: bolderBorder },
        { "font-bespax": bespax },
        { "font-poppins": !bespax },
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
