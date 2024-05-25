"use client";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { useDeleteQueryMutation } from "@/redux/features/query/queryApi";
import Swal from "sweetalert2";

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

type TProps = {
  queries: TQuery[];
  currentIndex: number;
  onClose: () => void;
};

const QueryModal: React.FC<TProps> = ({ queries, currentIndex, onClose }) => {
  const [deleteQuery] = useDeleteQueryMutation();
  const [currentQueryIndex, setCurrentQueryIndex] =
    useState<number>(currentIndex);

    // delete actions starts from here 
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
          await deleteQuery(id);
          Swal.fire({
            title: "Deleted!",
            text: "Your query has been deleted.",
            icon: "success",
          });
        }
      });
    };

  const handleNext = () => {
    setCurrentQueryIndex((prevIndex) =>
      prevIndex === queries.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setCurrentQueryIndex((prevIndex) =>
      prevIndex === 0 ? queries.length - 1 : prevIndex - 1,
    );
  };

  const query = queries[currentQueryIndex];

  return (
    <div>
      <div
        className={`fixed z-[100] flex items-center justify-center
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          className={`w-[1400px] h-[700px] text-left rounded-lg bg-white  p-8 drop-shadow-2xl dark:bg-gray-800 dark:text-white relative flex flex-col`}
        >
          <div className="flex justify-end">
            <div className="flex justify-between gap-4">
          <FaTrashAlt  onClick={() => handleDelete(query._id)} className="text-3xl font-bold text-white cursor-pointer bg-red-600 rounded-md p-1" />
          <MdClose onClick={onClose} className="text-3xl font-bold text-white cursor-pointer bg-indigo-600 rounded-md p-1" />
          </div>
          </div>

          <h1 className="mb-2 text-2xl font-medium">{query?.subject}</h1>
          <div className="flex items-center my-3">
            <h3 className="text-md font-semibold">{query?.name}</h3>
            <p className="px-1 text-sm opacity-80">&gt; {query?.email}</p>
          </div>
          <p className="px-1 mb-3 text-md opacity-80">
            Phone No : <span className="font-semibold">{query?.phoneNo}</span>
          </p>
          <p className="px-1 mb-3 text-md opacity-80">
            Company Name :{" "}
            <span className="font-semibold">{query?.companyName}</span>
          </p>
          <hr />
          <p className="px-1 my-3 text-md opacity-80">{query?.message}</p>
          <div className="flex-grow"></div>
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrev}
              className="rounded-md bg-indigo-600 hover:bg-indigo-700 px-6 py-1.5 text-white"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="rounded-md bg-indigo-600 hover:bg-indigo-700 px-6 py-1.5 text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryModal;
