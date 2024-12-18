"use client";


import React from "react";
import { Button } from "@/components/ui/button";
import one from '@/public/images/do1.jpg'
import two from '@/public/images/do2.jpg'
import three from '@/public/images/do3.jpg'
import four from '@/public/images/do4.jpg'
import Image from "next/image";

const IntroSection = () => {
  const services = [
    {
      title: "Engineering and Design Services",
      description:
        "We provide expert engineering and design solutions in naval architecture, shipbuilding, offshore platforms, and structural analysis, using advanced tools like 3D modeling, virtual prototyping, and digital twin technology.",
      image:one
    },
    {
      title: "Computational Fluid Dynamics (CFD)",
      description:
        "Our CFD simulations ensure hydrodynamic efficiency, reducing drag and improving vessel performance.",
      image:two
    },
    {
      title: "Performance Optimization",
      description:
        "We enhance vessel speed, fuel efficiency, and operational reliability through cutting-edge optimization strategies.",
      image:three
    },
    {
      title: "Advanced Visualization",
      description:
        "Using 3D rendering and virtual reality, we create detailed product visualizations for better design evaluation and collaboration.",
      image:four
    },
  ];

  return (
    <div className="bg-gray-50 px-20 pb-20 space-y-28 max-md:px-10 max-sm:px-5 mt-20 max-sm:mt-10">
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
      <div className="flex items-center text-center justify-between flex-col max-sm:gap-5 space-y-5 ">
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
      <div className="space-y-4 flex flex-col w-4/5 mx-auto max-md:w-full items-center text-center gap-5">
        <div className="space-y-4 ">
          <h1 className="text-4xl max-sm:text-2xl text-blue-500 ">
            What we do
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, repellat.</p>
        </div>
      
          <div className="grid grid-cols-2 max-md:grid-cols-1  gap-8 ">
            {services.map((item, index) => (
                <div
                  key={index}
                  className={`space-y-2  bg-white h-full p-5 rounded-lg text-start hover:scale-105 transition ease-in duration-200   `}
                >
                  {/* <span className="h-12 w-12 text-ultramarine-500  flex items-center justify-center border border-ultramarine-400 rounded-full">
                    {index + 1}
                  </span> */}
                  <Image src={item.image} alt='Regalia service image description image' className='rounded-md h-[250px] object-cover w-full'/>
                  <p className="text-lg font-normal text-black">{item.title}</p>
                  <p className="text-sm ">{item.description}</p>
                </div>
           
            ))}
          </div>
          <Button className="w-fit">Request Quotation</Button>
      </div>
    </div>
  );
};

export default IntroSection;
