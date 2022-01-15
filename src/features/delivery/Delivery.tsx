import { useState } from "react"; React from 'react';
import {useAppDispatch,useAppSelector} from '../../App/hooks';
import {useFetchDeliveryQuery} from './delivery.api';

function Delivery(){
    const dispatch = useAppDispatch();  
    const {data=[], isFetching} =useFetchDeliveryQuery();

    
}