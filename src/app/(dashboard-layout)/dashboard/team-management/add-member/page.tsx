'use client';
import { useCreateMemberMutation } from '@/redux/features/team/teamApi';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'sonner';
const image_upload_token = process.env.NEXT_PUBLIC_image_upload_token;
console.log(image_upload_token);

const AddMember = () => {
  const { register, handleSubmit, reset } = useForm();
  const [createMember] = useCreateMemberMutation();
  const image_upload_url = `https://api.imgbb.com/1/upload?key=${image_upload_token}`;

  const onSubmit = (data: FieldValues) => {
    console.log('Form Data Submitted:', data);
    const toastId = toast.loading('Creating member...');

    const formData = new FormData();
    formData.append('image', data.profilePhoto[0]);
    fetch(image_upload_url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then(async (profileResponse) => {
        if (profileResponse.success) {
          const profilePhotoURL = profileResponse.data.display_url;
          const memberData = {
            ...data,
            profilePhoto: profilePhotoURL,
          };

          try {
            const res: any = await createMember(memberData);
            console.log(res);
            if (res?.error) {
              toast.error(`Something went wrong`, {
                id: toastId,
                duration: 2000,
              });
            } else {
              toast.success('Member Created!', {
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
      <h1 className="text-2xl mt-20">Add Team Member</h1>
      <form className="lg:pe-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 my-5">
          <input
            {...register('name')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Name"
          />
          <input
            {...register('designation')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Designation"
          />
          <input
            {...register('email')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Email Address"
          />
          <input
            {...register('phoneNumber')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Mobile Number"
          />
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 my-5">
          <input
            {...register('education')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Academic Degree"
          />
          <input
            {...register('address')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Present Address"
          />
          <input
            {...register('linkedInProfile')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Linkedin URL"
          />
          <input
            {...register('facebookProfile')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Facebook URL"
          />
          <input
            {...register('twitterProfile')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Twitter URL"
          />
          <input
            {...register('startDate')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Joining Date"
          />
          <input
            {...register('profilePhoto')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="file"
            placeholder="Select profile photo"
          />
        </div>

        <div className="text-center">
          <button className="mt-8 btn btn-wide mb-6 px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-gray-600 text-white inline-block">
            <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-gray-200 group-hover:h-full "></span>
            <span className="relative group-hover:text-black font-bold flex items-center gap-4 justify-center">
              Add Team Member
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMember;
