'use client';
import { useCreateServicesMutation } from '@/redux/features/serviceApi/serviceApi';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'sonner';
const image_upload_token = process.env.NEXT_PUBLIC_image_upload_token;

const CreateServicePage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [createServices] = useCreateServicesMutation();
  const image_upload_url = `https://api.imgbb.com/1/upload?key=${image_upload_token}`;

  const onSubmit = (data: FieldValues) => {
    console.log('Form Data Submitted:', data);
    const toastId = toast.loading('Creating new Service...');

    const formData = new FormData();
    console.log(formData);
    formData.append('image', data.servicePhoto[0]);
    fetch(image_upload_url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then(async (serviceResponse) => {
        if (serviceResponse.success) {
          const servicePhotoURL = serviceResponse.data.display_url;
          const createNewService = {
            ...data,
            servicePhoto: servicePhotoURL,
          };

          try {
            const res: any = await createServices(createNewService);
            console.log(res);
            if (res?.error) {
              toast.error(`Something went wrong`, {
                id: toastId,
                duration: 2000,
              });
            } else {
              toast.success('Service Created!', {
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
      <h1 className="text-2xl mt-20">Create New Service</h1>
      <form className="lg:pe-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 my-5 ">
          <input
            {...register('title')}
            className="w-full bg-[#f8f8f8] border border-slate-300 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Post Title"
          />

          <input
            {...register('description1')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Before Photo"
            type="text"
          />
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 my-5">
          <input
            {...register('description2')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="After Photo"
            type="text"
          />
          <input
            {...register('servicePhoto')}
            className="w-full bg-[#f8f8f8] border border-slate-3 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="file"
            placeholder="Select profile photo"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="text-md px-3 py-2 lg:py-3 lg:px-8 bg-red-600 relative group overflow-hidden font-semibold"
          >
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

export default CreateServicePage;
