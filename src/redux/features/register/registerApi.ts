import { baseApi } from '../../api/baseApi';

const registerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userInfo) => {
        console.log(userInfo);
        return {
          url: '/users/register',
          method: 'POST',
          body: userInfo,
        };
      },
    }),
  }),
});

export const { useRegisterMutation } = registerApi;
