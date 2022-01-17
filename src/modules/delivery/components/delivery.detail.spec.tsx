import { render, screen, waitFor } from "@testing-library/react";
import { store } from "../../../app/store";
import { Provider } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectedDelivery,
  setActiveDelivery,
} from "../services/delivery.slice";
import DeliveryModel from "../models/delivery.model";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";


function MockMakeactive() {
  const dispatch = useAppDispatch();
  const activeDelivery = useAppSelector(selectedDelivery);
  const data: DeliveryModel = {
    address: "tes",
    city: "",
    customer: "amin",
    id: "4",
    latitude: 45,
    longitude: 78,
    zipCode: "78",
  };
  return (
    <>
      {activeDelivery ? (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => dispatch(setActiveDelivery(data))}
        >
          Make Active
        </button>
      ) : (
        <div>
          <button type="button" className="btn btn-success">
            Delivered
          </button>
          <button type="button" className="btn btn-danger">
            Not Delivered!!
          </button>
        </div>
      )}
    </>
  );
}

test("make active", async () => {
  render(
    <Provider store={store}>
      <MockMakeactive />
    </Provider>
  );
  const buttonActive = screen.getByText(/Make Active/i);
  act(() => {
    userEvent.click(buttonActive);
  });
  
});
