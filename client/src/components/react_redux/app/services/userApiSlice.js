import {createApi ,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const userApiSlice=createApi({
    reducerPath:"userApiSlice",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:8000/user-api"}),
    endpoints:(builder)=>({
        userRegister:builder.mutation({
            query:(user_data)=>({
                url:"signup",
                method:"post",
                body:user_data
            })
        }),
        userLogin:builder.mutation({
            query:(user_data)=>({
                url:"login",
                method:"post",
                body:user_data
            })
        })
    })
})


export const {useUserRegisterMutation,useUserLoginMutation}=userApiSlice;
export default userApiSlice;