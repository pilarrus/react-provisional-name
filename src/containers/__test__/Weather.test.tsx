import { render, waitForElement } from "@testing-library/react";
import React from "react";
import WeatherHome from "../Weather/WeatherHome";

test("if adventures are fetched", async () => {
  const { getAllByTestId } = render(<WeatherHome />);
  await waitForElement(() => getAllByTestId("weatherTest"));
});
