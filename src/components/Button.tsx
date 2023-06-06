import styles from "@/styles/Button.module.css";
import classNames from "classnames";
import React from "react";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {


  return (
    <button className={classNames("text-white px-6 py-2 font-poppins font-bold text-lg", className, styles.btn)} {...props}>
      {children}
    </button>
  );
};

export default Button;
