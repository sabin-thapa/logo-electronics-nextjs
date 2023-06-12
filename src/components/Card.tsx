import classNames from "classnames";
import Image from "next/image";
import styles from "@/styles/Card.module.css";
import StarIcon from "./StarIcon";
import { ProductProps } from "./ProductCard";
import { useEffect, useRef } from "react";

const Card = ({
  product: { brand, title, price, thumbnail },
}: ProductProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      card.style.animation = `${styles.circularMotion} 4s infinite linear`;
    }
  }, []);
  return (
    <div
      className={classNames(
        styles.card,
        "w-72 max-w-[18rem] h-96 bg-white relative"
      )}
    >
      <a href="#" className="flex items-center justify-center h-48">
        <Image
          className="rounded-t-lg flex pt-1 h-full w-full object-contain"
          src={thumbnail}
          width={200}
          height={200}
          alt="card image"
        />
      </a>
      <div className="p-5 absolute bottom-4">
        <a href="#">
          <h3 className="mb-2 text-2xl font-poppins font-bold tracking-tight">
            {brand}
          </h3>
        </a>
        <p className="mb-3 font-normal text-md font-poppins ">{title}</p>
        <p className="mb-3 font-bold font-poppins">${price}</p>
        <div className=" flex justify-between items-center">
          <div className=" flex pr-2">
            <StarIcon size={30} hasGradient={true} />
            <StarIcon size={30} hasGradient={true} />
            <StarIcon size={30} hasGradient={true} />
            <StarIcon size={30} hasGradient={true} />
            <StarIcon size={30} />
          </div>
          <p className="text-slate-500 mr-10"> (20)</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
