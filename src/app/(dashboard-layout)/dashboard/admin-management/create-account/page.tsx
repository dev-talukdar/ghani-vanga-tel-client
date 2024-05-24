'use client';
import { useRegisterMutation } from '@/redux/features/register/registerApi';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'sonner';
const image_upload_token = process.env.NEXT_PUBLIC_image_upload_token;

const CreateAccount = () => {
  const { register, handleSubmit, reset } = useForm();
  const [createUser] = useRegisterMutation();
  const image_upload_url = `https://api.imgbb.com/1/upload?key=${image_upload_token}`;

  const onSubmit = (data: FieldValues) => {
    const toastId = toast.loading('Creating account...');

    const formData = new FormData();
    formData.append('image', data.profilePhoto[0]);
    fetch(image_upload_url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then(async (profileResponse) => {
        if (profileResponse.success) {
          const profileURL = profileResponse.data.display_url;
          const createNewAccount = {
            ...data,
            profilePhoto: profileURL,
          };

          try {
            const res: any = await createUser(createNewAccount);
            if (res?.error) {
              toast.error(`Something went wrong`, {
                id: toastId,
                duration: 2000,
              });
            } else {
              toast.success('Account Created!', {
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
        }
      });
  };

  return (
    <div className="col-span-3 px-4 lg:px-0">
      <h1 className="text-2xl mt-20">Create an Admin</h1>
      <form className="lg:pe-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 my-5 ">
          <input
            {...register('name')}
            className="w-full bg-[#f8f8f8] border border-slate-300 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your Name"
          />
          <input
            {...register('email')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your Email"
          />
          <input
            {...register('password')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Password"
          />
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 my-5">
          <input
            {...register('designation')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Designation"
          />
          <input
            {...register('profilePhoto')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="file"
            placeholder="Select profile photo"
          />
        </div>

        <div className="text-center">
          <button className="text-md px-3 py-2 lg:py-3 lg:px-8 bg-red-600 relative group overflow-hidden font-semibold">
            <span className="absolute inset-0 bg-black  z-0 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
            <span className="relative z-10 text-white group-hover:text-white uppercase">
              Create Account
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
