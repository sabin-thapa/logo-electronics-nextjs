import Accordion from "@/components/Accordion";
import ProductCard from "@/components/ProductCard";
import SubHeader from "@/components/SubHeader";
import TitleText from "@/components/TitleText";
import classNames from "classnames";
import Head from "next/head";
import React from "react";
import styles from "@/styles/Products.module.css";
import ProductDetailCard from "@/components/ProductDetailCard";
import ImageContainer from "@/components/ImageContainer";
import Image from "next/image";

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

      <div className="flex justify-center gap-8">
        <ImageContainer className="pb-8" />
        <ImageContainer className="pb-8" />
        <ImageContainer className="pb-8" />
        <ImageContainer className="pb-8" />
      </div>

      <div className="flex justify-center gap-12 pt-16 pb-64">
        <Image
          src="/assets/left_arrow.png"
          width={50}
          height={50}
          alt="left arrow"
        />
        <Image
          src="/assets/right_arrow.png"
          width={50}
          height={50}
          alt="right arrow"
        />
      </div>
    </>
  );
};

export default ProductDetail;
