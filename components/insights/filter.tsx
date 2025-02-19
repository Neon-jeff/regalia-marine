import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SlidersHorizontal, Search } from "lucide-react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";


interface CategoryType{
  name: string;
  slug: string;
}
const fetchCategory = async (): Promise<Array<CategoryType>> => {
  const query = "*[_type == 'category']{name,'slug':slug.current}";
  const data = await client.fetch(query);
  return data;
};

const Filter = async () => {
  const filters = await fetchCategory();

  return (
    <div className="  justify-between w-1/5 max-md:w-full h-fit p-5 lg:bg-gray-50 rounded-lg sticky   max-md:flex z-10 max-md:bg-white max-md:gap-5 max-md:px-0 max-md:rounded-none max-md:top-0 top-10">
      <form action="" className="w-full relative">
        <input
          type="text"
          placeholder="Find an article"
          className="p-3 max-md:p-3.5 placeholder:text-sm active:outline-none focus:outline-none rounded-lg border-[1.2px] border-gray-400 w-full"
        />
        <button className="w-14 absolute -translate-x-10 top-1/2 -translate-y-1/2">
          <Search color="gray" strokeWidth={1.2} size={18} />
        </button>
      </form>
      <div className="flex flex-col mt-5 gap-3 max-md:hidden">
        <p className="font-medium text-base max-md:hidden">Select Category</p>
        <div className="py-1 text-sm max-md:hidden  min-w-[70px]   rounded-lg text-zinc-800">
          All
        </div>
        {filters.map((item, index) => (
          <Link
            href={`/insights/category/${item.slug}`}
            key={index}
            className="py-1 text-sm max-md:hidden  min-w-[70px]   rounded-lg text-zinc-800"
          >
            {item.name}
          </Link>
        ))}
      </div>
      {/* mobile popover */}
      <div className="lg:hidden w-14 rounded-lg place-content-center place-items-center bg-gray-100">
        <Popover>
          <PopoverTrigger className="w-full flex justify-center">
            <SlidersHorizontal size={20} />
          </PopoverTrigger>
          <PopoverContent className="">
            <div className="flex flex-col mt-5 gap-3 bg-white">
              <p className="font-medium text-base max-md:hidden">
                Select Category
              </p>
              <div className="py-1 text-sm max-md:hidden  min-w-[70px]   rounded-lg text-zinc-800">
                All
              </div>
              {filters.map((item, index) => (
                <Link
                  href={`/insights/category/${item.slug}`}
                  key={index}
                  className="py-2 text-sm   min-w-[70px] border-b border-gray-50  text-zinc-800"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Filter;
