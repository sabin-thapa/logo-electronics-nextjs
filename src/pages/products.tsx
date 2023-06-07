import Button from "@/components/Button";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Card from "@/components/Card";
import classNames from "classnames";
import TitleText from "@/components/TitleText";
import ProductCard from "@/components/ProductCard";
import Head from "next/head";

const Products = () => {
  return (
    <>
      <Head>
        <title> Products | Logo Electronics</title>
      </Head>
      <div className="products-page-bg-wrapper">
        <TitleText text="Products" />
      </div>
      <div
        className={classNames(
          "-mt-56 grid grid-cols-6 gap-x-[24rem] place-items-center",
          styles.card_section
        )}
      >
        <div className="-mr-96">
          <Image
            src="/assets/left_arrow.png"
            width={36}
            height={36}
            alt="left arrow"
          />
        </div>
        <Card />
        <Card />
        <Card />
        <Card />

        <div className="-ml-96">
          <Image
            src="/assets/right_arrow.png"
            width={36}
            height={36}
            alt="right arrow"
          />
        </div>
      </div>

      <div className="products-section">
        <TitleText text="Products" />
        <div className="products grid grid-cols-3 justify-around gap-2 mt-20 -mb-24 place-items-center px-48">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default Products;
