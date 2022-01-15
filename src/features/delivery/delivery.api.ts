import { createAsyncThunk, createSlice,PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import DeliveryModel from "./delivery.model";

interface DeliveryState {
  status : 'idle' | 'loading' | 'failed',
  selectedDelivery: DeliveryModel
}
const initialState : DeliveryState={
    status :"idle",
    selectedDelivery:<DeliveryModel>{}
}

//status must be enum
export const finishDelivery = createAsyncThunk(
    'delivery/postDelivery',
    async(deliveryId:string,status:string,latitude:number,longitude:number) =>{
        try{
            await fetch('https://60e84194673e350017c21844.mockapi.io/api/finishDelivery')
        }
        catch(error:any){
            throw Error(error)
        }
    }
);
const deliverySlice = createSlice({
    name:"delivery",
    initialState ,
    reducers :{
        activeDelivery:(state , action:PayloadAction<DeliveryModel>)=>{
            state.selectedDelivery = action.payload;
        },
        // finishDelivery:(state) =>{
        //     state.selectedDelivery = <DeliveryModel>{};
        // }
    },
    extraReducers:{

    }

});

const deliveryApi = createApi({
    reducerPath:'api',
    baseQuery :fetchBaseQuery({
        baseUrl :'https://60e84194673e350017c21844.mockapi.io/api',
    })
    ,endpoints(builder){
        return{
            fetchDeliveries: builder.query<DeliveryModel[], void>({
                query(){
                    return '/deliveries';
                },
            }),
            fetchADelivery:builder.query<DeliveryModel,void>({
                query(id){
                    return `/deliveries/${id}`;
                }
            }),

        };
    },
});


export const {useFetchDeliveriesQuery,useFetchADeliveryQuery } = deliveryApi;