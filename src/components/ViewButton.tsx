import styles from "@/styles/Button.module.css";
import classNames from "classnames";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fontColor?: string;
}

const ViewButton: React.FC<ButtonProps> = ({
  children,
  fontColor,
  className,
  ...props
}) => {
  const buttonStyles = {
    color: fontColor,
  };

  return (
    <button
      className={classNames(
        styles.view_btn,
        "text-white px-6 py-2 font-bespax font-bold text-lg rounded-full",
        { [styles.gradient_font]: !fontColor },
        className
      )}
      style={buttonStyles}
      {...props}
    >
      {children}
    </button>
  );
};

export default ViewButton;
