import styles from "../styles/Home.module.css";
const Home = () => {
  return (
    <div className="main-bg-wrapper">
      {/* <Image
        src="/assets/main_bg.png"
        height={1024}
        width={1920}
        alt="bg-image"
      /> */}
      <h1 className={`font-routhem text-pinky text-6xl text-center pt-48 ${styles.title_text}`}>
        Logo Electronics
      </h1>
      <div className="flex items-center justify-center text-center py-4 pt-8">
        <div className={`w-40 h-[10px] bg-gray-400 ${styles.gradient_text} rounded-md`}></div>

        <h3
          className={`uppercase font-routhem text-center text-white  tracking-widest text-2xl mx-6 `}
        >
          The Techies You Love
        </h3>

        <div className={`w-40 h-[10px] bg-gray-400 ${styles.gradient_text} rounded-md`}></div>
      </div>
    </div>
  );
};

export default Home;
