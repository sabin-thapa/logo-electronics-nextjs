import classNames from "classnames";
import Image from "next/image";
import styles from "@/styles/Card.module.css";
import StarIcon from "./StarIcon";

const Card = () => {
  return (
    <div className={classNames(styles.card, "w-64 max-w-[16rem] bg-white")}>
      <a href="#" className="flex items-center justify-center">
        <Image
          className="rounded-t-lg flex pt-1"
          src="/assets/desktop.png"
          width={200}
          height={200}
          alt="card image"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h3 className="mb-2 text-2xl font-poppins font-bold tracking-tight">Apple</h3>
        </a>
        <p className="mb-3 font-normal text-md font-poppins ">Macbook Pro 15-inch</p>
        <p className="mb-3 font-bold font-poppins">$350.00</p>
        <div className=" flex justify-between items-center">
          <div className=" flex pr-2">
            <StarIcon size={30} hasGradient={true} />
            <StarIcon size={30} hasGradient={true} />
            <StarIcon size={30} hasGradient={true} />
            <StarIcon size={30} hasGradient={true} />
            <StarIcon size={30} />
          </div>
          <p className="text-slate-500 mr-10"> (20)</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
