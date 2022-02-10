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
import Detail from "./DeliveryDetail/details";

function DeliveryDetail() {
  const dispatch = useAppDispatch();
  let { id } = useParams<"id">();
  const { data, isFetching } = useFetchADeliveryQuery(id);
  const activeDelivery = useAppSelector(selectedDelivery);

  const handelFinishDeliveryClick=(status : FinishStatus) =>{
    const delivery: DeliveryModel = data as DeliveryModel;
    const deliveryPost : DeliveryPost={
        deliveryId : delivery.id ,
        latitude : delivery.latitude ,
        longitude : delivery.longitude ,
        status : status
    };
    dispatch(finishDelivery(deliveryPost));
  }
  
  return (
    <>
      {isFetching ? (
        <h1>loading....</h1>
      ) : (
        data?
        <>
          <div className="App"  data-testid="delivery-information">
          <Detail address={data.address } city={data.city} 
          customer={data.customer} id={data.id} latitude={data.latitude} longitude={data.longitude}
          zipCode={data.zipCode} />

          <div>
            {activeDelivery?.id ? (
              activeDelivery.id === id ? (
                <div>
                    <button type="button" className="btn btn-success" onClick={() => handelFinishDeliveryClick(FinishStatus.Delivered)}>Delivered</button>
                    <button type="button" className="btn btn-danger" onClick={() => handelFinishDeliveryClick(FinishStatus.UnDelivered)}>Not Delivered!!</button>
                </div>
              ) : (
                <span> Has active delivery with Id {activeDelivery.id}</span>
              )
            ) : (
              <button type="button" className="btn btn-primary"
                onClick={() =>
                  dispatch(setActiveDelivery(data as DeliveryModel))
                }
              >
                Make Active
              </button>
            )}
          </div>
          </div>
        </>:
        <h3>Error in loading</h3>
      )}
    </>
  );
}

export default DeliveryDetail;
