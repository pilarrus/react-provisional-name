import { render } from "@testing-library/react";
import React from "react";
import App from "../App";

test("Hello test", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("main").children.length).toBe(3);
});
