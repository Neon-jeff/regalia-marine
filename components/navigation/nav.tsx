"use client";

import Link from "next/link";
import React, { useState } from "react";
import { CloseCircle, HambergerMenu } from "iconsax-react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
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
      name: "Consultation",
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
  const { scrollY } = useScroll();

  const [pastHeight, setPastHeight] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > window.screen.height - 200) {
      setPastHeight(true);
    } else {
      setPastHeight(false);
    }
  });

  return (
    <motion.div
      className="flex justify-center max-md:justify-between fixed py-10 max-sm:py-5 px-10 max-sm:px-5   text-sm text-black backdrop-filter backdrop-blur-sm bg-opacity-10 font-light w-full  rounded-sm left-1/2 -translate-x-1/2 z-10"
      animate={{
        backgroundColor: pastHeight ? "rgba(19,19,41,0.7)" : "transparent",
        color: pastHeight ? "white" : "black",
      }}
      transition={{ duration: 500, ease: "easeIn", type: "spring" }}
    >
      <Link href="/" className="absolute left-20 max-md:static">
        {/* <Image src={logo} alt="regalia marine logo" width={100} height={100}/> */}
        <p>R M I</p>
      </Link>
      {/* main nav items */}
      <ul className="flex gap-10 max-sm:hidden"></ul>
      <ul>
        {/* <Button>
            Join Waitlist
        </Button> */}
      </ul>
      {/* Mobile Nav */}

      <HambergerMenu
        variant="Outline"
        size={30}
        color={pastHeight ? "white" : "black"}
        className=" right-5 lg:hidden"
        onClick={() => {
          console.log("here");

          setOpen(true);
        }}
      />
      <AnimatePresence>
        {open && (
          <motion.ul
            className="fixed left-0 md:hidden right-0 top-0 bottom-0 text-white h-screen  bg-black  space-y-8 font-light p-10"
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
                <Link href={item.route}>
                  <span className="">{item.name}</span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Nav;
