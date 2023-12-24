// App.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("test heading", () => {
  render(<App />);
  expect(screen.getByRole("heading")).toHaveTextContent(/TDD is cool/i);
});
