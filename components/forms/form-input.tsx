"use client";
import {IconLink, IconMail, IconPencil } from "@tabler/icons-react";
import React from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  message?: string;
}
const FormInput = ({
  label,
  onChange,
  type = "text",
  className,
  message,
  ...props
}: FormInputProps) => {
  return (

        <div className="border h-full border-black rounded-lg relative  has-[:focus]:border-aurora-main w-full flex flex-col-reverse gap-1 has-[:focus]:gap-0">
           
      <input
        type={type}
        onChange={onChange}
        className={`peer text-white  bg-zinc-900  focus:bg-black focus:outline-none transition rounded-lg placeholder:text-zinc-600 placeholder:text-xs p-5 order-2 focus:py-0 duration-200 text-base h-12 ease-in-out`}
        {...props}
        autoComplete='off'
      />
      <label className="peer-focus:translate-x-3 text-white font-semibold block peer-focus:-translate-y-3 bg-black order-3 peer-focus:px-4 w-fit transition-all duration-200 ease-in-out">
        {label}
      </label>
      <div className="absolute right-3 top-10 ">
        {type == "text" && (
          <IconPencil className="text-gray-300" strokeWidth={1.2} />
        )}
           {type == "email" && (
          <IconMail className="text-gray-300" strokeWidth={1.2} />
        )}
        {
          type ==='url' && (
            <div className="flex items-center gap-1">
              <IconLink className="text-gray-300" strokeWidth={1.2} />
            </div>
          )
        }
      </div>
      {message && <p className="text-gray-500 order-1 p-2 text-xs">{message}</p>}
    </div>

  );
};

export default FormInput;
