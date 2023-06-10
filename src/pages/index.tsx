import Button from "@/components/Button";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Card from "@/components/Card";
import classNames from "classnames";
import TitleText from "@/components/TitleText";
import ProductCard from "@/components/ProductCard";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { Product, ProductsResponse } from "../../models/Products";
import { useState } from "react";

export interface ProductsPageProps {
  products: Product[];
}

export const getServerSideProps: GetServerSideProps<
  ProductsPageProps
> = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const productsResponse: ProductsResponse = await response.json();
  return {
    props: {
      products: productsResponse.products,
    },
  };
};

const Home = ({ products }: ProductsPageProps) => {
  const selectedProducts = products.slice(0, 4);
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsBtnHovered(true);
  };

  const handleMouseLeave = () => {
    setIsBtnHovered(false);
  };

  return (
    <>
      <Head>
        <title> Home | Logo Electronics</title>
      </Head>
      <div className="main-bg-wrapper">
        <div className="h-64 flex items-center mx-[40rem]">
          <TitleText text="Logo Electronics" textStroke />
        </div>
        <div className="flex items-center justify-center text-center py-4 pt-8">
          <div
            className={`w-40 h-[10px] bg-gray-400 ${styles.gradient_text} rounded-md`}
          ></div>

          <h3
            className={`uppercase font-bespax text-center text-white  tracking-widest text-2xl mx-6 `}
          >
            The Techies You Love
          </h3>

          <div
            className={`w-40 h-[10px] bg-gray-400 ${styles.gradient_text} rounded-md`}
          ></div>
        </div>
        <div className="flex justify-center py-16">
          <Button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex justify-between items-center w-[34rem] py-6 rounded-full text-white font-bespax font-medium uppercase tracking-widest"
            fontColor="#fff"
            bolderBorder={true}
            bespax
            active="true"
            animated
            hovered={isBtnHovered}
          >
            <span> View All Products </span>
            <Image
              src="/assets/right_arrow.png"
              width={36}
              height={36}
              alt="right arrow"
              className={isBtnHovered ? styles.btn_arrow : ""}
            />
          </Button>
        </div>
      </div>
      <div
        className={classNames(
          "-mt-64 grid grid-cols-6 gap-x-[24rem] place-items-center",
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
        {selectedProducts.map((product, index) => (
          <Card product={product} key={index} />
        ))}

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
          {products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
