import Image from 'next/image';
import React from 'react';
import AboutImg from '../../../../public/images/working-accountantd.webp';

const About = () => {
  return (
    <div className="bg-[#f8f8f8] py-8 lg:py-16">
      <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-0 lg:flex flex-col lg:flex-row gap-5 mt-5 lg:mt-0 items-center ">
        <div className="lg:w-1/2 w-full lg:px-12 px-0">
          <p className="uppercase text-xl font-semibold text-teal-600">
            Our Thinking
          </p>
          <p className="text-xl text-slate-400 text-justify ">
            <q className="">
              we provide business ideas; we ignite the spark of innovation that
              propels you to the forefront of your industry. Our expertise
              transforms visionary concepts into groundbreaking realities.
              Partner with us and unleash the full potential of your business.
              Together, we will redefine success.
            </q>
          </p>
        </div>
        <div className="lg:w-1/2 w-full bg-blue-300 object-cover mt-6 lg:mt-0 ">
          <Image src={AboutImg} height={650} width={800} alt="Quality" />

          <div className="absolute top-0 -inset-full h-full w-1/2 z-10 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
        </div>
      </div>
    </div>
  );
};

export default About;
