import Image from "next/image";
import logo from "../../../../public/white.png";
import { MdOutlineEmail, MdLocalPhone, MdLocationOn } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-mobileMenu text-white ">
      <div className="w-full max-w-[1200px] mx-auto py-10">
        <div className="grid mx-auto grid-cols-1 gap-4 md:flex md:justify-between md:px-4">
          <div className="px-4">
            <div className=" ">
              <Image src={logo} alt="Beacon Insight" width={40} height={40} />
            </div>
            <p>
              We address your most critical <br /> business priorities and
              resolve <br /> as per its needs
            </p>
          </div>
          <div className="px-4 ">
            <p className="uppercase ">Company</p>
            <Link href="/careers">
              <p className="mt-6 hover:text-teal-600">Careers</p>
            </Link>
            <Link href="/about-us">
              <p className=" hover:text-teal-600">About Us</p>
            </Link>
            <Link href="/our-team">
              <p className=" hover:text-teal-600">Meet the Team</p>
            </Link>
          </div>
          <div className="px-4 ">
            <p className="uppercase ">Quick Link</p>
            <Link href="/contact">
              <p className="mt-6 hover:text-teal-600">Contact Us</p>
            </Link>
            <Link href="/privacy-policy">
              <p className=" hover:text-teal-600">Privacy Policy</p>
            </Link>
            <Link href="/terms-and-conditions">
              <p className=" hover:text-teal-600">Terms and Condition</p>
            </Link>
          </div>
          <div className="px-4 ">
            <p className="uppercase mb-6">Contact us</p>
            <p className="  flex  items-center gap-2">
              <MdOutlineEmail className=" text-xl" />
              support@beaconinsight.com
            </p>
            <p className="  flex   items-center gap-2">
              <MdLocalPhone className="text-xl" /> 01926 080 600
            </p>
            <p className="  flex  items-center gap-2">
              <MdLocationOn className="text-xl" />
              34 Amin Mode Town, Savar Cantonment
            </p>
          </div>
        </div>

        <div className="border border-b border-white mt-8"></div>
        <div className="flex text-center justify-between px-4 mt-1 italic">
          <p className="text-xs">Copyright 2020-2028 &#169; Beacon Insight</p>
          <p className="text-xs ">
            This website developed and maintained by{" "}
            <Link href="/hire-me">
              {" "}
              <span className="text-yellow-500 italic underline">
                Muhammad Abdullah Talukdar
              </span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
