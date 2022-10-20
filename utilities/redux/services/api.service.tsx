import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const serverApi = createApi({
    reducerPath: "serverApi",
    baseQuery: fetchBaseQuery({baseUrl: process.env.API}),
    endpoints: builder => ({
        getFilteredProducts: builder.mutation({
          query: post => ({
            url: `api/home`,
            method: 'PATCH',
            body: post
          })
        })
      })
});

export const { useGetFilteredProductsMutation } = serverApi;