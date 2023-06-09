import classNames from "classnames";
import styles from "@/styles/Card.module.css";
import ImageContainer from "../common/ImageContainer";
import StarIcon from "../common/StarIcon";
import { Product } from "../../../models/Products";

interface ProductDetailProps {
  product: Product;
}

const ProductDetailCard = ({ product }: ProductDetailProps) => {
  return (
    <div
      className={classNames(
        styles.card_rounded,
        "w-full mx-96 min-h-[30rem] rounded-3xl bg-grayishbg mb-32 grid grid-cols-3"
      )}
    >
      <ImageContainer image={product.thumbnail} />
      <div className=" flex flex-col py-16 px-14 mr-4 col-span-2 justify-start items-start">
        <h3 className="mb-2 text-3xl text-center font-poppins font-normal">
          {product.title}
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
            <span className="text-lg"> {product.title}</span>{" "}
            {product.description}
          </p>
        </div>
        <div className="flex flex-col gap-4 pt-8 font-poppins text-2xl">
          <p>Price: RS {product.price}</p>
          <p>Discount: {product.discountPercentage}%</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
