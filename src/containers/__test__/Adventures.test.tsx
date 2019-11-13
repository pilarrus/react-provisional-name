import { render, waitForElement } from "@testing-library/react";
import React from "react";
import AdventuresContainer from "../Adventures";

test("if adventures are fetched", async () => {
  const { getAllByTestId } = render(<AdventuresContainer thermalSensationAPI="cold"/>);
  await waitForElement(() => getAllByTestId("adventure"));
});