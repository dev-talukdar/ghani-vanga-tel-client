import logo1 from '../../../../public/images/partner/partner-1.png';
import logo2 from '../../../../public/images/partner/partner-2.png';
import logo3 from '../../../../public/images/partner/partner-3.png';
import logo4 from '../../../../public/images/partner/partner-4.png';
import logo5 from '../../../../public/images/partner/partner-5.png';
import logo6 from '../../../../public/images/partner/partner-6.png';
import logo7 from '../../../../public/images/partner/partner-7.png';
import logo8 from '../../../../public/images/partner/partner-8.png';
import logo9 from '../../../../public/images/partner/partner-9.png';
import logo10 from '../../../../public/images/partner/partner-10.png';
import logo11 from '../../../../public/images/partner/partner-11.png';
import logo12 from '../../../../public/images/partner/partner-12.png';
import logo13 from '../../../../public/images/partner/partner-13.png';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const Partner = () => {
  return (
    <Marquee>
      <div className="my-16 ">
        <div className="flex  justify-center items-center gap-14">
          <Image src={logo1} alt="logo 1" className="w-auto h-full " />
          <Image src={logo2} alt="logo 1" className="w-auto h-full " />
          <Image src={logo3} alt="logo 1" className="w-auto h-full " />
          <Image src={logo4} alt="logo 1" className="w-auto h-full " />
          <Image src={logo5} alt="logo 1" className="w-auto h-full " />
          <Image src={logo6} alt="logo 1" className="w-auto h-full " />
          <Image src={logo7} alt="logo 1" className="w-auto h-full " />
          <Image src={logo8} alt="logo 1" className="w-auto h-full " />
          <Image src={logo9} alt="logo 1" className="w-auto h-full " />
          <Image src={logo10} alt="logo 1" className="w-auto h-full " />
          <Image src={logo11} alt="logo 1" className="w-auto h-full " />
          <Image src={logo12} alt="logo 1" className="w-auto h-full " />
          <Image src={logo13} alt="logo 1" className="w-auto h-full " />
        </div>
      </div>
    </Marquee>
  );
};

export default Partner;
