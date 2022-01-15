import { useState } from "react";
import {useAppDispatch,useAppSelector} from '../../app/hooks'
import {useFetchDeliveryQuery} from './delivery.api';

export function Delivery(){
    const dispatch = useAppDispatch();  
    const {data=[], isFetching} =useFetchDeliveryQuery();

    return(
        <div>
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
                            <td>{item.id} </td>
                            <td>{item.customer} </td>
                        </tr>
                    ))}
                </tbody>               
            </table>
        </div>
    )
}