import { baseApi } from '../../api/baseApi';

const teamApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createMember: builder.mutation({
      query: (memberData) => ({
        url: '/teams/create-team-member',
        method: 'POST',
        body: memberData,
      }),
      invalidatesTags: ['teams'],
    }),

    getAllTeamMember: builder.query({
      query: () => ({
        url: `/teams`,
        method: 'GET',
      }),
      providesTags: ['teams'],
    }),

    getMember: builder.query({
      query: (id) => ({
        url: `/teams/${id}`,
        method: 'GET',
      }),
      providesTags: ['teams'],
    }),

    updateMember: builder.mutation({
      query: (data) => {
        return {
          url: `/teams/${data.id}`,
          method: 'PATCH',
          body: data.updatedData,
        };
      },
      invalidatesTags: ['teams'],
    }),

    deleteMember: builder.mutation({
      query: (id) => ({
        url: `/teams/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['teams'],
    }),
  }),
});

export const {
  useCreateMemberMutation,
  useGetMemberQuery,
  useGetAllTeamMemberQuery,
  useDeleteMemberMutation,
  useUpdateMemberMutation,
} = teamApi;
