import Button from "@/components/Button";
import styles from "../styles/Home.module.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Image from "next/image";

const Home = () => {
  return (
    <div className="main-bg-wrapper">
      {/* <Image
        src="/assets/main_bg.png"
        height={1024}
        width={1920}
        alt="bg-image"
      /> */}
      <h1
        className={`font-routhem text-pinky text-6xl text-center pt-48 ${styles.title_text}`}
      >
        Logo Electronics
      </h1>
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
          <Image src="/assets/right_arrow.png" width={36} height={36} alt="right arrow" />
        </Button>
      </div>
    </div>
  );
};

export default Home;
