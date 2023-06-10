import styles from "@/styles/Home.module.css";
import classNames from "classnames";
import { useEffect, useState } from "react";

type TitleTextProps = {
  text: string;
  textStroke?: boolean;
};

const TitleText = ({ text, textStroke }: TitleTextProps) => {
  const [typingComplete, setTypingComplete] = useState(false);

  const handleTypingComplete = () => {
    setTimeout(() => {
      setTypingComplete(false);
    }, 800);
    setTypingComplete(true);
  };

  return (
    <h1
      className={classNames(
        `font-routhem text-pinky text-6xl text-left pt-48`,
        { [styles.title_text]: textStroke && !typingComplete }
      )}
    >
      {text}
    </h1>
  );
};

export default TitleText;
