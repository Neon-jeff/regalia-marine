"use client";

import Link from "next/link";
import React, { useState } from "react";
import {  HambergerMenu } from "iconsax-react";
import {
  motion,
  AnimatePresence,
} from "motion/react";
import { X } from "lucide-react";
// import Image from "next/image";
// import logo from '@/public/images/regalia-logo.svg'

const Nav = () => {
  const nav_items = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Services",
      route: "/",
    },
    {
      name: "Training",
      route: "/training",
    },
    {
      name: "Insights",
      route: "/",
    },
    {
      name: "About Us",
      route: "/",
    },
  ];
  const [open, setOpen] = useState(false);

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   if (latest > window.screen.height - 200) {
  //     setPastHeight(true);
  //   } else {
  //     setPastHeight(false);
  //   }
  // });

  return (
    <nav
      className="flex justify-center max-md:justify-between absolute py-6 max-sm:py-5 px-10 max-sm:px-5   text-sm text-black bg-white  font-light w-full  rounded-sm left-1/2 -translate-x-1/2 z-10"
 
    >
      <Link href="/" className="absolute left-20 max-md:static">
        {/* <Image src={logo} alt="regalia marine logo" width={100} height={100}/> */}
        R M I
      </Link>
      {/* main nav items */}
      <ul className="flex gap-10 max-sm:hidden">
      {nav_items.map((item, index) => (
              <li
                key={index}
                className="text-sm text-black"
              >
                <Link href={item.route}>
                  <span className="">{item.name}</span>
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

      <HambergerMenu
        variant="Outline"
        size={30}
          color="black"
        className=" right-5 lg:hidden"
        onClick={() => {
          setOpen(true);
        }}
      />
      <AnimatePresence>
        {open && (
          <motion.ul
            className="fixed left-0 lg:hidden right-0 top-0 bottom-0 text-white h-screen  bg-black  space-y-8 font-light p-10 z-[5]"
            key="mobile-nav"
            initial={{ y: -1000 }}
            animate={{
              y: 0,
              transition: {
                duration: 0.2,
                type: "tween",
              },
            }}
            exit={{ y: -1000 }}
          >
            <X
              size={30}
              color="white"
              className="place-self-end"
              onClick={() => {
                setOpen(false);
              }}
            />
            {nav_items.map((item, index) => (
              <motion.li
                key={index}
                className="text-3xl text-gray-300"
                initial={{opacity:0}}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.1 * (index + 1) },
                }}
              >
                <Link href={item.route} onClick={()=>{setOpen(false)}}>
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
