import { useState } from "react";
import { useParams } from "react-router-dom";
import DeliveryModel from "../models/delivery.model";
import {useFetchADeliveryQuery} from '../services/delivery.api';

function DeliveryDetail(){
    let {id} = useParams<"id">();
    const [currnetDelivery,setCurrentDelivery] = useState<DeliveryModel>();
    const {data,isFetching} = useFetchADeliveryQuery(id);
    return(
        <>
            {isFetching? <h1>loading....</h1>:
            <div  className="App">
                <h2>Detaisl of delivery {data?.id}</h2>
                <p>Id: {data?.id}</p>
                <p>Customer: {data?.customer}</p>
                <p>address: {data?.address}</p>
                <p>city: {data?.city}</p>
                <p>latitude: {data?.latitude}</p>
                <p>longitude: {data?.longitude}</p>
            </div>
        }
        </>
        
    )
}

export default DeliveryDetail;