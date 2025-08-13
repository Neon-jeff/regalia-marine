import { AuroraRegistrationForm } from "@/components/forms";
import { AuroraLogo } from "@/components/logo";
import PartnerAurora from "@/components/logo/partners";
import Paystack from "@/components/logo/paystack";
import { Button } from "@/components/ui/button";
import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const AuroraTrainingPage = () => {
  return (
    <div className="min-h-screen max-md:px-3 pb-20 text-gray-400 bg-black pt-5 space-y-10">
      <AuroraNav />
      <AuroraHero/>
      <div className="flex w-fit mx-auto gap-5">
        <Link href={'https://bakel-bakel.github.io/robotics-core-workshop-oct2025/'} className="bg-aurora-main px-6 py-4 flex items-center justify-center gap-2 rounded-full text-black">View Curriculum <IconArrowUpRight/></Link>
         <Link href = {'https://www.upwork.com/freelancers/bakel'} className="bg-transparent border px-6 py-4 border-white flex items-center justify-center gap-2 rounded-full">Meet the tutor <IconArrowRight/></Link>
      </div>
      <AuroraRegistrationForm/>
      <div className="flex mx-auto gap-5 justify-center mt-10">
        <PartnerAurora/>
        <Paystack/>
      </div>
    </div>
  );
};

const AuroraNav = () => {
  return (
    <div className="bg-zinc-900/80  p-2 mx-auto rounded-full flex justify-center lg:w-4/5">
      <AuroraLogo />
    </div>
  );
};

const AuroraHero = () => {
  return (
    <div className="lg:w-1/2 mx-auto text-center flex flex-col items-center space-y-8">
      <h1 className="font-[family-name:var(--font-michroma)] text-white lg:leading-[75px] text-4xl lg:text-6xl">
        Register for the next cohort of Robotics Core Workshop 1.0
      </h1>
      <p className="lg:text-xl text-sm lg:w-2/3">Registering for this cohort gives you lifetime access to all resources released during this cohort</p>
    </div>
  );
};

export default AuroraTrainingPage;
