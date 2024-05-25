import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/users/login",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["users"],
    }),
    getAllUser: builder.query({
      query: () => ({
        url: `/users`,
        method: "GET",
      }),
      providesTags: ["users"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useLoginMutation, useGetAllUserQuery, useDeleteUserMutation } =
  authApi;
