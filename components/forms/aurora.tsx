"use client";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import FormInput from "./form-input";
import { AuroraFormSchema, auroraFormSchema } from "@/schemas/aurora-register";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { IconArrowRight, IconCheck } from "@tabler/icons-react";
import { usePaystackPayment } from "react-paystack";
import { toast } from "@/hooks/use-toast";
import { PaystackRef } from "./types";
import { useInsertToNotionDatabase } from "@/hooks/use-notion";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { Loader, Loader2, Loader2Icon } from "lucide-react";

const AuroraRegistrationForm = () => {
  const form = useForm<AuroraFormSchema>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      tertiary_institution: "",
      company: "",
      role: "",
      social_media: "",
    },
    resolver: zodResolver(auroraFormSchema),
  });
  const uploadMutation = useInsertToNotionDatabase();
  const payStackConfig = {
    reference: new Date().getTime().toString(),
    email: form.watch("email"),
    amount: 50000 * 100,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY || "",
  };
  const makePayment = usePaystackPayment(payStackConfig);
  function handlePaymentSuccess(data: AuroraFormSchema, ref: PaystackRef) {
    if (ref.status !== "success") {
      toast({
        title: "Payment Failed",
        description: "Your payment failed, kindly try again",
      });
      return;
    }
    setIsOpen(true);
    uploadMutation.mutate({ ...data, paymentRef: ref.reference },
      {
        onSuccess: () => {
          form.reset();
        }
      }
    );
  }
  function handleSubmit(data: AuroraFormSchema) {
    makePayment({
      onSuccess: (ref: PaystackRef) => handlePaymentSuccess(data, ref),
      onClose: () =>
        toast({
          title: "Payment cancelled",
          description: "Your payment was not completed",
        }),
    });
  }
  const [open, setIsOpen] = React.useState(false);
  return (
    <form
      autoComplete="off"
      className="lg:w-1/2 w-full  space-y-7 mx-auto lg:px-10"
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <div className="flex gap-5 w-full max-md:flex-col">
        <Controller
          name="first_name"
          control={form.control}
          render={({ field }) => (
            <FormInput
              {...field}
              label="First Name"
              placeholder="Enter your first name"
              message={form.formState.errors.first_name?.message}
            />
          )}
        />
        <Controller
          name="last_name"
          control={form.control}
          render={({ field }) => (
            <FormInput
              {...field}
              label="Last Name"
              placeholder="Enter your last name"
              message={form.formState.errors.last_name?.message}
            />
          )}
        />
      </div>
      <Controller
        name="email"
        control={form.control}
        render={({ field }) => (
          <FormInput
            {...field}
            type="email"
            label="Email Address"
            placeholder="Enter your email address"
            message={form.formState.errors.email?.message}
          />
        )}
      />
      <Controller
        name="tertiary_institution"
        control={form.control}
        render={({ field }) => (
          <FormInput
            {...field}
            label="Tertiary Institution"
            placeholder="Enter your tertiary institution"
            message={form.formState.errors.tertiary_institution?.message}
          />
        )}
      />
      <div className="flex gap-5  w-full max-md:flex-col">
        <Controller
          name="company"
          control={form.control}
          render={({ field }) => (
            <FormInput
              {...field}
              label="Company/Firm"
              placeholder="Enter NIL if not applicable"
              message={form.formState.errors.company?.message}
            />
          )}
        />
        <Controller
          name="role"
          control={form.control}
          render={({ field }) => (
            <div className="w-full">
              <label htmlFor="role" className="pb-1 block">
                Role
              </label>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="h-12 border-none bg-zinc-900">
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Student">Student</SelectItem>
                  <SelectItem value="Professional">Professional</SelectItem>
                </SelectContent>
                <p className="text-gray-500 text-xs mt-2">
                  {form.formState.errors.role?.message}
                </p>
              </Select>
            </div>
          )}
        />
      </div>
      <Controller
        name="social_media"
        control={form.control}
        render={({ field }) => (
          <FormInput
            {...field}
            label="Social Media Link"
            placeholder="Enter your social media handle"
            message={form.formState.errors.social_media?.message}
            type="url"
          />
        )}
      />
      <div className="flex gap-5">
        <div>
          <p className="font-[family-name:var(--font-michroma)] text-white">
            Gain Access
          </p>
          <p>
            To have access to this workshop, you pay a fee of $32 or NGN50,000
          </p>
        </div>
        <Button type="submit" className="bg-aurora-main text-black font-medium">
          Pay N50,000 Now <IconArrowRight />
        </Button>
      </div>
      <AlertDialog open={open} onOpenChange={setIsOpen}>
        <AlertDialogTitle>{}</AlertDialogTitle>
        <AlertDialogContent className="bg-white rounded-xl flex flex-col items-center justify-center p-5 min-h-56">
          {uploadMutation.isPending && (
            <div className="flex flex-col items-center">
              <Loader2 className="animate-spin text-black" />
              <p className="text-gray-500 text-xs mt-2">
                Uploading your registration...
              </p>
            </div>
          )}
          {uploadMutation.isSuccess && (
            <div className="space-y-4 text-center flex flex-col items-center justify-center">
              <div className="p-4 border-2 mb-2 border-green-500 rounded-full">
                <IconCheck className="text-green-500" />
              </div>
              <h1 className="text-2xl text-center font-semibold text-black font-[family-name:var(--font-michroma)]">
                Your Registration was Successful!
              </h1>
              <p className="text-gray-500">
                Thank you for registering for the Aurora Robotics Core Workshop
                1.0. You will receive an email with further details and access
                to the workshop resources.
              </p>
            </div>
          )}
          {uploadMutation.isSuccess && (
            <AlertDialogCancel className="bg-aurora-main w-full mt-4 text-black font-medium border-none hover:bg-black hover:text-white">
              <p>Ok, Got it</p>
            </AlertDialogCancel>
          )}
        </AlertDialogContent>
      </AlertDialog>
    </form>
  );
};

export default AuroraRegistrationForm;
