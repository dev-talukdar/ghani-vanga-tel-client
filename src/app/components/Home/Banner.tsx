'use client';
import { easeInOut, motion } from 'framer-motion';
import Link from 'next/link';
import { VscDebugStart } from 'react-icons/vsc';

const Banner = () => {
  const intro = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.35,
        delayChildren: 2,
      },
    },
  };

  const introChildren = {
    hidden: { opacity: 0, y: -200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }, //type: "spring", bounce: 0.5
    },
  };

  const laptop = {
    initial: { y: 0, scale: 8 },
    animate: {
      scale: 1,
      y: 20,
      transition: {
        duration: 1,
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: easeInOut,
        },
      },
    },
  };

  return (
    <div
      className=" bg-cover lg:min-h-screen bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/images/a.webp)' }}
    >
      <div className="w-full max-w-[1200px]  mx-auto grid grid-cols-1 lg:grid-cols-2 place-content-center   px-5">
        <motion.div
          variants={intro}
          initial="hidden"
          animate="visible"
          className="lg:mt-40"
        >
          <motion.h1
            className=" lg:text-6xl md:mt-36 lg:font-bold text-nowrap"
            variants={introChildren}
          >
            <span className="gray lg:font-bold  lg:block hidden "></span>
          </motion.h1>

          <motion.p
            className="text-5xl  text-slate-700 text-opacity-0 lg:text-opacity-100  font-extrabold mt-9 max-w-[43ch]"
            variants={introChildren}
          >
            We care you <br />
            Until You Grow Big
          </motion.p>

          <motion.p
            className="text-xl text-slate-800 mt-8 max-w-[43ch]  lg:block hidden"
            variants={introChildren}
          >
            Consulting for small & medium size
            <span className="text-gray-600 font-bold text-2xl mx-1">
              Business
            </span>
            professional fast and affordable
          </motion.p>
          <motion.div className=" mt-10   " variants={introChildren}>
            <Link href="/contact" className=" lg:block hidden">
              <button className=" btn mb-6 btn-block px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-gray-600 text-white inline-block">
                <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-slate-800 group-hover:h-full "></span>
                <span className="relative group-hover:text-white flex items-center gap-4 justify-center">
                  Get Started <VscDebugStart className="h-7 w-7" />
                </span>
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
