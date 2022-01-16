import { createAsyncThunk, createSlice,PayloadAction } from "@reduxjs/toolkit";
import DeliveryModel from "../models/delivery.model";
import { RootState } from '../../../app/store';
import DeliveryPost from "../models/delivery.post.model";

export interface DeliveryState {
    status : 'idle' | 'loading' | 'failed' | 'success',
    selectedDelivery: DeliveryModel,
    error : any
  }
  const initialState : DeliveryState={
      status :"idle",
      selectedDelivery:{} as DeliveryModel,
      error :null
  }
  
  //status must be enum
  export const finishDelivery = createAsyncThunk(
      'delivery/postDelivery',
      async (delivery:DeliveryPost) =>{
          try{
            //   console.log('delivery finish:',delivery);
              const rawResponse= await fetch('https://60e84194673e350017c21844.mockapi.io/api/finishDelivery2',{
                  method: 'POST',
                  headers:{
                      'Content-Type': 'application/json'
                  },
                  body : JSON.stringify({deliveryId:delivery.deliveryId,status:delivery.status,latitude:delivery.latitude,longitude:delivery.longitude})
              })
              return await rawResponse.json();
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
          setActiveDelivery:(state , action:PayloadAction<DeliveryModel>)=>{
              console.log('active is:',action.payload);
              state.selectedDelivery = action.payload;
          },
      },
      extraReducers:(builder)=> {
          builder.addCase(finishDelivery.pending,(state,action)=>{
              state.status = 'loading';
          })
          .addCase(finishDelivery.fulfilled,(state,action)=>{
              state.status = 'success';
              console.log('success');
              state.selectedDelivery = {} as DeliveryModel;
          })
          .addCase(finishDelivery.rejected,(state,action)=>{
              state.status = 'failed';
              state.error = action.error;
          })
      }
  
  });
export const {setActiveDelivery } = deliverySlice.actions;
export const selectedDelivery = (state:RootState) => state.delivery.selectedDelivery;
export default deliverySlice.reducer;