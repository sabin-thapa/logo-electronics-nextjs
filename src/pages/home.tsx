import Button from "@/components/Button";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Card from "@/components/Card";
import classNames from "classnames";
import TitleText from "@/components/TitleText";

const Home = () => {
  return (
    <>
      <div className="main-bg-wrapper">
        <TitleText text="Logo Electronics" />
        <div className="flex items-center justify-center text-center py-4 pt-8">
          <div
            className={`w-40 h-[10px] bg-gray-400 ${styles.gradient_text} rounded-md`}
          ></div>

          <h3
            className={`uppercase font-routhem text-center text-white  tracking-widest text-2xl mx-6 `}
          >
            The Techies You Love
          </h3>

          <div
            className={`w-40 h-[10px] bg-gray-400 ${styles.gradient_text} rounded-md`}
          ></div>
        </div>
        <div className="flex justify-center py-16">
          <Button
            className="flex justify-between items-center w-96 py-4 text-white font-routhem uppercase tracking-widest"
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
          "-mt-56 flex items-center justify-around space-x-10 px-10",
          styles.card_section
        )}
      >
        <Image
          src="/assets/left_arrow.png"
          width={36}
          height={36}
          alt="left arrow"
        />
        <Card />
        <Card />
        <Card />
        <Card />
        <Image
          src="/assets/right_arrow.png"
          width={36}
          height={36}
          alt="right arrow"
        />
      </div>

      <div className="products">
        <TitleText text="Products" />
      </div>
    </>
  );
};

export default Home;
