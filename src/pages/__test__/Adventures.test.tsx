import {render} from '@testing-library/react';
import React from 'react';
import Adventures from '../Adventures';

test("our adventures", async () => {
  const { findAllByTestId } = render(<Adventures/>);
  const adventures = await findAllByTestId('adventure');
  expect(adventures.length).toBe(9);
});