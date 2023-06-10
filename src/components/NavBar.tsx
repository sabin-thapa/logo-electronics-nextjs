import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-around h-[140px] bg-[#380D41] py-4 px-6 ">
      <div className="flex items-center">
        <Image
          src="/assets/main_logo.png"
          width={140}
          height={140}
          alt="Logo of Logo Electronics"
          priority={true}
        />
      </div>
      <div className="flex items-center">
        <Link href="/">
          <Button
            className="w-32 mr-10"
            active={router.pathname === "/" ? "active" : ""}
          >
            Home
          </Button>
        </Link>
        <Link href="/products">
          <Button
            className="w-40"
            active={router.pathname.startsWith("/products") ? "active" : ""}
          >
            Products
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
