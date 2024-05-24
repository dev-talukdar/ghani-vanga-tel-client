'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGetAllServiceQuery } from '@/redux/features/serviceApi/serviceApi';
import { TService } from '@/redux/type/common';
import Loader from '../Shared/Loader/Loader';

const Service = () => {
  const { data: services, isFetching } = useGetAllServiceQuery(undefined);
  // console.log(services);
  if (isFetching) {
    <Loader />;
  }

  const truncate = (str: any, length: any) => {
    if (str.length <= length) return str;
    return str.slice(0, length) + '...';
  };

  return (
    <div className="bg-[#f8f8f8] p-4">
      <div className="max-w-[1200px] mx-auto  ">
        {/* headline starts from here  */}
        <div className="text-center  ">
          <div className="  ">
            <p className="text-4xl mt-4 lg:mt-16 font-bold text-slate-600">
              Discover services We Provide
            </p>
            <p className="text-slate-600 mt-3">
              Our have the best people with whom we can overcome all obstacles
              in our way, with whom we <br /> confidently look to the future
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {services?.data?.slice(0, 3).map((service: TService) => (
            <div
              key={service?._id}
              className=" shadow-lg p-4 group transition-transform duration-500 transform-gpu hover:-translate-y-2 my-10"
            >
              <div className="overflow-hidden">
                <Image
                  src={service?.servicePhoto}
                  alt={service?.title}
                  width={500}
                  height={450}
                  className="rounded-lg transform transition duration-500 group-hover:scale-110 "
                />
              </div>
              <div className="mt-10">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold mb-2">
                    {' '}
                    {service.title}{' '}
                  </h3>
                </div>
                <p className="mb-6 text-slate-800">
                  {truncate(service?.description1, 130)}
                </p>
                <Link
                  href={`/service-details/${service._id}`}
                  className="text-blue-300 border-b border-spacing-2 border-dotted"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <button className="my-10 text-md py-3 px-8 border border-black relative group overflow-hidden font-semibold">
              <span className="absolute inset-0 bg-slate-700 z-0 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
              <span className="relative z-10 text-black group-hover:text-white uppercase">
                View More Services
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
