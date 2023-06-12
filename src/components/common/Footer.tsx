import Image from "next/image";
import styles from "@/styles/Footer.module.css";
import classNames from "classnames";
import SubHeader from "./SubHeader";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const handleScrollToTop = () => {
    const scrollStep = -window.scrollY / (2000 / 15); //
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };
  const faintFooterStyle =
    "uppercase font-poppins text-[#D4C9C9] text-xl tracking-widest py-2";

  return (
    <>
      <div className="flex justify-end mr-36 -mb-24 z-10 relative">
        <motion.div
          // variants={buttonVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleScrollToTop}
        >
          <Image
            className="cursor-pointer"
            src="/assets/rocket.svg"
            alt="Rocket Image"
            width={100}
            height={50}
          />
        </motion.div>
      </div>
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

        <div className="absolute inset-0 flex flex-col justify-center ">
          <div className="grid grid-cols-3 justify-around gap-36 place-ite">
            <div className="text-white mx-4 flex-grow pl-20">
              <Image
                src="/assets/main_logo.png"
                width={100}
                height={100}
                alt="Logo of Logo Electronics"
                priority={true}
              />

              <p className="font-poppins mt-8 font-normal tracking-[0.25em] leading-7">
                lOGO is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500s, when
              </p>
            </div>
            <div className="text-white mx-4 ml-36 flex-grow ">
              <SubHeader text="Useful Links" className="mt-4 " extraBold />
              <div className="flex flex-col pl-7 ">
                <h1 className={faintFooterStyle}>Home</h1>
                <h1 className={faintFooterStyle}>Product</h1>
                <h1 className={faintFooterStyle}>About us</h1>
                <h1 className={faintFooterStyle}>contact</h1>
              </div>
            </div>
            <div className="text-white mx-4 mt-12 flex-grow relative">
              <Image
                src="/assets/follow_bg.svg"
                height={200}
                width={270}
                alt="follow us"
              />
              <div className="absolute top-2 left-11">
                <div className="relative">
                  <SubHeader text="Follow Us On" fontColor="#fff" routhem />
                </div>
              </div>
              <div className="flex gap-9 mt-6">
                <motion.div whileHover={{ scale: 1.4, color: "#1877f2" }}>
                  <FaFacebook
                    size={48}
                    className={classNames(
                      styles.socialIcon,
                      styles.facebookIcon
                    )}
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.4, color: "#d62976" }}>
                  <FaInstagram
                    size={48}
                    className={classNames(
                      styles.socialIcon,
                      styles.instagramIcon
                    )}
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.4, color: "#1da1f2" }}>
                  <FaTwitter
                    size={48}
                    className={classNames(
                      styles.socialIcon,
                      styles.twitterIcon
                    )}
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.4, color: "red" }}>
                  <FaYoutube
                    size={48}
                    className={classNames(
                      styles.socialIcon,
                      styles.youtubeIcon
                    )}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyrights_section flex min-h-[6rem] tracking-widest uppercase font-bespax text-center text-white justify-center items-center">
          <p>Copyright 2021 lOGO ALL RIGHT RESERVED </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
