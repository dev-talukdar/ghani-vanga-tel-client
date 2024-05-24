import Link from 'next/link';
import { BsFacebook, BsTwitterX, BsLinkedin } from 'react-icons/bs';

const TeamSocialMedia = () => {
  return (
    <div className="flex items-center">
      <div className=" space-x-2 mt-4 ">
        <Link
          href="https://www.linkedin.com/"
          target="_blank"
          className="w-8 h-8 items-center border-2 border-slate-500  justify-center inline-flex rounded-full font-bold text-lg scale-100 hover:scale-110 hover:ease-out duration-500 "
        >
          <BsLinkedin className="text-slate-500 w-4" />
        </Link>
        <Link
          href="https://www.facebook.com"
          target="_blank"
          className="w-8 h-8 items-center border-2 border-slate-500   justify-center inline-flex rounded-full font-bold text-lg scale-100 hover:scale-110 hover:ease-out duration-500 "
        >
          <BsFacebook className="text-slate-500 w-4" />
        </Link>
        <Link
          href="https://x.com/"
          target="_blank"
          className="w-8 h-8 items-center border-2 border-slate-500   justify-center inline-flex rounded-full font-bold text-lg scale-100 hover:scale-110 hover:ease-out duration-500 "
        >
          <BsTwitterX className="text-slate-500 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default TeamSocialMedia;
