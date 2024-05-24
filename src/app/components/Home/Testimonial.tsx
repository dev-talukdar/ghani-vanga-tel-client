'use client';
import { useGetAllReviewQuery } from '@/redux/features/reviewApi/reviewApi';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Loader from '../Shared/Loader/Loader';
import { Rating } from '@smastrom/react-rating';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css';

type TReviews = {
  _id: string;
  clientName: string;
  comments: string;
  clientOrganization: string;
  clientDesignation: string;
  starRating: number;
  clientPhotoUrl: string;
  clientCountry: string;
};

const Testimonial = () => {
  const { data: reviews, isFetching } = useGetAllReviewQuery(undefined);
  // console.log(reviews);
  if (isFetching) {
    <Loader />;
  }
  return (
    <div className="w-full max-w-[1200px] mx-auto my-16">
      <p className="my-16 text-center text-6xl font-bold text-slate-600">
        Words of Praise and Trust
      </p>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {reviews?.data?.map((reviews: TReviews) => (
          <SwiperSlide key={reviews._id}>
            <div className="flex flex-col lg:flex-row gap-12 h-full w-full items-center justify-between lg:px-14 space-y-4 px-8">
              <div className="w-full">
                <Image
                  src={reviews.clientPhotoUrl}
                  alt={reviews.clientName}
                  width={400}
                  height={400}
                  className="w-92 h-96 rounded-2xl shadow-2xl object-cover"
                />
              </div>

              <div>
                <div className="flex items-end justify-start mb-4">
                  <FaQuoteLeft className="w-8 h-8 opacity-30 text-primary" />
                </div>

                <div className="text-left">
                  <p className="text-slate-600 italic ">{reviews.comments}</p>
                </div>

                <div className="flex items-end justify-end mb-4">
                  <FaQuoteRight className="w-8 h-8 opacity-30 text-primary" />
                </div>

                <div className="my-6  ">
                  <Rating
                    className=" "
                    style={{ maxWidth: 100 }}
                    value={reviews.starRating}
                    readOnly
                  />

                  <p className="font-bold text-slate-600">
                    {reviews.clientName}
                  </p>
                  <p className="font-medium text-slate-600">
                    {reviews.clientDesignation} at{' '}
                    <span className="text-orange-400 font-semibold">
                      {reviews.clientOrganization}
                    </span>
                  </p>
                  <p className="font-bold  text-slate-700">
                    {reviews.clientCountry}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
