import Image from "next/image";
import React from "react";
import herobg from "@/public/images/newhero.webp";
import { Button } from "@/components/ui/button";
const Header = () => {
  return (
    <div className="h-screen  relative">
      <Image
        src={herobg}
        alt="Regalia marine hero background image"
        className=" h-full w-full object-cover bg-ultramarine-900"
        placeholder="blur"
      />
      <div className="z-[5] h-full absolute top-0 bg-[rgba(0,0,0,.85)] flex flex-col justify-end font-light pt-28 pb-20 max-sm:pt-48 text-white px-20 max-md:px-5 w-full ">
        <h1 className="text-5xl xl:text-7xl 2xl:text-8xl  text-gray-300  max-md:leading-tight  ">
          Innovating the <br /> Future of <br /> Marine{" "}
          <span className=""> Engineering</span>
        </h1>
        <p className="text-base mt-5 text-gray-400 w-1/2  font-light max-md:w-4/5 max-sm:w-full">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ut
          provident, repellat quasi fugiat eum optio corrupti facere suscipit
        </p>

        {/* <Button className="w-1/5 mt-5" variant={"secondary"}>
          Join Now
        </Button> */}
      </div>
    </div>
  );
};

export default Header;
