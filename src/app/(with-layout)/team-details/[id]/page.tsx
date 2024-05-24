'use client';
import Image from 'next/image';
import React from 'react';
import TeamMember from '../../../../../public/images/team-img04.jpg';
import { FaCheck } from 'react-icons/fa6';
import { FaAward, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useGetMemberQuery } from '@/redux/features/team/teamApi';
import Link from 'next/link';

const TeamDetails = ({ params }: any) => {
  const { data: member } = useGetMemberQuery(params.id);
  console.log(member);
  return (
    <div className="max-w-7xl mx-auto my-10 px-3 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-0">
        <div className="order-2 lg:order-1 col-span-2 my-8 lg:my-0">
          <div>
            <h1 className="text-3xl font-semibold">Overview</h1>
            <h4 className="italic my-3">
              &quot;Lorem Ipsum is simply dummy text of the printing and
              typesetting industry&quot;
            </h4>
            <p>
              Porta lorem mollis aliquam ut porttitor leo a diam. Elit
              pellentesque habitant morbi tristique senectus et netus. Sit amet
              venenatis urna cursus eget scelerisque.
            </p>
          </div>
          <div className="my-10">
            <h1 className=" mb-5 text-3xl font-semibold">
              Professional Skills
            </h1>
            <div className="lg:flex flex-row gap-16">
              <div className="flex flex-col w-full lg:w-1/2 justify-center">
                <div className="flex items-center  gap-2 ">
                  <FaCheck className="text-red-600" />{' '}
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="flex items-center  gap-2 my-4">
                  <FaCheck className="text-red-600" />{' '}
                  <p>Sodales neque sodales ut etiam amet nisl </p>
                </div>
                <div className="flex items-center gap-2 ">
                  <FaCheck className="text-red-600" />{' '}
                  <p>Neque convallis a cras semper auctor.</p>
                </div>
              </div>
              <div className="flex flex-col w-full lg:w-1/2 lg:mt-0 mt-5 justify-center">
                <div className="flex flex-col gap-2">
                  <span className="text-lg font-medium">Textile</span>
                  <div
                    className={`flex h-2 items-center justify-center rounded-full bg-slate-100`}
                  >
                    <div
                      style={{ width: `${70}%` }}
                      className={`transition-width flex justify-center items-center mr-auto h-full w-0 rounded-full  bg-red-600 duration-500`}
                    >
                      <span className="font-medium  text-center text-white">
                        {' '}
                        {70} %
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-10">
                  <span className="text-lg font-medium">Manufacture</span>
                  <div
                    className={`flex h-2  items-center justify-center rounded-full bg-slate-100`}
                  >
                    <div
                      style={{ width: `${70}%` }}
                      className={`transition-width flex justify-center items-center mr-auto h-full w-0 rounded-full  bg-red-600 duration-500`}
                    >
                      <span className="font-medium  text-center text-white">
                        {' '}
                        {70} %
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="mb-5 text-3xl font-semibold">Awards And Honours</h1>
            <p>
              Porta lorem mollis aliquam ut porttitor leo a diam. Elit
              pellentesque habitant morbi tristique senectus et netus. Sit amet
              venenatis urna cursus eget scelerisque.
            </p>
          </div>
          <div className="flex flex-wrap justify-between gap-4 my-10 ">
            <div className="w-full md:w-[48%] p-6 shadow-lg border border-gray-200">
              <div className="flex items-center">
                <FaAward className="text-4xl text-red-700" />
                <div className="ps-4">
                  <h3 className="text-xl font-semibold">Edison Awards</h3>
                  <p>Honoring excellence in innovation.</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[48%]  p-6 shadow-lg border border-gray-200">
              <div className="flex items-center">
                <FaAward className="text-4xl text-red-700" />
                <div className="ps-4">
                  <h3 className="text-xl font-semibold">Edison Awards</h3>
                  <p>Honoring excellence in innovation.</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[48%] p-6 shadow-lg border border-gray-200">
              <div className="flex items-center">
                <FaAward className="text-4xl text-red-700" />
                <div className="ps-4">
                  <h3 className="text-xl font-semibold">Edison Awards</h3>
                  <p>Honoring excellence in innovation.</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[48%]  p-6 shadow-lg border border-gray-200">
              <div className="flex items-center">
                <FaAward className="text-4xl text-red-700" />
                <div className="ps-4">
                  <h3 className="text-xl font-semibold">Edison Awards</h3>
                  <p>Honoring excellence in innovation.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-[30px] font-semibold">Book An Appointment</h1>
            <div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  placeholder="Your Phone"
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email Address"
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className="my-4">
                <textarea
                  placeholder="Your Message"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  defaultValue={''}
                />
              </div>
              <div className="my-2 w-full">
                <button className=" uppercase text-sm font-bold tracking-wide bg-red-700 py-3 rounded-lg w-full relative group overflow-hidden">
                  <span className="absolute inset-0 bg-black z-0 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
                  <span className="relative z-10 text-white group-hover:text-white">
                    Send Message
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 col-span-1">
          <div className="shadow-lg">
            <Image
              src={member?.data?.profilePhoto}
              height={450}
              width={500}
              alt="Team Member"
              className="h-[450px] w-full"
            />
            <div className="bg-red-700 text-center py-3 text-white">
              <h2 className="text-2xl">{member?.data?.name}</h2>
              <p>{member?.data?.designation}</p>
            </div>
            <div className="px-4 py-10 relative">
              <div className="my-3">
                <h5 className="text-xl font-semibold">Phone</h5>
                <p className="hover:text-red-600">+8(234) 654 854 258</p>
              </div>
              <div className="my-3">
                <h5 className="text-xl font-semibold">Email</h5>
                <p>{member?.data?.contactInfo}</p>
              </div>
              <div className="my-3">
                <h5 className="text-xl font-semibold">Website</h5>
                <Link
                  target="_blank"
                  className="text-blue-600 underline"
                  href={member?.data?.socialLink || ''}
                >
                  {member?.data?.socialLink}
                </Link>
              </div>
              <div className="my-3">
                <h5 className="text-xl font-semibold">Address</h5>
                <p>4567 Jaleigh St, Douston, USA.</p>
              </div>
              <div className="absolute bottom-0 lg:bottom-5 w-full right-1 border-b border-gray-300" />
            </div>
            <div className="pb-8 pt-4 px-5">
              <div className="flex gap-3">
                <div className="bg-slate-100 p-3 hover:text-white hover:bg-red-600 duration-500">
                  <FaFacebook />
                </div>
                <div className="bg-slate-100 p-3 hover:text-white hover:bg-red-600 duration-500">
                  <FaTwitter />
                </div>
                <div className="bg-slate-100 p-3 hover:text-white hover:bg-red-600 duration-500">
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
