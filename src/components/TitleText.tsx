import styles from "@/styles/Home.module.css";

type TitleTextProps = {
  text: string;
};

const TitleText = ({ text }: TitleTextProps) => {
  return (
    <h1
      className={`font-routhem text-pinky text-6xl text-center pt-48 ${styles.title_text}`}
    >
      {text}
    </h1>
  );
};

export default TitleText;
