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
    background:
      "linear-gradient(90deg, #920aa8 2%, #e019cc 20%, #ff81e3 48%, #fc75d6 52%, #df55f6 60%, #e822ec 71%, #e80f91 75%, #ee19d8 81.25%, #f323b7 87.5%, #fe3873 100%)",
  };

  return (
    <button
      className={classNames(
        styles.view_btn,
        "text-white px-6 py-2 rounded-full",
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
