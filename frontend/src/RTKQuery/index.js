import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => "/api/items",
    }),
    createItem: builder.mutation({
      query: (body) => ({
        url: "/api/items",
        method: "POST",
        body,
      }),
    }),
    deleteItem: builder.mutation({
      query: (id) => ({
        url: `/api/items/${id}`,
        method: "DELETE",
      }),
    }),
    editItem: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/api/items/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetItemsQuery,
  useCreateItemMutation,
  useDeleteItemMutation,
  useEditItemMutation,
} = api;
