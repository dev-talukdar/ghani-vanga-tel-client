"use server";
import { FormValues } from "@/app/(with-layout)/login/page";

export const userLogin = async (data: FormValues) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_SIDE_DATA}/api/users/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );
  const userInfo = await res.json();

  return userInfo;
};
