import Button from "@/components/Button";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Card from "@/components/Card";
import classNames from "classnames";
import TitleText from "@/components/TitleText";
import ProductCard from "@/components/ProductCard";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title> Home | Logo Electronics</title>
      </Head>
      <div className="main-bg-wrapper">
        <TitleText text="Logo Electronics" />
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
            className="flex justify-between items-center w-96 py-4 text-white font-bespax uppercase tracking-widest"
            fontColor="#fff"
            bolderBorder={true}
          >
            <span> View All Products </span>
            <Image
              src="/assets/right_arrow.png"
              width={36}
              height={36}
              alt="right arrow"
            />
          </Button>
        </div>
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

export default Home;
