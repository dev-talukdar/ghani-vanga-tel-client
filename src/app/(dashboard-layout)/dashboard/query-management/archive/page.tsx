'use client';

import {
  useDeleteQueryMutation,
  useGetMarkedQueryQuery,
} from '@/redux/features/query/queryApi';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

type TQuery = {
  _id: string;
  name: string;
  email: string;
  phoneNo: number;
  companyName: string;
  subject: string;
  message: string;
  createdAt: string;
  updatedAt: string;
};

const Archive = () => {
  const { data: queries, isFetching } = useGetMarkedQueryQuery(undefined);
  const [deleteQuery] = useDeleteQueryMutation();

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
        await deleteQuery(id);
        Swal.fire({
          title: 'Deleted!',
          text: 'Your query has been deleted.',
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
              <th className="py-3 px-6 text-left border-b">Email</th>
              <th className="py-4 px-6 text-lg border-b text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {queries?.data?.map((query: TQuery, i: number) => (
              <tr
                key={query._id}
                className="hover:bg-gray-50 transition duration-300"
              >
                <td className="py-4 px-6 border-b">{i + 1} </td>
                <td className="py-4 px-6 border-b">{query?.name}</td>
                <td className="py-4 px-6 border-b">{query?.email}</td>
                <td className="py-4 px-6 border-b text-end">
                  <button
                    onClick={() => handleDelete(query._id)}
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

export default Archive;
