import Image from "next/image";
import styles from "@/styles/Footer.module.css";
import classNames from "classnames";
import SubHeader from "./SubHeader";

const Footer = () => {
  return (
    <div className="relative">
      <div className={styles.footer_image_section}>
        <Image
          className={classNames(styles.footer_image, styles.overlay_image)}
          src="/assets/footer_bg_overlay.png"
          alt="Image 1"
          width={800}
          height={600}
        />
        <Image
          className={styles.footer_image}
          src="/assets/footer_bg.png"
          alt="Image 2"
          width={800}
          height={600}
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center">
        <div className="grid grid-cols-3 justify-around gap-36 place-ite">
          <div className="text-white mx-4 flex-grow pl-20">
            <Image
              src="/assets/main_logo.png"
              width={100}
              height={100}
              alt="Logo of Logo Electronics"
              priority={true}
            />

            <p className="font-poppins mt-12 font-normal tracking-[0.25em] leading-7">
              lOGO is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s, when
            </p>
          </div>
          <div className="text-white mx-4 flex-grow">
            <SubHeader text="Useful Links" className="mt-4" />
            <h1 className="uppercase font-poppins">Home</h1>
            <h1 className="uppercase font-poppins">Product</h1>
            <h1 className="uppercase font-poppins">About us</h1>
            <h1 className="uppercase font-poppins">contact</h1>
          </div>
          <div className="text-white mx-4 flex-grow">
            <h3 className="text-lg font-semibold">Column 3</h3>
            <p>Text for column 3</p>
          </div>
        </div>
      </div>

      <div className="copyrights_section flex min-h-[6rem] tracking-widest uppercase font-poppins text-center text-white justify-center items-center">
        <p>Copyright 2021 lOGO ALL RIGHT RESERVED </p>
      </div>
    </div>
  );
};

export default Footer;
