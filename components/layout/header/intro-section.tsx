"use client";


import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const IntroSection = () => {
  const services = [
    {
      title: "Engineering and Design Services",
      description:
        "We provide expert engineering and design solutions in naval architecture, shipbuilding, offshore platforms, and structural analysis, using advanced tools like 3D modeling, virtual prototyping, and digital twin technology.",
    },
    {
      title: "Computational Fluid Dynamics (CFD)",
      description:
        "Our CFD simulations ensure hydrodynamic efficiency, reducing drag and improving vessel performance.",
    },
    {
      title: "Performance Optimization",
      description:
        "We enhance vessel speed, fuel efficiency, and operational reliability through cutting-edge optimization strategies.",
    },
    {
      title: "Advanced Visualization",
      description:
        "Using 3D rendering and virtual reality, we create detailed product visualizations for better design evaluation and collaboration.",
    },
  ];

  return (
    <div className="bg-gray-50 px-20 pb-20 space-y-28 max-md:px-10 max-sm:px-5 mt-20 max-sm:mt-0">
      {/* <div className="  flex max-md:flex-col items-start max-sm:space-y-5 justify-between z-[10] mx-auto   ">
        <motion.h1 initial={{x:-300}} whileInView={{x:0}} transition={{duration:1,type:'tween',ease:'easeIn'}} className="text-3xl max-sm:text-3xl font-medium text-ultramarine-700" viewport={{once:true}}>
          Accelerating Growth In <br className="max-sm:hidden" /> Marine Design
        </motion.h1>
        <div className="space-y-3  w-1/2 max-md:w-full ">
          <motion.p className=" " initial={{opacity:0.1}}transition={{delay:1,duration:2}} whileInView={{opacity:1}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, in
            officiis voluptate ex aspernatur illum voluptates molestiae tenetur
          </motion.p>
        </div>
      </div> */}

      {/* about */}
      <div className="flex justify-between flex-col max-sm:gap-5 space-y-5 ">
        <h1 className="text-4xl max-sm:text-2xl text-blue-500">
          Who We Are
        </h1>
        <p className="md:w-4/6 text-base ">
          {
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, cumque sunt quia nam qui cupiditate sapiente alias animi quos, praesentium doloremque dicta assumenda adipisci dignissimos atque corporis sit eligendi! Voluptatum enim nesciunt, officia eveniet animi nobis "
          }
        </p>
      </div>

      {/* services layout */}
      <div className="space-y-4 flex flex-col gap-5">
        <div className="space-y-4 ">
          <h1 className="text-4xl max-sm:text-2xl text-blue-500 ">
            What we do
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, repellat.</p>
          <Button className="w-fit">Request Quotation</Button>
        </div>
        <Carousel>
          <CarouselContent>
            {services.map((item, index) => (
              <CarouselItem className='basis-1/3 max-sm:basis-11/12 ' key={index}>
                <div
                  
                  className={`space-y-2 bg-white h-full p-5    `}
                >
                  <span className="h-12 w-12 text-ultramarine-500  flex items-center justify-center border border-ultramarine-400 rounded-full">
                    {index + 1}
                  </span>
                  <p className="text-lg font-normal ">{item.title}</p>
                  <p className="text-sm ">{item.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default IntroSection;
