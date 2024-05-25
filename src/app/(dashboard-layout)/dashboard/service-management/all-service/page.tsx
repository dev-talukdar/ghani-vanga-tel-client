"use client";
import {
  useDeleteServiceMutation,
  useGetAllServiceQuery,
} from "@/redux/features/serviceApi/serviceApi";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

type TService = {
  _id: string;
  title: string;
  description1: string;
  description2: string;
  servicePhoto: string;
};

const AllServicesPage = () => {
  const { data: services, isFetching } = useGetAllServiceQuery(undefined);
  const [deleteUser] = useDeleteServiceMutation();

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
          text: "Service has been deleted.",
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
              <th className="py-3 px-6 text-left border-b">Description-1</th>
              <th className="py-3 px-6 text-left border-b">Description-2</th>
              <th className="py-4 px-6 text-lg border-b text-end">Delete</th>
            </tr>
          </thead>
          <tbody>
            {services?.data?.map((service: TService, i: number) => (
              <tr
                key={service._id}
                className="hover:bg-gray-50 transition duration-300"
              >
                <td className="py-4 px-6 border-b">{i + 1} </td>
                <td className="py-4 px-6 border-b">{service?.description1}</td>
                <td className="py-4 px-6 border-b">{service?.description2}</td>
                <td className="py-4 px-6 border-b text-end">
                  <button
                    onClick={() => handleDelete(service._id)}
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

export default AllServicesPage;
