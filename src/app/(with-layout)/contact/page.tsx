"use client";

import { useCreateQueryMutation } from "@/redux/features/query/queryApi";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { toast } from "sonner";

const ContactPage = () => {
  const [sendQuery] = useCreateQueryMutation();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Sending message...");
    const phoneNo = Number(data.phoneNo);
    const queryData = {
      ...data,
      phoneNo,
    };

    try {
      const res: any = await sendQuery(queryData);
      console.log(res);
      if (res?.error) {
        toast.error(`Something went wrong`, {
          id: toastId,
          duration: 2000,
        });
      } else {
        toast.success("Message send successful!", {
          id: toastId,
          duration: 2000,
        });
        reset();
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto my-10 px-3 lg:px-0">
        <div className="p-10 shadow-md">
          <div className="text-center py-5 space-y-3">
            <h1 className="text-4xl ">
              Contact <span className="font-bold">Form</span>
            </h1>
            <p>
              Feel free to contact us through{" "}
              <span className="text-red-600">Twitter</span> or{" "}
              <span className="text-red-600">Facebook</span> if you prefer.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-5">
              <input
                {...register("name")}
                className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Your Name"
              />
              <input
                {...register("email")}
                className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Your Email"
              />
              <input
                {...register("phoneNo")}
                className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Phone Number"
              />
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                {...register("companyName")}
                className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Company Name*"
              />
              <input
                {...register("subject")}
                className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div className="my-4">
              <textarea
                {...register("message")}
                placeholder="Message"
                className="w-full h-44 bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                defaultValue={""}
              />
            </div>
            <div className="text-center my-10 flex justify-center items-center">
              <input type="checkbox" name="" id="" />
              <p className="ms-1">
                Save my name, email, and website in this browser for the next
                time I comment.
              </p>
            </div>
            <div className="text-center">
              <button className="btn lg:w-[570px] my-10 text-md py-3 px-8 border border-black relative group overflow-hidden font-semibold">
                <span className="absolute inset-0 bg-slate-700 z-0 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
                <span className="relative z-10 text-black group-hover:text-white uppercase">
                  Send a message
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
