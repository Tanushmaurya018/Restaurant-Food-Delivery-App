"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const user = false;
const Menu = () => {
  const [open, setOpen] = useState(false);
  function changeOpen() {
    setOpen(!open);
    // console.log(open)
  }
  return (
    <div className="">
      <Image
        src={!open ? "/open.png" : "/close.png"}
        height={20}
        width={20}
        alt=""
        onClick={changeOpen}
      />
      {open && (
        <div className="absolute left-0 top-32 bg-red-500 w-full h-[calc(100vh-8rem)] z-[999] overflow-hidden ">
          <div className="flex flex-col gap-10 text-center items-center justify-center h-full text-white text-3xl">
            {links.map((link) => {
              return (
                <Link href={link.url} key={link.id} onClick={changeOpen}>
                  {link.title}
                </Link>
              );
            })}
            <Link href={user ? "/order" : "/login"} onClick={changeOpen}>
              {user ? "Orders" : "Login"}
            </Link>
            <Link href="/cart" onClick={changeOpen}><CartIcon/></Link>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Menu;
