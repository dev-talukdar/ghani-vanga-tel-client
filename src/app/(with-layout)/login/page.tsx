"use client";
 
import { TUser, setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks"; 
import { useRouter } from "next/navigation";
import React from "react";
import {  SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { IoPerson } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { userLogin } from "@/utils/actions/userLogin"; 
import { decodedToken } from "@/utils/jwt";
import { setToLocalStorage } from "@/utils/localStorage/localStorage";

export type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => { 
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormValues>();
  const dispatch = useAppDispatch();

  // const onSubmit = async (data: FieldValues) => {
  //   const toastId = toast.loading('Logging in...');

  //   try {
  //     const userInfo = {
  //       email: data.email,
  //       password: data.password,
  //     };
  //     const res = await login(userInfo).unwrap();
  //     if (res?.error) {
  //       toast.error(`Something went wrong`, {
  //         id: toastId,
  //         duration: 2000,
  //       });
  //     } else {
  //       const user = verifyToken(res.data.accessToken) as TUser;
  //        console.log(user)
  //        dispatch(setUser({ user, token: res.data.accessToken }));
  //        toast.success('Login successful!', {
  //          id: toastId,
  //          duration: 2000,
  //        });
  //        router.push('/dashboard/query-management/message');
  //     }
  //   } catch (error) {
  //     toast.error('Something went wrong', { id: toastId, duration: 2000 });
  //   }
  // };

  // const onSubmit: SubmitHandler<FormValues> = async (values) => {
  //   const toastId = toast.loading("Logging in...");

  //   try {
  //     const res = await userLogin(values);
  //     if (res?.error) {
  //       toast.error(`Something Went Wrong`, {
  //         id: toastId,
  //         duration: 2000,
  //       });
  //     } else {
  //       const user = decodedToken(res.data.accessToken) as TUser;
  //       console.log(user);
  //       dispatch(setUser({ user, token: res.data.accessToken }));
  //       toast.success("login Successful", {
  //         id: toastId,
  //         duration: 2000,
  //       });
  //       router.push("/dashboard/query-management/message");
  //     }
  //   } catch (error) {
  //     toast.error("something Went wrong");
  //   }
  // };

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    const toastId = toast.loading("Logging in...");
  
    try {
      const res = await userLogin(values);
      if (res?.error) {
        toast.error("Something Went Wrong", {
          id: toastId,
          duration: 2000,
        });
      } else {
        const user = decodedToken(res.data.accessToken) as TUser;
        console.log(user);
        
        // Dispatch user info and token to Redux
        dispatch(setUser({ user, token: res.data.accessToken }));
        
        // Save token to local storage
        setToLocalStorage('accessToken', res.data.accessToken);
        
        toast.success("Login Successful", {
          id: toastId,
          duration: 2000,
        });
        router.push("/dashboard/query-management/message");
      }
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };

  return (
    <div className="bg-mobileMenu">
      <div className="w-full max-w-[1200px] mx-auto  px-3 lg:px-0 h-screen">
        <div className="w-full mx-auto lg:w-[500px] drop-shadow-lg ">
          <form onSubmit={handleSubmit(onSubmit)} className="p-12 md:p-24  ">
            <div className="flex items-center text-lg mb-6 md:mb-8 mt-40">
              <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                <IoPerson className="text-2xl" />
              </svg>
              <input
                {...register("email")}
                id="email"
                type="text"
                placeholder="Username"
                className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
              />
            </div>
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                <RiLockPasswordFill className="text-2xl font-bold" />
              </svg>
              <input
                {...register("password")}
                type="password"
                id="pass"
                placeholder="........"
                className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-b from-teal-700 to-teal-900 font-medium p-2 md:p-4 text-white uppercase w-full"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
