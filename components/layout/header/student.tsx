import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

const Student = () => {
  const modules = [
    "Ship Design",
    "Sustainable Propulsion Systems",
    "Naval Architecture",
    "Ship Structure and Analysis",
    "Laws and Regulations in Maritime",
    "Computer-Aided Design(CAD)",
    "Introduction to Marine Robotics",
  ];
  return (
    <div className="min-h-screen flex bg-ultramarine-900 font-light md:space-x-10  max-md:flex-col w-full text-sm text-white pl-20 max-md:p-2 max-md:pb-20 max-md:space-y-10">
      <div className="w-1/2 max-md:w-full pt-20 xl:pb-20">
        <span className="text-xs mb-3 block text-gray-300">
          Educating the future
        </span>
        <h1 className="text-5xl max-md:text-3xl">
          Engineering Centered <br className="max-sm:hidden" /> Training for
          Students
        </h1>
        <p className="mt-5 text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          officiis corrupti accusamus sint, doloribus totam temporibus veritatis
          illum quaerat neque.
        </p>

        <div className="flex justify-between mt-10 divide-x max-md:flex-col max-md:divide-x-0 max-md:space-y-4">
          <p className="text-lg">Our training modules includes:</p>
          <div className="grid grid-cols-2 gap-5 pl-10 max-md:pl-0 ">
            {modules.map((item, index) => (
              <div key={index} className="text-gray-300 space-y-2">
                {/* <span className="h-6 w-6 flex justify-center items-center border rounded-full text-xs">
                  {index + 1}
                </span>{" "} */}
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <Button className="bg-white text-black w-full mt-16 hover:bg-black hover:text-white transition duration-100 ease-in ">
          Register for trainings
        </Button>
      </div>
      <Image
        src={
          "https://images.pexels.com/photos/9242834/pexels-photo-9242834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=850&dpr=1"
        }
        alt="Regalia Image Section"
        className="object-cover rounded w-1/2 max-md:w-full"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Student;
