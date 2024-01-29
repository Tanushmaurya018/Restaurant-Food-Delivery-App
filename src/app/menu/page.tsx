import Image from "next/image";
import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { Menus } from "@/data";
const Menu = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-5 justify-center min-h-[70vh] items-center p-5 ">


{
  Menus.map((item)=>(
    <div className={`${item.theme ? `${item.theme.textcolor}` : "" } relative rounded-xl border-2 border-black hover:scale-105 transition ease-linear`}>
    <Image
      src={item.img}
      className="rounded-xl"
      width={400}
      height={400}
      alt="e"
    />
    <h1>{}</h1>
    <div className="absolute top-0 left-5 h-full flex flex-col  justify-evenly">
      <h1 className={`${item.theme ? `${item.theme.textcolor}` : "text-white "} uppercase text-2xl lg:text-4xl font-extrabold`}>
        {item.name}
      </h1>
      <p className={`${item.theme ? `${item.theme.textcolor}` : "text-white "} w-[190px] text-white text-md`}>
        {item.desc}
      </p>
      <div className="">
        <button
          className={`${item.theme ? ` hover:${item.theme.bgcolor} hover:${item.theme.buttoncolor}` : " hover:bg-white hover:text-black"}
           bg-red-500 text-white font-bold
         transition ease-linear
        px-3 py-1 lg:px-5 lg:py-2  rounded-xl flex items-center gap-2`}
        >
          Menu
          <BiSolidRightArrow />
        </button>
      </div>
    </div>
  </div>
  ))
}


    </div>
  );
};

export default Menu;
