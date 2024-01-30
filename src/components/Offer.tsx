import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="">
      <div className='relative w-full bg-black h-[800px] md:h-[500px] bg-[url("/offerBg.png")] '>
        <div className="absolute flex flex-col md:flex-row justify-evenly w-full h-full">

          <div className="w-full  flex flex-col justify-center text-white p-4 md:p-16 gap-5 md:w-1/2">
            <h1 className="text-5xl text-yellow-300 font-bold">
              Delecious Burger and French Fries{" "}
            </h1>
            <p className="w-full overflow-x-scroll">
        dddugffuhfukdhfddugffuhfukdhfddugffuhfukd
        hfddugffuhfukdhfdfhdddugffuhfukdhfddugffuh
        fukdhfddugffuhfukdhfddugffuhfukdhfdfhdddugff
        uhfukdhfddugffuhfukdhfddugffuhfukdhfddugffuhfu
        kdhfdfhdddugffuhfukdhfddugffuhfukdhfddugffuh
        fukdhfddugffuhfukdhfdfhhhhhhh
      </p>

            <CountDown />

            <div className="flex ">
              <button className="bg-red-500 px-5 py-2 hover:bg-gray-100 hover:text-black transition ease-linear rounded-xl">
                Order Now
              </button>
            </div>
          </div>

          <div className=" flex justify-center items-center w-full  md:w-1/2">
            <Image src="/offerProduct.png" alt="aa" width={700} height={700} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Offer;
