"use client";
import Image from "next/image";
import React from "react";
import { useGetAllTeamMemberQuery } from "@/redux/features/team/teamApi";
import { MdOutlineEmail, MdLocalPhone, MdLocationOn } from "react-icons/md";
import TeamSocialMedia from "@/app/components/SocialMedia/TeamSocialMedia";
import Loader from "@/app/components/Shared/Loader/Loader";

export type TTeam = {
  _id: string;
  name: string;
  designation: string;
  email: string;
  phoneNumber: string;
  education: string;
  address: string;
  linkedInProfile: string;
  facebookProfile: string;
  twitterProfile: string;
  profilePhoto: string;
  startDate: string;
};

const OurTeam = () => {
  const { data: members, isFetching } = useGetAllTeamMemberQuery(undefined);
  console.log(members);

  if (isFetching) {
    <Loader />;
  }

  return (
    <div>
      <div className="w-full max-w-[1200px] mx-auto my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 ">
          {members?.data?.map((member: TTeam) => (
            <div
              key={member._id}
              className="lg:flex justify-center items-center gap-3 mx-auto  text-slate-500 lg:p-2 "
            >
              <div className="w-80 h-96 relative">
                {" "}
                <Image
                  src={member.profilePhoto}
                  alt={member.name}
                  layout="fill"
                  className="object-cover"
                />{" "}
              </div>
              <div>
                <p className="text-xl font-bold text-slate-600">
                  {member.name}
                </p>
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
      </div>
    </div>
  );
};

export default OurTeam;
