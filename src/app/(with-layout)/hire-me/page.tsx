import upwork from '../../../../public/images/hireMe/upwork.webp';
import fiverr from '../../../../public/images/hireMe/fiverr.webp';
import freelancer from '../../../../public/images/hireMe/freelancer.webp';
import Image from 'next/image';
import Link from 'next/link';

const HireMePage = () => {
  return (
    <div className="h-screen">
      <div className="w-full max-w-[1200px] mx-auto">
        <p className="text-center max-w[20ch] text-3xl  mt-8 text-slate-600">
          Click on any of the buttons below to hire me for your project!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-0 mt-36">
          <div className="border border-[#37a002] rounded-lg bg-gray-50 shadow-xl flex flex-col justify-center items-center py-10 ">
            <div className="mb-6">
              <Image src={upwork} alt="upwork" width={80} height={80} />
            </div>
            <p className="text-xs mb-2 text-slate-500 italic">
              Click below to hire me on Upwork!
            </p>
            <Link
              href="https://www.upwork.com/freelancers/~01f517600d1caa962f?mp_source=share"
              target="blank"
            >
              <button className="btn mb-6 btn-block px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-[#37a002] text-white inline-block">
                <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-yellow-400 group-hover:h-full"></span>
                <span className="relative group-hover:text-white flex items-center gap-4 justify-center">
                  Hire Me Now
                </span>
              </button>
            </Link>
          </div>

          <div className="border border-[#2ab0fb]  rounded-lg bg-gray-50 shadow-xl flex flex-col justify-center items-center py-10 ">
            <div className="mb-6">
              <Image src={freelancer} alt="freelancer" width={80} height={80} />
            </div>
            <p className="text-xs mb-2 text-slate-500 italic">
              Click below to hire me on Freelancer!
            </p>
            <Link
              href="https://www.freelancer.com/u/talukdermuhammad"
              target="blank"
            >
              <button className="btn mb-6 btn-block px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-[#2ab0fb] text-white inline-block">
                <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-yellow-400 group-hover:h-full"></span>
                <span className="relative group-hover:text-white flex items-center gap-4 justify-center">
                  Hire Me Now
                </span>
              </button>
            </Link>
          </div>

          <div className="border border-[#00b14f] rounded-lg bg-gray-50 shadow-xl flex flex-col justify-center items-center py-10 ">
            <div className="mb-6">
              <Image src={fiverr} alt="fiverr" width={80} height={80} />
            </div>
            <p className="text-xs mb-2 text-slate-500 italic">
              Click below to hire me on Fiverr!
            </p>
            <Link href="https://www.fiverr.com/studiotm" target="blank">
              <button className="btn mb-6 btn-block px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-[#00b14f] text-white inline-block">
                <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-yellow-400 group-hover:h-full"></span>
                <span className="relative group-hover:text-white flex items-center gap-4 justify-center">
                  Hire Me Now
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMePage;
