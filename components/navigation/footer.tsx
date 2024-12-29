import React from "react";
import Link from "next/link";
import { LogoWhite } from "../logo";
import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";
const Footer = () => {
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
      route: "/insights",
    },
    {
      name: "About Us",
      route: "/",
    },
  ];

  const socials = [
    {
      icon: <Linkedin size={20}/>,
      name: "LinkedIn",
    },
    {
      icon: <Twitter size={20}/>,
      name: "Twitter",
    },
    {
      icon: <Instagram size={20}/>,
      name: "Instagram",
    },
    {
      icon: <Mail size={20}/>,
      name: "Email Us",
    },
  ];
  return (
    <footer className="min-h-[30vh] bg-blue-950 max-md:text-xs max-md:flex-col flex justify-between p-5 lg:gap-20 gap-10 lg:p-20 text-white mt-0">
      <div className="space-y-5 lg:w-1/2 max-md:space-y-2 ">
        <div>
        <LogoWhite/>
          <p className="lg:text-base text-sm  font-medium"> Regalia Marine</p>
        </div>
        {/* <p>
          brief company description <br /> Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Harum excepturi, dignissimos pariatur
          consequuntur distinctio ullam error quasi provident maxime debitis?
        </p> */}
      </div>
      <div className="grid grid-cols-3 max-md:grid-cols-2 lg:w-2/3 lg:gap-x-10 gap-5 gap-y-10 ">
        {/* company */}

        {/* site links */}

        <div className="space-y-5 max-md:space-y-2">
          <p className="lg:text-base text-sm  font-medium">Navigation</p>
          <ul className="flex flex-col gap-5">
            {nav_items.map((item, index) => (
              <li key={index} className="lg:text-sm ">
                <Link href={item.route}>
                  <span className="hover:text-blue-400 transition duration-300 ease-in">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* social links */}
        <div className="space-y-5 max-md:space-y-2">
          <p className="lg:text-base text-sm  font-medium">Contact Us </p>
          <ul className="flex flex-col gap-5">
            <ul className="flex flex-col gap-5">
              {socials.map((item, index) => (
                <li key={index} className="lg:text-sm ">
                  <Link href="#">
                    <span className="hover:text-blue-400 transition duration-300 ease-in items-center flex w-fit gap-2 ">
                      {item.icon}
                      {item.name}
                      
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </ul>
        </div>
        {/* terms and conditions */}
        <div className="space-y-5 max-md:space-y-2">
          <p className="lg:text-base text-sm  font-medium">
            Terms and conditions{" "}
          </p>
          <ul className="flex flex-col gap-5">
            <li className="lg:text-sm ">
              <Link href="/">
                <span className="hover:text-blue-400 transition duration-300 ease-in">
                  Privacy Policy
                </span>
              </Link>
            </li>

            <li className="lg:text-sm ">
              <Link href="/">
                <span className="hover:text-blue-400 transition duration-300 ease-in">
                  Legal Statements
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
