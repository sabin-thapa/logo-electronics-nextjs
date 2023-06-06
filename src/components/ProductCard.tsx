import classNames from "classnames";
import Image from "next/image";
import styles from "@/styles/Card.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import Button from "./Button";
import ViewButton from "./ViewButton";

const ProductCard = () => {
  return (
    <div
      className={classNames("w-80 max-w-[20rem] bg-white rounded-3xl mb-32")}
    >
      <div className="flex justify-between py-5 px-5">
        <h1
          className={classNames(
            styles.gradient_font,
            "flex items-center text-xl"
          )}
        >
          RUBI-128K
        </h1>
        <AiOutlineHeart size={36} />
      </div>
      <a href="#" className="flex items-center justify-center">
        <Image
          className="rounded-t-lg flex pt-1"
          src="/assets/desktop.png"
          width={200}
          height={200}
          alt="card image"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h3 className="mb-2 text-2xl text-center font-poppins font-normal">
            Headphone-128K
          </h3>
        </a>
        <div className="flex justify-center mt-8">
          <ViewButton
            className={classNames(
              "flex justify-around items-center w-64 py-4 text-white font-routhem uppercase"
            )}
            fontColor="#000"
          >
            <span className="font-normal tracking-widest"> View </span>
            <Image
              src="/assets/black_right_arrow.png"
              width={32}
              height={32}
              alt="right arrow"
              color="#000"
            />
          </ViewButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
