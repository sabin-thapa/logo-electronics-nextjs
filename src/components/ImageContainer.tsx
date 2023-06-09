import Image from "next/image";
import React from "react";
import styles from "@/styles/Card.module.css";
import classNames from "classnames";

interface ContainerProps {
  className?: string;
  image: string;
  longCard?: boolean;
}

const ImageContainer: React.FC<ContainerProps> = ({
  className,
  image,
  longCard,
}: ContainerProps) => {
  return (
    <div
      className={classNames(
        styles.card,
        "bg-grayish",
        {
          "my-8 ml-8 w-full ": !longCard,
        },
        {
          " h-96 w-72  ": longCard,
        }
      )}
    >
      <div className={classNames("overflow-hidden h-full flex")}>
        <Image
          src={image}
          height={400}
          width={400}
          alt="Product Image"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ImageContainer;
