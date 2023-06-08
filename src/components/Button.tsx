import styles from "@/styles/Button.module.css";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fontColor?: string;
  borderWidth?: string;
  bolderBorder?: boolean;
  bespax?: boolean;
  isExpanded?: boolean;
  accordion?: boolean;
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
  ...props
}) => {
  const [contentHeight, setContentHeight] = useState<number | undefined>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isExpanded) {
      const height = contentRef.current?.scrollHeight;
      setContentHeight(height);
    } else {
      setContentHeight(undefined);
    }
  }, [isExpanded]);

  const buttonStyles = {
    color: fontColor,
    borderWidth: borderWidth,
    height: isExpanded ? `${contentHeight}px` : undefined,
  };

  return (
    <button
      className={classNames(
        styles.btn,
        className,
        `text-white px-6 py-1  font-bold text-2xl rounded-full`,
        { [styles.gradient_font]: !fontColor },
        { [styles.bolder_border]: bolderBorder },
        { "font-bespax": bespax },
        { "font-poppins": !bespax }
      )}
      style={buttonStyles}
      {...props}
    >
      {children}
      {isExpanded && (
        <div ref={contentRef} className="absolute flex">
          <ul
            className={classNames(
              "pb-12 pt-12   flex flex-col gap-2 ",
              styles.gradient_font
            )}
          >
            <li className="px-2 py-1 ">Mouse</li>
            <li className="px-2 py-1">Keyboard</li>
            <li className="px-2 py-1">Monitor</li>
          </ul>
        </div>
      )}
    </button>
  );
};

export default Button;
