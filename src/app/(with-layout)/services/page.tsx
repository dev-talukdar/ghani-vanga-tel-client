'use client';

import { useGetAllServiceQuery } from '@/redux/features/serviceApi/serviceApi';
import { TService } from '@/redux/type/common';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServicesPage = () => {
  const { data: services, isFetching } = useGetAllServiceQuery(undefined);

  const truncate = (str: any, length: any) => {
    if (str.length <= length) return str;
    return str.slice(0, length) + '...';
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="text-center mt-16">
        <p className="text-3xl font-bold text-slate-600">
          Consulting for small & medium
        </p>
        <p className="text-slate-600 text-2xl mt-3">
          sized business professional, fast & affordable
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 cursor-pointer ">
        {services?.data?.map((service: TService) => (
          <div
            key={service._id}
            className=" shadow-lg p-4 group transition-transform duration-500 transform-gpu hover:-translate-y-2"
          >
            <div className="overflow-hidden">
              <Image
                src={service.servicePhoto}
                alt={service.title}
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
    </div>
  );
};

export default ServicesPage;
