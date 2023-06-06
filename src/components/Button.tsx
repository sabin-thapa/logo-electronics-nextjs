import styles from "@/styles/Button.module.css";
import classNames from "classnames";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fontColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  fontColor,
  ...props
}) => {
  return (
    <button
      className={classNames(
        styles.btn,
        "text-white px-6 py-2 font-poppins font-bold text-lg",
        { [styles.gradient_font]: !fontColor },
        className
      )}
      style={{ color: fontColor }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
