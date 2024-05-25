"use client";
import {
  useDeleteUserMutation,
  useGetAllUserQuery,
} from "@/redux/features/auth/authApi";
import React from "react";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

type TUser = {
  _id: string;
  name: string;
  email: string;
  password: string;
  designation: string;
  profilePhoto: string;
  role: "superAdmin" | "admin" | "user";
  status: "in-progress" | "blocked";
  isDeleted: boolean;
};

const AllAdmins = () => {
  const { data: users, isFetching } = useGetAllUserQuery(undefined);
  const [deleteUser] = useDeleteUserMutation();

  if (isFetching) {
    <p className="text-2xl my-10 font-semibold text-center">Loading</p>;
  }

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteUser(id);
        Swal.fire({
          title: "Deleted!",
          text: "User has been deleted.",
          icon: "success",
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
              <th className="py-3 px-6 text-left border-b">Designation</th>
              <th className="py-4 px-6 text-lg border-b text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.data?.map((user: TUser, i: number) => (
              <tr
                key={user._id}
                className="hover:bg-gray-50 transition duration-300"
              >
                <td className="py-4 px-6 border-b">{i + 1} </td>
                <td className="py-4 px-6 border-b">{user?.name}</td>
                <td className="py-4 px-6 border-b">{user?.email}</td>
                <td className="py-4 px-6 border-b">{user?.designation}</td>
                <td className="py-4 px-6 border-b text-end">
                  <button
                    onClick={() => handleDelete(user._id)}
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

export default AllAdmins;
