import { render, waitForElement } from "@testing-library/react";
import React from "react";
import SocialHome from "../SocialHome";

test("if adventures are fetched", async () => {
  const { getAllByTestId } = render(<SocialHome />);
  await waitForElement(() => getAllByTestId("socialTest"));
});
