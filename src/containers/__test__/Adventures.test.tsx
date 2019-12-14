import { render } from "@testing-library/react";
import React from "react";
import AdventuresContainer from "../Adventures";

test.skip("warmth adventures", async () => {
  const { findAllByTestId, findByText } = render(<AdventuresContainer thermalSensationAPI="warmth"/>);
  const adventures = await findAllByTestId('adventure');
  expect(adventures.length).toBe(3);
  const adventure1 = await findByText(/escalada/i);
  expect(adventure1).toBeInTheDocument();
  const adventure2 = await findByText(/tirolinas/i);
  expect(adventure2).toBeInTheDocument();
  const adventure3 = await findByText(/quad/i);
  expect(adventure3).toBeInTheDocument();
});

test.skip("very hot adventures", async () => {
  const { findAllByTestId, findByText } = render(<AdventuresContainer thermalSensationAPI="very hot"/>);
  const adventures = await findAllByTestId('adventure');
  expect(adventures.length).toBe(3);
  const adventure1 = await findByText(/rafting/i);
  expect(adventure1).toBeInTheDocument();
  const adventure2 = await findByText(/piragüísmo/i);
  expect(adventure2).toBeInTheDocument();
  const adventure3 = await findByText(/moto de agua/i);
  expect(adventure3).toBeInTheDocument();
});

test.skip("cold adventures", async () => {
  const { findAllByTestId, findByText } = render(<AdventuresContainer thermalSensationAPI="cold"/>);
  const adventures = await findAllByTestId('adventure');
  expect(adventures.length).toBe(3);
  const adventure1 = await findByText(/senderismo/i);
  expect(adventure1).toBeInTheDocument();
  const adventure2 = await findByText(/ski/i);
  expect(adventure2).toBeInTheDocument();
  const adventure3 = await findByText(/snowboard/i);
  expect(adventure3).toBeInTheDocument();
});
