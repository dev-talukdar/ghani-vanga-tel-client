import React from 'react';
import TeamMemberHome from '../TeamMemberHome/TeamMemberHome';

const TeamMember = () => {
  return (
    <div>
      <div className="w-full max-w-[1200px] mx-auto mt-16">
        <div className="mb-6 lg:mb-16 ">
          <p className="text-5xl font-bold text-slate-700 text-center">
            Our Brilliant Minds
          </p>
          <p className=" text-center text-slate-600 italic  text-xl">
            We have the best team to help us conquer any obstacles that come our
            way.{' '}
          </p>
          <p className=" text-center text-slate-600 italic  text-xl">
            Together, we are confident in facing the future.{' '}
          </p>
        </div>
        <TeamMemberHome />
      </div>
    </div>
  );
};

export default TeamMember;
