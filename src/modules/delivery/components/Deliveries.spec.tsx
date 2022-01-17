import { render,screen, waitFor } from "@testing-library/react";
import Deliveries from './Deliveries';
import { store } from "../../../app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("render Deliveries",()=>{
    render(
    <Provider store={store}>
      <BrowserRouter>
      <Deliveries />
      </BrowserRouter>
    </Provider>
         );
    it('should have a table of deliveries',async()=>{
      await waitFor(()=> screen.getByTestId(/delivery-table/i));
      
    })
});