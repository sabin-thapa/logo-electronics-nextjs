import Accordion from "@/components/Accordion";
import ProductCard from "@/components/ProductCard";
import SubHeader from "@/components/SubHeader";
import TitleText from "@/components/TitleText";
import classNames from "classnames";
import Head from "next/head";
import React from "react";
import styles from "@/styles/Products.module.css";
import ProductDetailCard from "@/components/ProductDetailCard";

const ProductDetail = () => {
  return (
    <>
      <Head>
        <title> Product Detail | Logo Electronics</title>
      </Head>
      <div className={classNames(styles.product_detail_bg_wrapper, "pt-16")}>
        <TitleText text="Products Details" />
      </div>
      <div className="flex py-24 h-72 justify-around ">
        <SubHeader text="Headphone 128k" fontColor="#fff" extraLarge />
      </div>

      <div className="w-full">
        <div className="flex justify-center items-center">
          <ProductDetailCard />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
