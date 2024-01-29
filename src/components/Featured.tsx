import React from "react";
import Products from "./Products";
import { FeaturedProduct, Product } from "@/data";

const Featured = () => {
  return (
    <div className="flex flex-col  p-5">
      <h1 className="text-4xl md:text-7xl uppercase text-red-900 font-extrabold ">
        Featured Items
      </h1>

      <div className="flex w-full overflow-x-scroll overflow-y-hidden ">
        {FeaturedProduct.map((product) => (
          <Products
            key={product.id}
            img={product.img}
            name={product.name}
            desc={product.desc}
            price={product.price}
          />
        ))}
      </div>
      
    </div>
  );
};

export default Featured;
