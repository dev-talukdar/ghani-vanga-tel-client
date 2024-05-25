"use client";
import QueryModal from "@/app/components/Dashboard/QueryModal";
import Loader from "@/app/components/Shared/Loader/Loader";
import {  useGetAllQueryQuery,  useUpdateQueryMutation,} from "@/redux/features/query/queryApi";
import React, { useState } from "react";
import { toast } from "sonner";

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

const Message = () => {
  const { data: queries, isLoading, refetch } = useGetAllQueryQuery(undefined);
  const [updateMark] = useUpdateQueryMutation();

  const [modalOpen, setModalOpen] = useState(false);
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentQueryIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleMark = async (id: string) => {
    const toastId = toast.loading("Updating...");
    try {
      const res: any = await updateMark(id);
      if (res?.error) {
        toast.error(`Something went wrong`, {
          id: toastId,
          duration: 2000,
        });
      } else {
        toast.success("Marked successful!", {
          id: toastId,
          duration: 2000,
        });
        refetch();
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  if (isLoading) {
    <Loader />;
  }
  
  return (
    <div className="col-span-3">
      <div className="overflow-x-auto ">
        <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6">
          <thead>
            <tr className="bg-[#333333] text-white">
              <th className="py-3 px-6 text-left  lg:block hidden">SL NO</th>
              <th className="py-3 px-6 text-left ">Name</th>
              <th className="py-3 px-6 text-left  lg:block hidden">Email</th>
              <th className="py-4 px-6 text-lg  text-end">Action</th>
              <th className="py-4 px-6 text-lg  text-end lg:block hidden">Mark</th>
            </tr>
          </thead>
          <tbody>
            {queries?.data?.map((query: TQuery, i: number) => (
              <tr
                key={query._id}
                className="hover:bg-gray-50 transition duration-300"
              >
                <td className="py-4 px-6  lg:block hidden">{i + 1} </td>
                <td className="py-4 px-6  ">{query?.name}</td>
                <td className="py-4 px-6  lg:block hidden">{query?.email}</td>
                <td className="py-4 px-6  text-end">
                  <button
                    onClick={() => openModal(i)}
                    className="rounded-md bg-indigo-500 px-5 py-[6px] text-white"
                  >
                    Open
                  </button>
                </td>
                <td className="py-4 px-6  text-end lg:block hidden">
                  <button
                    onClick={() => handleMark(query._id)}
                    className=" text-blue-500"
                  >
                    Mark as read
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modalOpen && (
        <QueryModal
          queries={queries.data}
          currentIndex={currentQueryIndex}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Message;

// TOOD: refetch ta kaj korano lagbe, karon, refresh chara data paina.
  // TOOD: open button press korle, jei modal open hoi, sekhan thekei mark read and delete er kaj kora
