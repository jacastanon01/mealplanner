import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:4000";
console.log("!!!!!!!!!!!", baseQuery);

export const apiSlice = createApi({
  reducerPath: "",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    getMealData: builder.query({
      query: (data) => ({
        url: `/api?mealUrl=${data.mealUrl}`,
        // url: "/api",
        // body: data,
      }),
    }),
    extractMealData: builder.mutation({
      query: (data) => ({
        url: "/api",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetMealDataQuery, useExtractMealDataMutation } = apiSlice;
