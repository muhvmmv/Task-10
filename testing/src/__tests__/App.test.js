// src/__tests__/App.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

test("renders Home page and navigates to About and Contact pages", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Home page
  expect(screen.getByText(/my react spa/i)).toBeInTheDocument();
  expect(screen.getByText(/home page/i)).toBeInTheDocument();

  // Navigate to About
  userEvent.click(screen.getByText(/about/i));
  expect(screen.getByText(/about page/i)).toBeInTheDocument();

  // Navigate to Contact
  userEvent.click(screen.getByText(/contact/i));
  expect(screen.getByText(/contact page/i)).toBeInTheDocument();
});
