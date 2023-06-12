import classNames from "classnames";
import Image from "next/image";
import styles from "@/styles/Card.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import ViewButton from "../button/ViewButton";
import { Product } from "../../../models/Products";
import Link from "next/link";

export interface ProductProps {
  product: Product;
  isLastCard?: boolean;
}

const ProductCard = ({
  product: { id, brand, title, price, thumbnail, rating },
}: ProductProps) => {
  return (
    <div
      className={classNames(
        "w-[24rem] max-w-[24rem] min-h-[38rem] bg-white rounded-3xl mb-32 relative"
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
      <a href="#" className="flex items-center justify-center h-72">
        <Image
          className="rounded-t-lg flex pt-1 w-full object-contain h-full"
          src={thumbnail}
          width={250}
          height={500}
          alt="card image"
        />
      </a>
      <div className="p-5 absolute bottom-5 w-96">
        <a href="#">
          <h3 className=" text-2xl text-center font-poppins font-medium">
            {title}
          </h3>
        </a>
        <Link href={`/products/${id}`}>
          <div className="flex justify-center mt-8 ">
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
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
