import Image from "next/image";
import React from "react";

const Seminars = () => {
  return (
    <div className="pl-20 max-sm:px-5 flex max-md:flex-col gap-10 h-screen">
      <div className="pt-20">
        <p className="text-sm text-gray-600 mb-2">Professional Developements</p>
        <h1 className="text-4xl font-medium text-ultramarine-900 max-md:text-3xl">Workshops and Seminars</h1>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi unde sapiente tempora earum sunt ab aspernatur, adipisci quam sequi dolore ea non quo consequuntur commodi nesciunt ut ducimus ipsam doloribus aliquam odit culpa quaerat. Porro dicta nihil temporibus odit cum?
        </p>
      </div>
      <Image src={'https://images.pexels.com/photos/7693107/pexels-photo-7693107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="Regalia marine workshop and seminars" width={500} height={500} className="object-cover w-1/2 max-sm:w-full max-sm:rounded"/>
    </div>
  );
};

export default Seminars;
