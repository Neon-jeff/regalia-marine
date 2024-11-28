import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";


const IntroSection = () => {
  const services = [
    {
      "title": "Engineering and Design Services",
      "description": "We provide expert engineering and design solutions in naval architecture, shipbuilding, offshore platforms, and structural analysis, using advanced tools like 3D modeling, virtual prototyping, and digital twin technology."
    },
    {
      "title": "Marine Robotics",
      "description": "Specializing in AI-driven marine robotics, we develop innovative systems for underwater exploration, inspection, and automation."
    },
    {
      "title": "Energy Solutions",
      "description": "We integrate renewable energy sources like wind and solar into maritime systems, optimizing efficiency and sustainability."
    },
    {
      "title": "Computational Fluid Dynamics (CFD)",
      "description": "Our CFD simulations ensure hydrodynamic efficiency, reducing drag and improving vessel performance."
    },
    {
      "title": "Shipbuilding and Scrapping",
      "description": "We deliver comprehensive shipbuilding services and eco-friendly ship scrapping, adhering to global sustainability standards."
    },
    {
      "title": "Maritime Transportation",
      "description": "Offering reliable maritime transport solutions, we ensure safe and efficient operations across global waterways."
    },
    {
      "title": "Performance Optimization",
      "description": "We enhance vessel speed, fuel efficiency, and operational reliability through cutting-edge optimization strategies."
    },
    {
      "title": "Advanced Visualization",
      "description": "Using 3D rendering and virtual reality, we create detailed product visualizations for better design evaluation and collaboration."
    }
  ]
  
  return (
    <div className="bg-gray-100 p-20 space-y-28 max-md:px-10 max-sm:px-5">
      <div className="  flex max-md:flex-col items-start max-sm:space-y-5 justify-between z-[10] mx-auto text-neutral-800  ">
        <h1 className="text-3xl max-sm:text-3xl font-medium">
          Accelerating Growth In <br className="max-sm:hidden"/> Marine Design
        </h1>
        <div className="space-y-3 w-1/2 max-md:w-full ">
        <p className=" ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, in
          officiis voluptate ex aspernatur illum voluptates molestiae tenetur
        </p>
        <Button>Learn More</Button>
        </div>
      </div>
      <div className="flex h-[80vh] max-md:space-y-8 max-sm:items-start max-sm:h-full space-x-10 max-md:space-x-0 max-md:flex-col">
        <Image
          src={'https://images.pexels.com/photos/296242/pexels-photo-296242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
          alt="Regalia Image Section"
          className="object-cover rounded w-2/3 max-md:w-full"
          width={500}
          height={500}
        />
        <p className=" text-start self-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magnam
          eligendi placeat libero explicabo accusantium enim accusamus, debitis
        </p>
      </div>

      <div className="flex flex-row-reverse h-[80vh] max-md:space-y-8 max-sm:items-start max-sm:h-full  max-md:space-x-0  gap-x-10 max-md:flex-col">
        <Image
          src={'https://images.pexels.com/photos/8439084/pexels-photo-8439084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
          alt="Regalia Image Section"
          className="object-cover rounded w-2/3 max-md:w-full"
          width={1500}
          height={1500}
        />
        <p className=" text-start self-start ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magnam
          eligendi placeat libero explicabo accusantium enim accusamus, debitis
        </p>
      </div>

      {/* services layout */}
      <div className="space-y-4">
       <div className="space-y-4">
       <h1 className='text-3xl max-sm:text-3xl font-medium'>What we offer</h1>
       <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, quam.</p>
       </div>
        <div className='grid grid-cols-3 max-md:grid-cols-1 '>
          {
            services.map((item,index)=>(<div key={index} className="space-y-2 border-r border-b p-5 max-md:first:pt-0 max-md:px-0 max-md:border-r-0  ">
                <span className='h-12 w-12 text-gray-500 flex items-center justify-center border rounded-full'>{index + 1}</span>
                <p className='text-lg font-normal text-gray-600'>{item.title}</p>
                <p className='text-sm text-black'>{item.description}</p>
            </div>))
          }
        </div>

      </div>
    </div>
  );
};

export default IntroSection;
