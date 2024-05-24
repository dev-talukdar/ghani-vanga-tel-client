import Link from 'next/link';
import React from 'react';
import { IoHome } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';

const NotFound = () => {
  return (
    <div className="bg-mobileMenu h-screen md:pt-40">
      <div className="container mx-auto ">
        <div className="text-center text-white">
          <p className="font-extrabold text-9xl ">404</p>
          <p className="font-extrabold text-6xl mt-3 ">
            This Page Does Not Exist
          </p>
          <p className=" text-2xl mt-3 ">
            Sorry ! We could not find you the page you are looking for. Please
            check URL in address bar and try again
          </p>

          <div className="container mx-auto md:w-3/4 xs:w-3/4 mt-4 ">
            <div className="flex flex-col md:flex-row md:justify-between   ">
              <button className="btn   mt-4 md:mb-0 md:mr-20 md:w-2/5   px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-white text-black inline-block">
                <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-yellow-600 group-hover:h-full  "></span>
                <Link href="/">
                  <span className="relative group-hover:text-white flex items-center justify-center gap-3">
                    Back To Home <IoHome className="w-5 h-5" />
                  </span>
                </Link>
              </button>

              <button className="btn md:ml-3 mt-4 md:mb-0 md:mr-20 md:w-2/5 px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-white  text-black inline-flex items-center">
                <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-yellow-600 group-hover:h-full "></span>
                <Link href="/contact" className="text-center mx-auto">
                  <span className="relative group-hover:text-white flex items-center justify-center gap-3">
                    Contact Us <MdOutlineMailOutline className="w-5 h-5" />
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
