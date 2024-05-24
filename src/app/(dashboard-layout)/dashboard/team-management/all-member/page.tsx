'use client';
import MemberUpdateModal from '@/app/components/Dashboard/MemberUpdateModal';
import QueryModal from '@/app/components/Dashboard/QueryModal';
import {
  useDeleteMemberMutation,
  useGetAllTeamMemberQuery,
} from '@/redux/features/team/teamApi';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

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

const AllMembers = () => {
  const { data: members, isFetching } = useGetAllTeamMemberQuery(undefined);
  const [deleteUser] = useDeleteMemberMutation();

  if (isFetching) {
    <p className="text-2xl my-10 font-semibold text-center">Loading</p>;
  }

  const handleDelete = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteUser(id);
        Swal.fire({
          title: 'Deleted!',
          text: 'User has been deleted.',
          icon: 'success',
        });
      }
    });
  };

  return (
    <div className="col-span-3">
      <div className="overflow-x-auto ">
        <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6">
          <thead>
            <tr className="bg-[#333333] text-white">
              <th className="py-3 px-6 text-left border-b">SL NO</th>
              <th className="py-3 px-6 text-left border-b">Name</th>
              <th className="py-3 px-6 text-left border-b">Contact</th>
              <th className="py-3 px-6 text-left border-b">Designation</th>
              <th className="py-4 px-6 text-lg border-b text-end">Update</th>
              <th className="py-4 px-6 text-lg border-b text-end">Delete</th>
            </tr>
          </thead>
          <tbody>
            {members?.data?.map((member: TTeam, i: number) => (
              <tr
                key={member._id}
                className="hover:bg-gray-50 transition duration-300"
              >
                <td className="py-4 px-6 border-b">{i + 1} </td>
                <td className="py-4 px-6 border-b">{member?.name}</td>
                <td className="py-4 px-6 border-b">{member?.contactInfo}</td>
                <td className="py-4 px-6 border-b">{member?.designation}</td>
                <td className="py-4 px-6 border-b text-end">
                  <MemberUpdateModal member={member} />
                </td>
                <td className="py-4 px-6 border-b text-end">
                  <button
                    onClick={() => handleDelete(member._id)}
                    className="rounded-md bg-red-500 p-3 py-[6px] text-white"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllMembers;
