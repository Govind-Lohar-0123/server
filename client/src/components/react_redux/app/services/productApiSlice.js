import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";




const productApiSlice=createApi({
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:8000/product-api"}),
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:()=>({
                url:"get-products",
                method:"get",

            })
        })
    })
})


export const {useGetProductsQuery}=productApiSlice;
export default productApiSlice;