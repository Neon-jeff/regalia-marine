"use client";

import React, {  useEffect, useRef, useState } from "react";
import carouselone from '@/public/images/carousel-one.jpg'
import carouseltwo from '@/public/images/carousel-two.jpg'
import carouselthree from '@/public/images/carousel-three.jpg'
import Image from "next/image";
import {gsap} from 'gsap'
import {useGSAP} from '@gsap/react'
import { type CarouselApi } from "@/components/ui/carousel"
import scrollTrigger from 'gsap/ScrollTrigger'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Header = () => {
const parallaxRef=useRef(null)
gsap.registerPlugin(scrollTrigger)

// 

  const scrollItems = [
    {
      title: "Remote Operated Vehicle",
      image: carouselthree,
      description: "Explore underwater depths effortlessly with our advanced remote-operated vehicle technology",
    },
    {
      title: "Ship Design",
      image: carouseltwo,
      description: "Innovative ship design solutions combining efficiency, functionality, and cutting-edge engineering.",
    },
    {
      title: "Ship Structural Analysis",
      image: carouselone,
      description: "Comprehensive ship structural analysis ensuring safety, durability, and optimal performance at sea.",
    },


  ];

  useGSAP(()=>{
    gsap.fromTo('.herotext',{opacity:0,scale:.5},{
      opacity:1,
      scale:1,
      duration:1
    })
    // parallaxTimeLine.from   
  },)

  useGSAP(()=>{
    // const parallaxItems=gsap.utils.toArray('.parallax')
    // console.log(parallaxItems);
    
    gsap.to(parallaxRef.current,{
      x:1000,
      ease:'none',
      // duration:1000,
      scrollTrigger:{
        trigger:parallaxRef.current,
        // trigger:parallaxRef.current,
        // pin:true,
        // scrub:true,
        // snap:1/(parallaxItems.length-1),
        // onEnter:()=>{console.log('entered');
        // },
        // markers:true,
       start:'50px center'
      
      }
    })
  })

  const [api,setApi] = useState<CarouselApi>()
  const [index,setIndex]=useState<number>(0)
  const [count,setCount]=useState<number>(0)

  useEffect(()=>{
    if(!api){
      return
    }
    const interval = setInterval(()=>{
      if(api.canScrollNext()){
        api.scrollNext()
        return
      }
      api.scrollTo(0)
    },6000)

    return ()=>{clearInterval(interval)}

    

  },[api])

  return (
    <div className="">

      <Carousel setApi={setApi}>
        <CarouselContent>
        {
        scrollItems.map((item,index)=>
        <CarouselItem key={index} className="basis-full pl-0">
          <div className="relative">
            <Image src={item.image} alt="Carousel Image Regalia Marine" className='h-[90vh] w-screen max-sm:h-[90vh] object-cover'/>
            <div className="absolute bg-black bottom-10 p-10 rounded-md bg-opacity-50 w-full lg:w-1/2 left-10 space-y-2 text-white font-thin max-md:left-0 max-md:bottom-0">
              <h1 className='text-4xl max-md:text-2xl font-regular'>{item.title}</h1>
              <p className=''>{item.description}</p>
            </div>
          </div>
        </CarouselItem>)
      }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* <Image
        src={herobg}
        alt="Regalia marine hero background image"
        className=" h-full w-full object-cover bg-ultramarine-900"
        placeholder="blur"
      /> */}
      {/* <div className="z-[5] h-full  bg-gray-50 flex flex-col justify-center items-center text-center font-light pt-36 pb-20 max-sm:pt-36  px-20 max-md:px-5 w-full ">
        <h1 className="herotext text-4xl lg:w-1/2 xl:text-6xl 2xl:text-7xl  text-ultramarine-700  max-md:leading-tight leading-10  ">
          Innovating the Future of  Marine{" "}
          <span className=""> Engineering</span>
        </h1>
        <motion.p animate={{opacity:1,y:0}} initial={{opacity:0,y:50}} transition={{duration:1,y:{duration:1},type:'tween'}}  className="text-base mt-8   w-1/2   max-md:w-4/5 max-sm:w-full">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ut
          provident, repellat quasi fugiat eum optio corrupti facere suscipit
        </motion.p>

        <Button className="w-1/5 mt-14 max-sm:w-full" variant={"gradient"}>
          Join Now
        </Button>
      </div> */}


     {/* <div
        className=" parallaxContainer  xl:min-h-screen w-3/5   max-md:w-full max-sm:h-fit relative     mx-auto rounded-xl"
        ref={containerRef}
        
      >
        {scrollItems.slice(0,1).map((item, index) => {
          return (
            <div
              ref={parallaxRef}
              key={index}
              className={` parallax absolute max-sm:static bg-white max-sm:bg-transparent     items-center gap-10 max-md:gap-5 rounded-xl flex max-sm:flex-col-reverse  max-sm:w-full  max-sm:p-5`}
              style={{
                zIndex:currentIndex == index ? 0 :-1 *index || 0
              }}
              onClick={()=>{setCurrentIndex(0)}}
            >
              <div className=" space-y-2    w-1/2   bg-white  p-5  rounded-xl max-sm:absolute max-sm:-bottom-10 max-sm:w-4/5">
                <h1 className="text-lg font-medium ">{item.title} {index}</h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi ut temporibus rerum tempore pariatur amet modi
                  ratione accusantium exercitationem quod.
                </p>
              </div>
              <Image
                src={item.image}
                alt="regalia carousel image"
                className=" rounded-md h-96 w-1/2 max-sm:h-[40vh] max-sm:w-full  object-cover"
              />
            </div>
          );
        })}
      </div> */}
 
    </div>
  );
};

export default Header;
