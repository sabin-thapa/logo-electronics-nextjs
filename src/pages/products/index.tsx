import Button from "@/components/Button";
import styles from "@/styles/Products.module.css";
import Image from "next/image";
import Card from "@/components/Card";
import classNames from "classnames";
import TitleText from "@/components/TitleText";
import ProductCard from "@/components/ProductCard";
import Head from "next/head";
import SubHeader from "@/components/SubHeader";
import Accordion from "@/components/Accordion";

const Products = () => {
  return (
    <>
      <Head>
        <title> Products | Logo Electronics</title>
      </Head>
      <div className={classNames(styles.products_page_bg_wrapper, "pt-16")}>
        <TitleText text="Products" />
      </div>
      <div className="flex py-24 h-72 justify-around ">
        <SubHeader text=">> All Product" fontColor="#fff" extraLarge />
        <Accordion />
      </div>

      <div className="products-section">
        <div className="products grid grid-cols-3 justify-around gap-2 mt-20 -mb-24 place-items-center px-48">
          {/* <ProductCard /> */}
        </div>
      </div>
    </>
  );
};

export default Products;
