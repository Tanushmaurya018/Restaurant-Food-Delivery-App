import Image from "next/image";
import React from "react";
import { Pizzas } from "@/data";
const CategoryPage = () => {
  return (
    <div className="  ">
      <div className="">
        {Pizzas.map((pizza) => (
          <div className=" border-4 border-red-500">
            <Image src={pizza.img} alt={pizza.name} width={500} height={500} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
