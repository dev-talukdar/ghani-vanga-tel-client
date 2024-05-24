'use client';
import { useUpdateMemberMutation } from '@/redux/features/team/teamApi';
import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { FaPenAlt } from 'react-icons/fa';
import { toast } from 'sonner';

type TTeam = {
  _id: string;
  name: string;
  designation: string;
  profilePhoto: string;
  contactInfo: string | number;
  socialLink: string;
  education: string;
  isDeleted: boolean;
};

const MemberUpdateModal = ({ member }: { member: TTeam }) => {
  const [openModal, setOpenModal] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [updateMember] = useUpdateMemberMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('Creating member...');
    const updatedData = {
      id: member._id,
      updatedData: data,
    };

    try {
      const res: any = await updateMember(updatedData);
      if (res?.error) {
        toast.error(`Something went wrong`, {
          id: toastId,
          duration: 2000,
        });
      } else {
        toast.success('Designation Updated!', {
          id: toastId,
          duration: 2000,
        });
        reset();
      }
    } catch (error) {
      toast.error('Something went wrong', {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="rounded-md bg-red-500 p-3 py-[6px] text-white"
      >
        <FaPenAlt />
      </button>
      <div
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? 'opacity-1 visible' : 'invisible opacity-0'
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          className={`absolute w-[500px] h-[300px] rounded-lg bg-white p-3 pb-5 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${
            openModal
              ? 'scale-1 opacity-1 duration-300'
              : 'scale-0 opacity-0 duration-150'
          } `}
        >
          <svg
            onClick={() => setOpenModal(false)}
            className="mx-auto mr-0 w-8 cursor-pointer fill-black dark:fill-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>
            </g>
          </svg>
          <h1 className="mb-2 text-2xl font-semibold">
            Update Team Member Designation
          </h1>
          <form className="my-10" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register('designation')}
              className="w-full bg-[#f8f8f8] text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              defaultValue={member?.designation}
              placeholder="Designation"
            />

            <div className="text-center mt-5">
              <button
                onClick={() => setOpenModal(false)}
                className="text-md px-3 py-2 lg:py-3 lg:px-8 bg-red-600 relative group overflow-hidden font-semibold"
              >
                <span className="absolute inset-0 bg-black  z-0 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
                <span className="relative z-10 text-white group-hover:text-white uppercase">
                  Update
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MemberUpdateModal;
