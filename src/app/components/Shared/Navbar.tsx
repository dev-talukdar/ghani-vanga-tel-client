"use client";
import React, { useState } from "react";
import "./Navbar.css";
import Link from "next/link"; 
import { useRouter } from "next/navigation"; 
import { toast } from "sonner";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { getUserInfo, removeUser } from "@/utils/actions/authService";

const Navbar = () => { 
  const userInfo = getUserInfo();   
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    const toastId = toast.loading("Logging in...");
    removeUser()
    router.refresh()
    toast.success("Successfully Logged out", { 
      id: toastId, 
      duration: 2000 
    }); 
  };

  return (
    <div className=" bg-mobileMenu sticky top-0 z-10  border-b border-blue-200">
      <div>
        <div className="relative">
          {/* For large screens */}
          <div className="bg-mobileMenu  px-6 py-4">
            <div className="container mx-auto flex items-center justify-between">
              <p className="text-white font-bold text-xl">
                Beacon <span className="text-teal-600">Insight</span>
              </p>
              <ul className="hidden w-8/12 md:flex items-center justify-center space-x-8">
                <li className="text-white hover:text-teal-600 ">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-white hover:text-teal-600 ">
                  <Link href="/services">Services</Link>
                </li>
                <li className="text-white hover:text-teal-600 ">
                  <Link href="/our-team">Our Team</Link>
                </li>
                <li className="text-white hover:text-teal-600 ">
                  <Link href="/contact">Contact Us</Link>
                </li>

                { userInfo?.name &&
                  <li className="text-white hover:text-teal-600 ">
                  <Link href="/dashboard/query-management/message">
                    Dashboard
                  </Link>
                </li> }
              </ul>

              <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
                <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                  {userInfo?.name ? (
                    <button
                      onClick={handleLogout}
                      className="btn btn-wide px-10 py-2.5 relative rounded group overflow-hidden font-medium bg-gray-600 text-white"
                    >
                      <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-gray-200 group-hover:h-full"></span>
                      <span className="relative group-hover:text-black font-bold justify-center">
                        Logout
                      </span>
                    </button>
                  ) : (
                    <Link href="/login">
                      <button className="btn btn-wide px-10 py-2.5 relative rounded group overflow-hidden font-medium bg-gray-600 text-white">
                        <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-gray-200 group-hover:h-full"></span>
                        <span className="relative group-hover:text-black font-bold justify-center">
                          Login
                        </span>
                      </button>
                    </Link>
                  )}
                </div>

                <div className="flex lg:hidden">
                  <button
                    aria-label="open menu"
                    onClick={() => setShowMenu(true)}
                    className="text-black dark:text-white dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
                  >
                    <GiHamburgerMenu className="text-3xl text-white " />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* For small screen */}

          <div
            id="mobile-menu"
            className={`${showMenu ? "flex" : "hidden"} absolute bg-mobileMenu text-white z-10 inset-0 md:hidden bg-white flex-col h-screen w-full`}
          >
            <div className="flex items-center justify-end mt-2 mr-2 pb-4 p-4">
              <button
                onClick={() => setShowMenu(false)}
                aria-label="close menu"
                className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
              >
                <MdClose className="text-2xl " />
              </button>
            </div>
            <div className="mt-6 p-4 text-center">
              <ul className="space-y-3 ">
                <li className="text-white hover:text-teal-600 ">
                  <Link href="/" onClick={() => setShowMenu(false)}>
                    Home
                  </Link>
                </li>
                <li className="text-white hover:text-teal-600 ">
                  <Link href="/services" onClick={() => setShowMenu(false)}>
                    Services
                  </Link>
                </li>
                <li className="text-white hover:text-teal-600 ">
                  <Link href="/our-team" onClick={() => setShowMenu(false)}>
                    Our Team
                  </Link>
                </li>
                <li className="text-white hover:text-teal-600 ">
                  <Link href="/contact" onClick={() => setShowMenu(false)}>
                    Contact Us
                  </Link>
                </li>
                { userInfo?.name &&
                  <li className="text-white hover:text-teal-600 ">
                  <Link href="/dashboard/query-management/message">
                    Dashboard
                  </Link>
                </li> }
              </ul>
              <div className="mt-4">
              {userInfo?.name ? (
                    <button
                      onClick={handleLogout}
                      className="btn btn-wide px-10 py-2.5 relative rounded group overflow-hidden font-medium bg-gray-600 text-white"
                    >
                      <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-gray-200 group-hover:h-full"></span>
                      <span className="relative group-hover:text-black font-bold justify-center">
                        Logout
                      </span>
                    </button>
                  ) : (
                    <Link href="/login" onClick={() => setShowMenu(false)}>
                      <button className="btn btn-wide px-10 py-2.5 relative rounded group overflow-hidden font-medium bg-gray-600 text-white">
                        <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-gray-200 group-hover:h-full"></span>
                        <span className="relative group-hover:text-black font-bold justify-center">
                          Login
                        </span>
                      </button>
                    </Link>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
