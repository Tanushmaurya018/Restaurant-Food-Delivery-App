"use client"

import Image from "next/image";
import React from "react";
import { Pizzas } from "@/data";
import { Pastas } from "@/data";
import { Burgers } from "@/data";
import { useParams } from "next/navigation";

const CategoryPage = () => {
  const product=useParams();

  return (
    <div className="  ">
      <div className="flex flex-wrap">



        {
          product.category == "pizza" ? Pizzas.map((pizza) => (
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-red-50 hover:bg-red-200 transition duration-200 ease-linear p-2 gap-3 flex flex-col justify-start items-center">
              <Image src={pizza.img} alt={pizza.name} width={300} height={300} />
              <h1 className="text-2xl text-red-300">{pizza.name}</h1>
              <h1 className="text-2xl text-red-300">{pizza.desc}</h1>
              <h1 className="text-xl text-red-500">${pizza.price}</h1>
            </div>
          ))
          
          :

          product.category == "pasta" ? Pastas.map((pasta) => (
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-red-50 hover:bg-red-200 transition duration-200 ease-linear p-2 gap-3 flex flex-col justify-start items-center">
              <Image src={pasta.img} alt={pasta.name} width={300} height={300} />
              <h1 className="text-2xl text-red-300">{pasta.name}</h1>
              <h1 className="text-2xl text-red-300">{pasta.desc}</h1>
              <h1 className="text-xl text-red-500">${pasta.price}</h1>
            </div>
          ))
          
          :
          product.category == "burger" ? Burgers.map((burger) => (
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-red-50 hover:bg-red-200 transition duration-200 ease-linear p-2 gap-3 flex flex-col justify-start items-center">
              <Image src={burger.img} alt={burger.name} width={300} height={300} />
              <h1 className="text-2xl text-red-300">{burger.name}</h1>
              <h1 className="text-2xl text-red-300">{burger.desc}</h1>
              <h1 className="text-xl text-red-500">${burger.price}</h1>
            </div>
          )) :
           

          <div className="text-7xl text-red-300 text-center">
            Nothing is available
            </div>

        }




      </div>
    </div>
  );
};

export default CategoryPage;
