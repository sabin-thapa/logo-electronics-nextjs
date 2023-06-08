import classNames from "classnames";
import Image from "next/image";
import styles from "@/styles/Card.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import Button from "./Button";
import ViewButton from "./ViewButton";
import ImageContainer from "./ImageContainer";
import StarIcon from "./StarIcon";

const ProductDetailCard = () => {
  return (
    <div
      className={classNames(
        styles.card_rounded,
        "w-full mx-96 min-h-[30rem] rounded-3xl bg-grayish mb-32 grid grid-cols-3"
      )}
    >
      <ImageContainer />
      <div className=" flex flex-col py-16 px-14 mr-4 col-span-2 justify-start items-start">
        <h3 className="mb-2 text-3xl text-center font-poppins font-normal">
          Headphone-128K
        </h3>
        <div className="flex justify-center items-center">
          <div className="flex">
            <StarIcon size={30} hasGradient={true} />
            <StarIcon size={30} hasGradient={true} />
            <StarIcon size={30} hasGradient={false} />
            <StarIcon size={30} hasGradient={false} />
            <StarIcon size={30} />
          </div>
          <p className="text-slate-500 ml-4"> (20)</p>
        </div>
        <div className="pt-12">
          <p className="font-poppins text-lightText text-[500] tracking-[0.28em]">
            <span className="text-lg"> Headphone</span> is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry&#39;s{" "}
          </p>
        </div>
        <div className="flex flex-col gap-4 pt-8 font-poppins text-2xl">
          <p>Price: RS 750</p>
          <p>Discount: 10%</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
