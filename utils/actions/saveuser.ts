"use server";

import { client } from "@/sanity/lib/client";

export async function AddUserToNewsLetter(state: {status:string}, formdata: FormData) {
  console.log(formdata.get("name"));
  const new_user = {
    _type: "users",
    name: formdata.get("name"),
    email: formdata.get("email"),
  };

  try {
    client
      .create(new_user)
      .then((res) => {
        console.log(res);
        //   if (res.statusCode > 204) {

        //   }
      })
      .catch((error) => {
        console.log("an error occured");
        throw new Error(error)
      });
    return { status: "success" };
  } 
  catch (error) {
    console.error("Something went wrong", error);
    return { status: "error" };
  }
}
