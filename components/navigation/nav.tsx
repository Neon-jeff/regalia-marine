import Link from "next/link";
import React from "react";
import { HambergerMenu } from "iconsax-react";

const Nav = () => {
  const nav_items = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Mission",
      route: "/",
    },
    {
      name: "Services",
      route: "/",
    },
    {
      name: "Training",
      route: "/",
    },
    {
      name: "News",
      route: "/",
    },
    {
      name: "Contact Us",
      route: "/",
    },
  ];
  return (
    <nav className="flex justify-center max-md:justify-between fixed py-10 max-sm:py-5 px-10 max-sm:px-5 bg-gray-100 text-white text-sm backdrop-filter backdrop-blur-sm bg-opacity-0 font-light w-full  rounded-sm left-1/2 -translate-x-1/2 z-10">
      <Link href="/" className="absolute left-20 max-md:static">
        <span className="font-bold tracking-wide">RMI</span>
      </Link>
      {/* main nav items */}
      <ul className="flex gap-10 max-sm:hidden">
        {nav_items.map((item, index) => (
          <li key={index}>
            <Link href={item.route}>
              <span className=''>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <ul> 
        {/* <Button>
            Join Waitlist
        </Button> */}
      </ul>
      {/* Mobile Nav */}

      <HambergerMenu variant="Outline" size={30} color="white" className=" right-5 lg:hidden" />
      {/* <ul></ul> */}
    </nav>
  );
};

export default Nav;
