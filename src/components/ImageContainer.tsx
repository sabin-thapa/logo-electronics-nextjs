import Image from "next/image";
import React from "react";
import styles from "@/styles/Card.module.css";
import classNames from "classnames";

const ImageContainer = () => {
  return (
    <div className={classNames(styles.card, "my-8 ml-8")}>
      <div className="pt-16">
        <Image
          src="/assets/desktop.png"
          height={600}
          width={500}
          alt="Product Image"
        />
      </div>
    </div>
  );
};

export default ImageContainer;
