import {render, findByText} from '@testing-library/react';
import React from 'react';
import Adventures from '../Adventures';

test("our adventures", async () => {
  const { findAllByTestId, findByText } = render(<Adventures/>);
  const adventures = await findAllByTestId('adventure');
  expect(adventures.length).toBe(9);
  const adventure1 = await findByText(/escalada/i);
  expect(adventure1).toBeVisible();
  const adventure2 = await findByText(/tirolinas/i);
  expect(adventure2).toBeVisible();
  const adventure3 = await findByText(/quad/i);
  expect(adventure3).toBeVisible();
  const adventure4 = await findByText(/rafting/i);
  expect(adventure4).toBeVisible();
  const adventure5 = await findByText(/piragüísmo/i);
  expect(adventure5).toBeVisible();
  const adventure6 = await findByText(/moto de agua/i);
  expect(adventure6).toBeVisible();
  const adventure7 = await findByText(/senderismo/i);
  expect(adventure7).toBeVisible();
  const adventure8 = await findByText(/ski/i);
  expect(adventure8).toBeVisible();
  const adventure9 = await findByText(/snowboard/i);
  expect(adventure9).toBeVisible();
});