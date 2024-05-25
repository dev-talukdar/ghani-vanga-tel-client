"use client";
import React, { useEffect, useState } from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaUsers, FaAward } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";

type TNumber = {
  initialValue: number;
  targetValue: number;
};

const Manufacture = () => {
  const AnimatedNumber = ({ initialValue, targetValue }: TNumber) => {
    const [count, setCount] = useState(initialValue);

    useEffect(() => {
      if (count < targetValue) {
        const interval = setInterval(() => {
          setCount((prevCount) => Math.min(prevCount + 1, targetValue));
        }, 10);
        return () => clearInterval(interval);
      }
    }, [count, targetValue]); // Run the effect whenever the target value changes

    return <h1 className="pt-4 text-4xl font-bold">{count}</h1>;
  };

  return (
    <div className=" bg-mobileMenu text-white  py-20">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 pt-10">
          <div className="text-center flex flex-col items-center pb-8 lg:pb-0">
            <div className="border p-3 text-[#fefefe]">
              <FaMapMarkedAlt className="size-12" />
            </div>
            <AnimatedNumber initialValue={0} targetValue={168} />
            <p>Trusted Clients</p>
          </div>
          <div className="text-center flex flex-col items-center pb-8 lg:pb-0">
            <div className="border p-3 text-[#fefefe]">
              <FaAward className="size-12" />
            </div>
            <AnimatedNumber initialValue={0} targetValue={25} />
            <p>Award Received</p>
          </div>
          <div className="text-center flex flex-col items-center pb-8 lg:pb-0">
            <div className="border p-3 text-[#fefefe]">
              <MdDesignServices className="size-12" />
            </div>
            <AnimatedNumber initialValue={0} targetValue={296} />
            <p>Custom Solutions</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <div className="border p-3 text-[#fefefe]">
              <FaUsers className="size-12" />
            </div>
            <AnimatedNumber initialValue={0} targetValue={16} />
            <p>Total Employees</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manufacture;
