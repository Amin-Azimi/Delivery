import { createAsyncThunk, createSlice,PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import DeliveryModel from "../models/delivery.model";


export const serivceUrl = 'https://60e84194673e350017c21844.mockapi.io/api';
export const deliveryApi = createApi({
    reducerPath:'deliveryApi',
    baseQuery :fetchBaseQuery({
        baseUrl :serivceUrl,
    })
    ,endpoints(builder){
        return{
            fetchDeliveries: builder.query<DeliveryModel[], void>({
                query(){
                    return '/deliveries';
                },
            }),
            fetchADelivery:builder.query<DeliveryModel,string | void>({
                query(id){
                    return `/deliveries/${id}`;
                }
            }),

        };
    },
});


export const {useFetchDeliveriesQuery,useFetchADeliveryQuery } = deliveryApi;