import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-around h-[80px] bg-[#380D41] py-4 px-6">
      <div className="flex items-center">
        <Image
          src="/assets/main_logo.png"
          width={100}
          height={100}
          alt="Logo of Logo Electronics"
          priority={true}
        />
      </div>
      <div className="flex items-center">
        <Link href="/">
          <Button className="w-28 mr-10">Home</Button>
        </Link>
        <Link href="/">
          <Button className="w-32">Products</Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
