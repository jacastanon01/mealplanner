import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://rtk-meal-planner.onrender.com/"
    : "http://localhost:4000";

export const apiSlice = createApi({
  reducerPath: "",
  baseQuery: fetchBaseQuery({ baseUrl }),
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
