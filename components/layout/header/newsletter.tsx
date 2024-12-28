"use client";

import React, { useEffect } from "react";
import { CircleCheckBig } from "lucide-react";
import { Button } from "@/components/ui//button";
import { useToast } from "@/hooks/use-toast";
import { AddUserToNewsLetter } from "@/utils/actions/saveuser";
import { useActionState } from "react";
import { Loader2 } from "lucide-react";

const Newsletter = () => {
  const [state, formAction, isPending] = useActionState(AddUserToNewsLetter, {
    status:""
  });
  const { toast } = useToast();

  useEffect(() => {
    if (state.status == "success") {
      toast({
        variant: "success",
        description: "You have been successfully addded to our newsletter",
      });
    }
    if (state.status == "error") {
      toast({
        variant: "destructive",
        description: "Something went wrong",
      });
    }
    if (state.status == "exists") {
        toast({
          variant: "warning",
          description: "You are already subscribed to our newsletter",
        });
      }
  }, [state]);
  return (
    <div className="lg:p-16 p-5 place-items-center rounded-lg space-y-5 bg-white w-11/12  lg:w-2/5 mx-auto my-20">
      <h1 className="lg:text-3xl text-2xl text-center font-semibold text-black">
        Subscribe to our newsletter
      </h1>
      <p>Get early access and notifications on : </p>
      <div className="grid grid-cols-2 gap-4 gap-x-4">
        <p className="p-2 flex gap-1  text-center font-medium text-xs bg-orange-100 text-orange-600 rounded-full ">
          <CircleCheckBig size={15} />
          Blog articles
        </p>
        <p className="p-2 flex gap-1  text-center font-medium text-xs bg-green-100 text-green-600 rounded-full ">
          <CircleCheckBig size={15} />
          Scholarships
        </p>
        <p className="p-2 flex gap-1  text-center font-medium text-xs bg-cyan-100 text-cyan-600 rounded-full ">
          <CircleCheckBig size={15} />
          Trainings
        </p>
        <p className="p-2 flex gap-1  text-center font-medium text-xs bg-yellow-100 text-yellow-600 rounded-full ">
          <CircleCheckBig size={15} />
          Internships
        </p>
      </div>
      <form
        action={formAction}
        className="font-medium text-zinc-700 w-full space-y-5"
      >
        <div className=" flex flex-col  gap-2   rounded-md   ">
          <span>Your Name</span>
          <input
            type="text"
            name="name"
            className="ring-zinc-200 focus:ring-zinc-500 ring-1 focus:outline-none placeholder:text-sm placeholder:text-zinc-400 p-3 rounded-md"
            placeholder="Mike Conley"
            required
          />
        </div>
        <div className=" flex flex-col  gap-2   rounded-md   ">
          <span>Your Email</span>
          <input
            type="email"
            name="email"
            className="ring-zinc-200 focus:ring-zinc-500 ring-1 focus:outline-none placeholder:text-sm placeholder:text-zinc-400 p-3 rounded-md"
            placeholder="you@email.com"
            required
          />
        </div>
        <Button className="text-white bg-black rounded-lg" disabled={isPending}>
          {isPending && <Loader2 className="animate-spin" />}
          {isPending ? "Subscribing" : "Subscribe"}
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;
