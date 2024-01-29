import Image from "next/image";
import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";

const Menu = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-5 justify-center min-h-[70vh] items-center p-5 ">
      <div className="relative rounded-xl border-2 border-black hover:scale-105 transition ease-linear">
        <Image
          src="/temporary/m1.png"
          className="rounded-xl"
          width={400}
          height={400}
          alt="e"
        />

        <div className="absolute top-0 left-5 h-full flex flex-col  justify-evenly">
          <h1 className="uppercase text-2xl lg:text-4xl text-white font-extrabold">
            Italian Pasta
          </h1>
          <p className="w-[190px] text-white text-md">
            Italian PastaItalian PastaItalian PastaItalian PastaItalian
            PastaItalian Pasta
          </p>
          <div className="">
            <button
              className="bg-red-500 text-white font-bold
           hover:bg-white hover:text-black transition ease-linear
            px-3 py-1 lg:px-5 lg:py-2  rounded-xl flex items-center gap-2"
            >
              Menu
              <BiSolidRightArrow />
            </button>
          </div>
        </div>
      </div>

      <div className="relative rounded-xl border-2 border-black hover:scale-105 transition ease-linear">
        <Image
          src="/temporary/m2.png"
          className="flex rounded-xl"
          width={400}
          height={400}
          alt="e"
        />

        <div className="absolute top-0 left-5 h-full flex flex-col  justify-evenly">
          <h1 className="uppercase text-2xl lg:text-4xl text-yellow-500 font-extrabold">
            Italian Pasta
          </h1>
          <p className="w-[190px] text-yellow-500 text-md">
            Italian PastaItalian PastaItalian PastaItalian PastaItalian
            PastaItalian Pasta
          </p>
          <div className="">
            <button
              className="bg-green-500 text-white font-bold
           hover:bg-white hover:text-black transition ease-linear
            px-3 py-1 lg:px-5 lg:py-2  rounded-xl flex items-center gap-2"
            >
              Menu
              <BiSolidRightArrow />
            </button>
          </div>
        </div>
      </div>

      <div className="relative rounded-xl border-2 border-black hover:scale-105 transition ease-linear">
        <Image
          src="/temporary/m3.png"
          className="rounded-xl"
          width={400}
          height={400}
          alt="e"
        />

        <div className="absolute top-0 left-5 h-full flex flex-col  justify-evenly">
          <h1 className="uppercase text-2xl lg:text-4xl text-black font-extrabold">
            Italian Pasta
          </h1>
          <p className="w-[190px] text-black text-md">
            Italian PastaItalian PastaItalian PastaItalian PastaItalian
            PastaItalian Pasta
          </p>
          <div className="">
            <button
              className="bg-white text-black font-bold
           hover:bg-black hover:text-white transition ease-linear
            px-3 py-1 lg:px-5 lg:py-2  rounded-xl flex items-center gap-2"
            >
              Menu
              <BiSolidRightArrow />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Menu;
