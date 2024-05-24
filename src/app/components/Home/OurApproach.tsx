import Image from 'next/image';
import ourApproach from '../../../../public/images/ourApproach.webp';
import Link from 'next/link';

const OurApproach = () => {
  return (
    <div className="bg-mobileMenu ">
      <div className="w-full max-w-[1200px] mx-auto py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 content-center">
          <div className="px-4">
            <p className="uppercase text-rose-200">Our Approach</p>
            <p className="text-white font-bold text-start text-2xl">
              We resolve your critical business challenges.
            </p>
            <p className="max-w-[85ch] text-gray-200 italic mt-5 text-justify">
              In today&apos;s fast-paced business landscape, facing critical
              challenges is inevitable. At our firm, we specialize in resolving
              your most critical business challenges, ensuring you thrive in a
              competitive environment. Our approach includes thorough analysis
            </p>

            <p className="max-w-[85ch] text-gray-200 italic mt-7 text-justify">
              customized strategies, and leveraging industry expertise. We
              streamline operations, improve financial stability, and embrace
              digital transformation. Partner with us to turn challenges into
              opportunities and achieve sustained success.
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

          <div className="px-4">
            <Image
              src={ourApproach}
              width={600}
              height={250}
              alt="business meeting"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
