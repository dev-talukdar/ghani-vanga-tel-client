import { baseApi } from '../../api/baseApi';

const queryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllQuery: builder.query({
      query: () => ({
        url: `/queries`,
        method: 'GET',
      }),
      providesTags: ['queries'],
    }),
    getMarkedQuery: builder.query({
      query: () => ({
        url: `/queries/marked`,
        method: 'GET',
      }),
      providesTags: ['queries'],
    }),
    getSingleQuery: builder.query({
      query: (id: string) => ({
        url: `/queries/${id}`,
        method: 'GET',
      }),
      providesTags: ['queries'],
    }),
    createQuery: builder.mutation({
      query: (queryData) => ({
        url: '/queries/create-query',
        method: 'POST',
        body: queryData,
      }),
      invalidatesTags: ['queries'],
    }),
    updateQuery: builder.mutation({
      query: (id) => ({
        url: `/queries/${id}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['queries'],
    }),
    deleteQuery: builder.mutation({
      query: (id) => ({
        url: `/queries/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['queries'],
    }),
  }),
});

export const {
  useCreateQueryMutation,
  useGetAllQueryQuery,
  useGetMarkedQueryQuery,
  useGetSingleQueryQuery,
  useUpdateQueryMutation,
  useDeleteQueryMutation,
} = queryApi;
