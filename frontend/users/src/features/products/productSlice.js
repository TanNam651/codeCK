import {
  createSelector, createEntityAdapter
} from "@reduxjs/toolkit";

import { apiSlice } from "../../app/api/apiSlice";

const productAdapter = createEntityAdapter({
  selectId: (product) => product._id,
  sortComparer: (a, b) => b._id.localeCompare(a._id)
});

const initialState = productAdapter.getInitialState();

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/product',
      transformResponse: responseData => {
        console.log("Data");
        console.log(responseData);
        return productAdapter.setAll(initialState, responseData);
      },
      providesTags: (result, err, arg) => [
        { type: 'Product', _id: 'LIST' },
        ...result.ids.map(_id => ({ type: 'Product', _id }))
      ]
    }),
    getProductById: builder.query({
      query: (id) => `/product/65a78efa5171310866ebaa46`,
      transformResponse: responseData => {
        console.log("data");
        console.log(responseData);
        return productAdapter.setAll(initialState, responseData);
      }
    }),
  })
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApiSlice;

export const selectProductResult = productApiSlice.endpoints.getProducts.select();

const selectProductData = createSelector(
  selectProductResult,
  productResult => productResult.data
);

export const {
  selectAll: selectAllProduct,
  selectById: selectProductById,
  selectIds: selectProductIds
} = productAdapter.getSelectors((state) => selectProductData(state) ?? initialState);

