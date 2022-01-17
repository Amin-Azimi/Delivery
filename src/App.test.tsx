import React from "react";
import { render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("renders home page", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  const result = screen.getByText (/About/i) ;
  expect(result).toBeInTheDocument();
  await screen.findAllByText(/Home/i);
});
