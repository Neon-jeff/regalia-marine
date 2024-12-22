import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SlidersHorizontal,Search  } from 'lucide-react';

const Filter = () => {
  const filters = [
    "Most Recent",
    "All",
    "Engineering Drawing",
    "Hydraulics",
    "CAD",
  ];
  return (
    <div className="  justify-between w-1/5 max-md:w-full h-fit lg:p-5 lg:bg-gray-50 rounded-lg sticky max-md:static max-md:flex max-md:gap-5   top-10">
      <form action="" className='w-full relative'>
        <input
          type="text"
          placeholder="Find an article"
          className="p-3 max-md:p-3.5 active:outline-none focus:outline-none rounded-lg border border-gray-200 w-full"
        />
        <button className='w-14 absolute -translate-x-10 top-1/2 -translate-y-1/2'>
        <Search color="#b2aeae"/>
        </button>
      </form>
      <div className="flex flex-col mt-5 gap-3 max-md:hidden">
        <p className="font-medium text-base max-md:hidden">Select Category</p>
        {filters.map((item, index) => (
          <div
            key={index}
            className="py-1 text-sm max-md:hidden  min-w-[70px]   rounded-lg text-zinc-800"
          >
            {item}
          </div>
        ))}
      </div>
      {/* mobile popover */}
        <div className="lg:hidden w-14 rounded-lg place-content-center place-items-center bg-gray-100">
        <Popover >
        <PopoverTrigger className="w-full flex justify-center"><SlidersHorizontal size={20}/></PopoverTrigger>
        <PopoverContent className=''>
        <div className="flex flex-col mt-5 gap-3 bg-white">
        <p className="font-medium text-base max-md:hidden">Select Category</p>
        {filters.map((item, index) => (
          <div
            key={index}
            className="py-2 text-sm   min-w-[70px] border-b border-gray-50  text-zinc-800"
          >
            {item}
          </div>
        ))}
      </div>
        </PopoverContent>
      </Popover>
        </div>
    </div>
  );
};

export default Filter;