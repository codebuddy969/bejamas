import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const serverApi = createApi({
    reducerPath: "serverApi",
    baseQuery: fetchBaseQuery({baseUrl: process.env.API}),
    endpoints: (builder) => ({
        getProductsByCategory: builder.query<[], string>({
            query: (name) => `api/home`,
        }),
    }),
});

export const { useGetProductsByCategoryQuery } = serverApi;