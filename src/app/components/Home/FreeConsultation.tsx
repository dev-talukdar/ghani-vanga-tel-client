'use client';
import Image from 'next/image';
import customerCare from '../../../../public/images/customerCare.webp';
import { useCreateQueryMutation } from '@/redux/features/query/queryApi';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'sonner';

const FreeConsultation = () => {
  const [sendQuery] = useCreateQueryMutation();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('Sending message...');
    const phoneNo = Number(data.phoneNo);
    const queryData = {
      ...data,
      phoneNo,
    };

    try {
      const res: any = await sendQuery(queryData);
      console.log(res);
      if (res?.error) {
        toast.error(`Something went wrong`, {
          id: toastId,
          duration: 2000,
        });
      } else {
        toast.success('Message send successful!', {
          id: toastId,
          duration: 2000,
        });
        reset();
      }
    } catch (error) {
      toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }
  };
  return (
    <div className="w-full max-w-[1200px] mx-auto mt-8 lg:mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between content-center gap-8">
        <div className="relative w-full h-full ">
          <Image
            src={customerCare}
            alt="customer care"
            layout="fill"
            className="object-cover rounded-lg"
          />
        </div>
        <div className=" ">
          <div className="px-4 border border-slate-300 rounded-lg">
            <p className="text-3xl font-bold text-slate-600 text-center my-6">
              Request for a free Call
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-5   mt-5">
                <input
                  {...register('name')}
                  className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  {...register('email')}
                  className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Your Email"
                />
                <input
                  {...register('phoneNo')}
                  className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  placeholder="Phone Number"
                />
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  {...register('companyName')}
                  className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Company Name*"
                />
                <input
                  {...register('subject')}
                  className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className="my-4">
                <textarea
                  {...register('message')}
                  placeholder="Message"
                  className="w-full h-44 bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  defaultValue={''}
                />
              </div>

              <div className="text-center">
                <button className="btn lg:w-[570px] my-10 text-md py-3 px-8 border border-black relative group overflow-hidden font-semibold">
                  <span className="absolute inset-0 bg-slate-700 z-0 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
                  <span className="relative z-10 text-black group-hover:text-white uppercase">
                    Request a Free Phone Call
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeConsultation;
