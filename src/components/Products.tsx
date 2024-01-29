import React from "react";
import { Product } from "@/data";
import Image from "next/image";

const Products = (props: Product) => {
  return (
    <div className="p-1 md:p-2">
      <div
        className="bg-red-100 flex flex-col justify-between w-[100vw] md:w-[350px] h-[700px]  md:h-[600px]
         items-center transition ease-linear hover:bg-gray-100 hover:scale-105  "
      >
        <div className="relative w-full h-[300px]  md:w-[300px] md:h-[300px] ">
          <Image
            src={props.img}
            alt="image of food"
            fill
            className=" absolute object-contain "
          />
        </div>
        <h1 className="text-red-500 font-medium text-3xl uppercase">
          {props.name}
        </h1>
        <h1 className="text-red-500 font-base text-xl">{props.desc}</h1>
        <h1 className="text-red-500 font-bold text-2xl ">${props.price}</h1>
        <button className="bg-red-500 p-4 rounded-xl text-white  mb-5">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Products;
