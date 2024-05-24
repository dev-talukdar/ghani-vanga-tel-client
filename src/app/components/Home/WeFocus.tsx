import Image from 'next/image';
import wefocus from '../../../../public/images/weFocus.webp';
import Link from 'next/link';

const WeFocus = () => {
  return (
    <div className="bg-mobileMenu">
      <div className="max-w-[1200px] mx-auto lg:py-20 px-4 ">
        <div className="grid grid-cols-1 content-center items-center md:grid-cols-2 gap-8 ">
          <div className=" ">
            <Image src={wefocus} width={800} height={700} alt="we focus on" />
          </div>

          <div className=" ">
            <p className="text-red-200">WHO WE ARE</p>
            <p className="text-white text-4xl font-semibold my-2">
              We focus on your most <br /> critical business priorities
            </p>
            <p className="text-white text-justify my-2">
              We make it our top priority to address your most important
              business needs by creating customized strategies that match your
              specific goals. We concentrate on crucial areas like improving
              operations, boosting financial performance, and driving strategic
              growth to help you overcome obstacles and take advantage of
              opportunities. Our team of experts offers practical advice and
              solutions to help your business succeed in the long run and stay
              ahead of the competition. Join forces with us to turn your
              business goals into real, measurable results.
            </p>
    <Link href="/contact">
            <button className="mt-8 btn btn-wide mb-6 px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-gray-600 text-white inline-block">
              <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-gray-200 group-hover:h-full "></span>
              <span className="relative group-hover:text-black font-bold flex items-center gap-4 justify-center">
                Request Free Consultation
              </span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeFocus;
