import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Delivery {
  id: string;
  address: string;
  city: string;
  zipCode: string;
  latitude: number;
  longitude: number;
  customer: string;
}

export const deliverySlice = createApi({
    reducerPath:'api',
    baseQuery :fetchBaseQuery({
        baseUrl :'https://60e84194673e350017c21844.mockapi.io/api',
    })
    ,endpoints(builder){
        return{
            fetchDelivery: builder.query<Delivery[], void>({
                query(){
                    return '/deliveries';
                },
            }),
        };
    },
});

export const {useFetchDeliveryQuery } = deliverySlice;