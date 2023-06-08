import Image from "next/image";
import React from "react";
import styles from "@/styles/Card.module.css";
import classNames from "classnames";

interface ContainerProps {
  className?: string;
}

const ImageContainer: React.FC<ContainerProps> = ({ className }) => {
  return (
    <div className={classNames(styles.card, "my-8 ml-8 pl-6 pb-14 bg-grayish")}>
      <div className={classNames("pt-16", className)}>
        <Image
          src="/assets/desktop.png"
          height={400}
          width={300}
          alt="Product Image"
        />
      </div>
    </div>
  );
};

export default ImageContainer;
