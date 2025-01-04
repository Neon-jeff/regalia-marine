import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import training from "@/public/images/details.jpg";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const Trainings = () => {
  return (
    <div className="p-10 space-y-10 max-sm:px-5  font-light " id="trainings">
      <h1 className="text-3xl font-normal  p-5   mx-auto text-black w-fit text-center">
        Training Programmes <br /> to accelerate your career
      </h1>

      {/* training cards */}
      <div className="grid xl:grid-cols-3 gap-10 w-full">
        <div className="bg-white flex flex-col-reverse   rounded-xl ">
          <div className="space-y-2 p-5">
            <h1 className="text-xl text-slate-900 font-medium  ">
              Regalia X Tangier Workshop
            </h1>
            <p>
            Gain practical experience in problem solving in mathematical modelling, engineering, robotics, physics, and financial modeling.
            </p>
            {/* <Link href={"/training/regalia-x-tangier-workshop"} className="block text-ultramarine-700 underline ">
              Learn More
            </Link> */}

            <div className="flex flex-col gap-0.5">
              <span className="font-medium">Application Closes:</span>
              <span>January 30, 2025</span>
            </div>

            <Link
              href={
                "/training/regalia-x-tangier-workshop"
              }
              target="_blank"
              className="block w-full"
            >
              <Button className="">
                Register Now <MoveRight />
              </Button>
            </Link>
          </div>
          <Image
            src={training}
            alt="training image banner cohort one"
            width={500}
            height={500}
            className="w-full object-cover h-56 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Trainings;
