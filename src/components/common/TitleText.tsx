import styles from "@/styles/Home.module.css";
import classNames from "classnames";
import { useEffect, useState } from "react";

type TitleTextProps = {
  text: string;
  textStroke?: boolean;
};

const TitleText = ({ text, textStroke }: TitleTextProps) => {
  return (
    <h1
      className={classNames(
        `font-routhem text-pinky text-6xl text-center pt-48`,
        { [styles.title_text]: textStroke }
      )}
    >
      {text}
    </h1>
  );
};

export default TitleText;
