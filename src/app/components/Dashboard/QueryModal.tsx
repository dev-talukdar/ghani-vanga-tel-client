'use client';
import React, { useState } from 'react';
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
  console.log(queries);
  const [currentQueryIndex, setCurrentQueryIndex] =
    useState<number>(currentIndex);

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
          <svg
            onClick={onClose}
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
          <h1 className="mb-2 text-2xl font-medium">{query?.subject}</h1>
          <div className="flex items-center my-3">
            <h3 className="text-md font-semibold">{query?.name}</h3>
            <p className="px-1 text-sm opacity-80">&gt; {query?.email}</p>
          </div>
          <p className="px-1 mb-3 text-md opacity-80">
            Phone No : <span className="font-semibold">{query?.phoneNo}</span>
          </p>
          <p className="px-1 mb-3 text-md opacity-80">
            Company Name :{' '}
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
