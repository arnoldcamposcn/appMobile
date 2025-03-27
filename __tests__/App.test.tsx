/**
 * @format
 */

import React from "react";
import { render } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { store } from "../src/store/store";
import App from "../App";

test("Debe renderizar la aplicación sin errores", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByTestId("app-navigator")).toBeTruthy();
});
