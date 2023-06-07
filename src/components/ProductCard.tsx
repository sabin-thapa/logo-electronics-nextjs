import classNames from "classnames";
import Image from "next/image";
import styles from "@/styles/Card.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import Button from "./Button";
import ViewButton from "./ViewButton";

const ProductCard = () => {
  return (
    <div
      className={classNames(
        "w-[22rem] max-w-[22rem] min-h-[32rem] bg-white rounded-3xl mb-32"
      )}
    >
      <div className="flex justify-between py-5 px-5">
        <h1
          className={classNames(
            styles.gradient_font,
            "flex items-center text-2xl"
          )}
        >
          RUBI-128K
        </h1>
        <AiOutlineHeart size={40} />
      </div>
      <a href="#" className="flex items-center justify-center">
        <Image
          className="rounded-t-lg flex pt-1"
          src="/assets/desktop.png"
          width={250}
          height={300}
          alt="card image"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h3 className="mb-2 text-4xl text-center font-poppins font-normal">
            Headphone-128K
          </h3>
        </a>
        <div className="flex justify-center mt-8">
          <ViewButton
            className={classNames(
              "flex justify-around px-14 mx-1 items-center w-full py-4 text-white font-bespax uppercase"
            )}
            fontColor="#000"
          >
            <span className="text-2xl tracking-widest"> View </span>
            <Image
              src="/assets/black_right_arrow.png"
              width={40}
              height={40}
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
