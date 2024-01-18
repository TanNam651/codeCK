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
      query: (id) => `product/?${id}`,
      transformResponse: responseData => {
        console.log("data");
        console.log(responseData);
        return productAdapter.setAll(initialState, responseData);
      }
    }),
    addNewProduct: builder.mutation({
      query: (initialProduct) => ({
        url: '/product',
        method: 'POST',
        body:{...initialProduct}
      }),
      invalidatesTags: [
        {type:'Post', _id:'LIST'}
      ]
    })
  })
});

export const { useGetProductsQuery, useAddNewProductMutation } = productApiSlice;

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

