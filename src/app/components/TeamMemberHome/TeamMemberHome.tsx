'use client';
import { TTeam } from '@/app/(with-layout)/our-team/page';
import { useGetAllTeamMemberQuery } from '@/redux/features/team/teamApi';
import { MdOutlineEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md';
import Image from 'next/image';
import TeamSocialMedia from '../SocialMedia/TeamSocialMedia';
import Link from 'next/link';

const TeamMemberHome = () => {
  const { data: members, isFetching } = useGetAllTeamMemberQuery(undefined);
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 ">
        {members?.data?.slice(0, 4).map((member: TTeam) => (
          <div
            key={member._id}
            className="lg:flex justify-center items-center gap-3 mx-auto  text-slate-500 lg:p-2 "
          >
            <div className="w-80 h-96 relative">
              {' '}
              <Image
                src={member.profilePhoto}
                alt={member.name}
                layout="fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />{' '}
            </div>
            <div>
              <p className="text-xl font-bold text-slate-600">{member.name}</p>
              <p className="  ">{member.designation}</p>
              <p className="  text-slate-500">{member.education}</p>

              <div className="mt-4">
                <p className="  text-slate-500 flex  items-center gap-2">
                  <MdOutlineEmail className="   text-xl" /> {member.email}
                </p>
                <p className="  text-slate-500 flex   items-center gap-2">
                  <MdLocalPhone className="   text-xl" /> {member.phoneNumber}
                </p>
                <p className="  text-slate-500 flex  items-center gap-2">
                  <MdLocationOn className="   text-xl" />
                  {member.address}
                </p>
              </div>
              <div className="w-76">
                <TeamSocialMedia />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href="/our-team">
        <div className="flex justify-center">
          <button className="mt-8 btn btn-wide mb-6 px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-gray-600 text-white inline-block">
            <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-gray-200 group-hover:h-full "></span>
            <span className="relative group-hover:text-black font-bold flex items-center gap-4 justify-center">
              View Full Team
            </span>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default TeamMemberHome;
