import { Button } from "@/components/ui/button";
import { MoveRight, NotebookPen } from "lucide-react";
import React from "react";
import image1 from "@/public/images/regalia marine logo.jpg";
import image2 from "@/public/images/maple2.jpg";
import image3 from "@/public/images/maple3.jpg";
import image4 from "@/public/images/tam.jpg";
import Image from "next/image";
import { LogoWhite } from "@/components/logo";
import Link from "next/link";

const RegaliaAndTangierWorkshop = () => {
  const maple_courses = [
    {
      title:
        "Advanced computational fluid dynamics: Using Maple for Precision Modelling and Analysis",
      description:
        "Participants will explore how to model and analyze fluid flow, turbulence, and heat transfer with precision",
    },
    {
      title: "Numerical Implementation of ODEs using MAPLE",
      description:
        "This course covers the application of MAPLE’s symbolic manipulation and numerical calculation capabilities to implement Ordinary Differential Equations (ODEs)",
    },
    {
      title: "Differential Equations",
      description:
        "This session will guide participants through solving both linear and nonlinear equations, enabling them to analyze problems in fields such as wave mechanics, thermal dynamics, and structural analysis",
    },
    {
      title: "Robotics",
      description:
        "Engineers and researchers will gain insights into optimizing robotic functionality and performance",
    },
    {
      title: "Temperature Control of HVAC in Building Design",
      description:
        "This course involves modelling the thermal dynamics of buildings accounting for heat transfer, internal heat sources and ventilation ",
    },
    {
      title:
        "Solving Ordinary & Partial Differential Equations with Machine Learning using Maple 2024",
      description:
        "This session introduces a novel approach to solving differential equations by integrating machine learning techniques with MAPLE’s in-built tools and workflow",
    },
    {
      title: "Overview of Maplesim Software",
      description:
        "Participants will gain an understanding of system-level modeling and simulation using MapleSim. ",
    },
  ];
  return (
    <div className="pt-36 pb-48  space-y-20 h-full  bg-white text-slate-700 text-base">
      <div className="lg:px-20 px-3 gap-10 max-md:flex-col flex">
        <div className="space-y-5  lg:w-1/2 ">
          <p className="  w-fit text-blue-800 rounded-full ">
            Regalia Marine in collaboration <br className="lg:hidden" /> with
            Tangier Int'l
          </p>
          <h1 className="lg:text-6xl text-4xl font-medium text-ultramarine-900">
            Regalia and <br /> Tangier Workshop
          </h1>
          <p>
            This workshops is covers essentials topics that addresses real-world
            challenges using Marine robotics and Maple Soft technologies
          </p>
          <Link
            className="block"
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSe1CW2-pp8UTnDaVPBC6Q-_gPE4RcPGWhBMHlrRR4GOB-_fqw/viewform?usp=dialog"
            }
            target="_blank"
          >
            <Button className="w-fit">
              Register Now <MoveRight />
            </Button>
          </Link>
        </div>
      </div>

      <div className=" flex max-md:grid max-md:grid-cols-2 justify-center bg-gray-100 gap-5 lg:gap-20  rounded-lg  lg:p-10 p-5 text-black ">
        <div className="flex flex-col gap-1">
          <p className="lg:text-lg text-base font-medium ">
            Application Deadline
          </p>
          <p>January 30th, 2025</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="lg:text-lg text-base font-medium ">Progamme Duration</p>
          <p>Feb 10th - Feb 14th</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="lg:text-lg text-base font-medium ">Time</p>
          <p>8:30am - 4pm Daily</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="lg:text-lg text-base font-medium ">Location</p>
          <p>Zoom Meeting</p>
        </div>
      </div>

      <div className="lg:px-20 max-md:px-5 space-y-3">
        <h1 className="text-3xl font-medium text-ultramarine-950">
          "What you'll be learning
        </h1>
        {/* <p>
          We will cover the following topics in marine robotics and Maple Soft
          technologies
        </p> */}
        <Button className="w-fit mt-5 p-3 bg-white border border-ultramarine-700 text-ultramarine-700">
          Download Curriculum
        </Button>
        <ul className=" text-black  lg:w-11/12  py-5 grid lg:grid-cols-3 grid-cols-1  gap-8  rounded-md ">
          {maple_courses.map((item, index) => (
            <li
              className=" min-h-10 grid grid-cols-subgrid  rounded-md  flex-col gap-2"
              key={index}
            >
              <NotebookPen size={20} color="gray" />
              <span className="text-base font-normal">{item.title}</span>
              <span className="text-sm">{item.description}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:px-20 px-5 space-y-3">
        <h1 className="text-3xl font-medium text-ultramarine-950">
          "Who should participate in this training
        </h1>
        <p>This programme is open to :</p>
        <ul className=" text-black    space-y-5   text-base lg:w-4/5 rounded-md ">
          <li>1. Science, Engineering and finance Students</li>
          <li>2. Graduates and post graduates</li>
          <li>3. Professionals and researcher.</li>
        </ul>
        <Link
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSe1CW2-pp8UTnDaVPBC6Q-_gPE4RcPGWhBMHlrRR4GOB-_fqw/viewform?usp=dialog"
          }
          target="_blank"
          className="block"
        >
          <Button className="w-fit">
            Register Now <MoveRight />
          </Button>
        </Link>
      </div>

      <div className="lg:p-20 space-y-3 p-5 bg-black">
        <h1 className="text-3xl font-medium text-white">"About Maple Soft</h1>
        <p className="lg:w-2/3 text-sm text-gray-200">
          Maplesoft is a Canadian company and a world leader in developing
          advanced computational tools. Its products are widely used in
          academia, research, and industry globally for solving complex problems
          in science, mathematics, and engineering.
        </p>
      </div>

      {/* logos */}

      <div className="flex max-md:grid max-md:grid-cols-2 max-md:px-5 justify-center gap-10 items-center">
        <Image
          src={image1}
          alt="Maplesoft logo regalia training"
          className="lg:w-1/5 h-20 object-contain"
        />
        <Image
          src={image2}
          alt="Maplesoft logo regalia training"
          className="lg:w-1/5 h-20 object-contain"
        />
        <Image
          src={image3}
          alt="Maplesoft logo regalia training"
          className="lg:w-1/5 h-20 object-contain"
        />
        <Image
          src={image4}
          alt="Maplesoft logo regalia training"
          className="lg:w-1/5 h-20 object-contain"
        />
      </div>
    </div>
  );
};

export default RegaliaAndTangierWorkshop;
