"use client";

// import Image from "next/image";
import React, { useRef, useState } from "react";
// import herobg from "@/public/images/newhero.webp";
import { Button } from "@/components/ui/button";
import {
  motion,
  // useMotionValueEvent,
  // useScroll,
  // useTransform,
} from "motion/react";
import design from "@/public/images/design.jpg";
import educate from "@/public/images/educate.jpg";
import ship from "@/public/images/ship.jpg";
import Image from "next/image";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollItems = [
    {
      title: "Marine Construction",
      image: ship,
      description: "there is a description",
    },
    {
      title: "Educate",
      image: educate,
      description: "there is a description",
    },
    {
      title: "Engineering Design",
      image: design,
      description: "there is a description",
    },
  ];

  return (
    <div className="min-h-screen  relative">
      {/* <Image
        src={herobg}
        alt="Regalia marine hero background image"
        className=" h-full w-full object-cover bg-ultramarine-900"
        placeholder="blur"
      /> */}
      <div className="z-[5] h-full  bg-gray-50 flex flex-col justify-center items-center text-center font-light pt-28 pb-20 max-sm:pt-48 text-white px-20 max-md:px-5 w-full ">
        <motion.h1 whileInView={{opacity:1}} initial={{opacity:0}} transition={{duration:2}} className="text-5xl xl:text-7xl 2xl:text-8xl  text-ultramarine-950  max-md:leading-tight leading-10  ">
          Innovating the Future of <br /> Marine{" "}
          <span className=""> Engineering</span>
        </motion.h1>
        <motion.p whileInView={{opacity:1,y:0}} initial={{opacity:0,y:50}} transition={{duration:1,y:{duration:1},type:'tween'}}  className="text-base mt-8 text-gray-700  w-1/2   max-md:w-4/5 max-sm:w-full">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ut
          provident, repellat quasi fugiat eum optio corrupti facere suscipit
        </motion.p>

        <Button className="w-1/5 mt-14 max-sm:w-full" variant={"gradient"}>
          Join Now
        </Button>
      </div>

      <div
        className="h-[70vh] max-sm:h-40[vh] flex  space-y-10  max-md:w-5/6  w-3/5  mx-auto rounded-xl relative "
        ref={containerRef}
      >
        {scrollItems.map((item, index) => {
          // const idx=`[-${index.toString()}]`
          // const translateY=`[${index*10}]`
          // const randomNumber = Math.floor(Math.random() * (50 - 20 + 1)) + 10;
          return (
            <motion.div
              // initial={{ opacity: 0, x: 1000 }}
              // whileInView={{ opacity: 1, x: 0 }}
              // transition={{ duration: 3 }}
              // viewport={{ root: containerRef }}
              key={index}
              className={`absolute  max-sm:top-0  w-full f items-center gap-10 max-md:gap-5 rounded-xl flex max-sm:flex-col-reverse bg-white  h-full max-sm:h-fit max-sm:p-5`}
              style={{
                // y: index == currentIndex ? 0 : 30,
                x: index == currentIndex ? -10 : 3000,
                // zIndex: index == currentIndex ? 1 : -1,
                // rotateZ: index == currentIndex ? 0 : 5,
                // scale:index == currentIndex ? 1 : .8
              }}
              onClick={()=>{setCurrentIndex(0)}}
            >
              <div className=" space-y-2  right-10 top-10 w-1/2 max-sm:w-full  bg-white bg-opacity-70 p-5 max-sm:p-0 rounded-xl text-gray-700 ">
                <h1 className="text-lg font-medium ">{item.title}</h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi ut temporibus rerum tempore pariatur amet modi
                  ratione accusantium exercitationem quod.
                </p>
              </div>
              <Image
                src={item.image}
                alt="regalia carousel image"
                className="w-1/2 rounded-md h-full max-sm:h-[30vh] max-sm:w-full  object-cover"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
