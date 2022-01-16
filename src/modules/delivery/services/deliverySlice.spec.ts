import DeliveryModel from '../models/delivery.model';
import deliveryReducer, {
    finishDelivery,selectedDelivery,setActiveDelivery,DeliveryState
} from './delivery.slice'

describe('delivery reducer',()=>{
    const initialState : DeliveryState={
        error:null,
        selectedDelivery:<DeliveryModel>{},
        status: 'idle'
    };
    const delivery:DeliveryModel={
        address:'test',
        city:'city test',
        customer: 'customer test',
        id:'1',
        latitude: 15.23,
        longitude: 14.56,
        zipCode :'4545'
    }
    it('sholud initial state',()=>{
        expect(deliveryReducer(undefined,{ type: 'unknown' })).toEqual(initialState);
    });

    it('should set active delivery',()=>{
        const active = deliveryReducer(initialState,setActiveDelivery(delivery));
        expect(active.selectedDelivery).toEqual(delivery);
    });

    it('should deliver an active delivery',()=>{
        // const postSpy = jest.spyOn(fetch,).mockResolvedValueOnce()
    });
});