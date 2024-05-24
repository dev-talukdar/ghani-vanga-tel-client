import { baseApi } from '../../api/baseApi';

const reviewsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    submitReview: build.mutation({
      query: (data) => {
        // console.log(data);
        return {
          url: '/reviews/submit-review',
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['reviews'],
    }),
    // get all Reviews started from here
    getAllReview: build.query({
      query: () => ({
        url: '/reviews',
        method: 'GET',
      }),
      providesTags: ['reviews'],
    }),
    //get single Reviews started from here
    getReview: build.query({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: 'GET',
      }),
      providesTags: (id) => [{ type: 'reviews', id }],
    }),
    // delete Review started from here
    deleteReview: build.mutation({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['reviews'],
    }),
  }),
});

export const {
  useSubmitReviewMutation,
  useGetAllReviewQuery,
  useGetReviewQuery,
  useDeleteReviewMutation,
} = reviewsApi;
