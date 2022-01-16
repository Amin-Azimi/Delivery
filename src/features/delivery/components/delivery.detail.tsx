import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DeliveryModel from "../models/delivery.model";
import { useFetchADeliveryQuery } from "../services/delivery.api";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectedDelivery,
  setActiveDelivery,
  finishDelivery
} from "../services/delivery.slice";
import FinishStatus from "../models/finish.status.model";
import DeliveryPost from "../models/delivery.post.model";

function DeliveryDetail() {
  const dispatch = useAppDispatch();
  let { id } = useParams<"id">();
  const [currnetDelivery, setCurrentDelivery] = useState<DeliveryModel>(
    useAppSelector(selectedDelivery)
  );
  const { data, isFetching } = useFetchADeliveryQuery(id);
  const activeDelivery = useAppSelector(selectedDelivery);

  useEffect(() => {
    console.log("has active?", activeDelivery, currnetDelivery);
  }, []);
  useEffect(() => {
    console.log("has 222?", activeDelivery, currnetDelivery);
  }, [currnetDelivery]);

  const handelFinishDeliveryClick=(status : FinishStatus) =>{
    const deliveryPost : DeliveryPost={
        deliveryId : data?.id as string,
        latitude : data?.latitude as number,
        longitude : data?.longitude as number,
        status : status
    };
    dispatch(finishDelivery(deliveryPost));
  }
  return (
    <>
      {isFetching ? (
        <h1>loading....</h1>
      ) : (
        <>
          <div className="App">
            <h2>Detaisl of delivery {data?.id}</h2>
            <p>Id: {data?.id}</p>
            <p>Customer: {data?.customer}</p>
            <p>address: {data?.address}</p>
            <p>city: {data?.city}</p>
            <p>latitude: {data?.latitude}</p>
            <p>longitude: {data?.longitude}</p>
          </div>
          <div>
            {activeDelivery?.id ? (
              activeDelivery.id === id ? (
                <div>
                    <button onClick={() => handelFinishDeliveryClick(FinishStatus.Delivered)}>Delivered</button>
                    <button onClick={() => handelFinishDeliveryClick(FinishStatus.UnDelivered)}>Not Delivered!!</button>
                </div>
              ) : (
                <span> Has active delivery with Id {activeDelivery?.id}</span>
              )
            ) : (
              <button
                onClick={() =>
                  dispatch(setActiveDelivery(data as DeliveryModel))
                }
              >
                Make Active
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default DeliveryDetail;
