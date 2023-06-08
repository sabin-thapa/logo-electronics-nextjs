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
import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import {
  Product,
  ProductResponse,
  ProductsResponse,
} from "../../../models/Products";
import { ParsedUrlQuery } from "querystring";

export interface ProductDetailProps {
  product: Product;
}

export const getStaticPaths: GetStaticPaths = async () => {
  //Fetch the list of product IDs from the API
  const response = await fetch("https://dummyjson.com/products");
  const productResponse: ProductsResponse = await response.json();

  //Generate the paths based on the product IDs
  const paths = productResponse.products.map((product) => ({
    params: { product: product.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProductDetailProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  const productId = params?.product?.toString();
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const productResponse: Product = await response.json();

  console.log(productResponse, "Product Response");

  if (!productResponse) {
    // Handle the case where the product is not found
    console.log("Not Found");
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: productResponse,
    },
  };
};

const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <>
      <Head>
        <title> Product Detail | Logo Electronics</title>
      </Head>
      <div className={classNames(styles.product_detail_bg_wrapper, "pt-16")}>
        <TitleText text="Products Details" />
      </div>
      <div className="flex py-24 h-72 justify-around ">
        <SubHeader text={product.title} fontColor="#fff" extraLarge />
      </div>

      <div className="w-full">
        <div className="flex justify-center items-center">
          <ProductDetailCard product={product} />
        </div>
      </div>

      <div className="flex justify-center gap-8">
        <ImageContainer className="pb-8" image={product.thumbnail} />
        <ImageContainer className="pb-8" image={product.thumbnail} />
        <ImageContainer className="pb-8" image={product.thumbnail} />
        <ImageContainer className="pb-8" image={product.thumbnail} />
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
