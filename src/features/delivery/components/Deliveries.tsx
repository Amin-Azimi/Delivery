import { useState } from "react";
import {useAppDispatch,useAppSelector} from '../../../app/hooks'
import {useFetchDeliveriesQuery } from '../services/delivery.api';
import DeliveryModel from "../models/delivery.model";
import {finishDelivery,setActiveDelivery} from '../services/delivery.slice'

export  default function Deliveries(){
    const dispatch = useAppDispatch();  
    const {data=[], isFetching} =useFetchDeliveriesQuery();
    const [currnetDelivery,setCurrentDelivery] = useState<DeliveryModel>({
        id:'4',address:'956 Ayden Place',city:'Santa Clarita',customer:'Lisa Cummings',latitude:-15.5464,longitude:-136.6966,zipCode:'94369'})
    return(
        <div>
            {isFetching?<h1>loading....</h1>:
            <table>
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Customer
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map( item => (
                        <tr key={item.id}>
                            <td> <a href={"delivery/"+item.id}>{item.id}</a>  </td>
                            <td> <a href={"delivery/"+item.id}>{item.customer}</a>  </td>
                        </tr>
                    ))}
                </tbody>               
            </table>
}
            <button
          onClick={() => dispatch(setActiveDelivery(currnetDelivery))}
        >
            finish
        </button>
        {currnetDelivery.id}
        </div>
    )
}