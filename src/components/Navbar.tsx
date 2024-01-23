import Image from "next/image";
import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
const user = false;
const Navbar = () => {
  return (
    <div className=" flex h-16 md:h-20 bg-red-100 text-red-500 justify-between items-center py-2 px-2 md:px-5 lg:px-20 uppercase">
      <div className="hidden md:flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>

      <div className="text-xl md:text-2xl">
        <Link href="/" className='font-bold'>FoodyBooty</Link>
      </div>

      <div className="hidden md:flex items-center gap-5">
        <div className="md:absolute top-2 right-2 lg:static flex gap-2 items-center justify-center bg-orange-300 rounded-lg p-1">
          <Image src="/phone.png" alt="" width={20} height={20}/>
          <span>+123-456-789</span>
        </div>
        <CartIcon/>

        <Link href={user ? "/order" : "/login"}>
          {user ? "Orders" : "Login"}
        </Link>
      </div>

      <div className="md:hidden">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
