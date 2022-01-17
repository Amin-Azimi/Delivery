import fetchMock from "jest-fetch-mock";
import { deliveryApi } from './delivery.api';
import { store } from '../../../app/store';

beforeEach((): void => {
    fetchMock.resetMocks();
  });
describe("list deliveris",()=>{
  
    test("get all",()=>{
        return store.dispatch<any>(deliveryApi.endpoints.fetchDeliveries.initiate(undefined))
    .then((action:any)=>{
        const { status, data, isSuccess } = action;
        expect(status).toBe("fulfilled");
        expect(isSuccess).toBe(true);
        expect(data.length).toBeGreaterThan(0);
        expect(data[0]).toHaveProperty('customer');
        expect(data[0]).toHaveProperty('id');

    })
    })
});  