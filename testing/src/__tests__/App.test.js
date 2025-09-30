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

  // For Home
  expect(screen.getByText(/my react spa/i)).toBeInTheDocument();
  expect(screen.getByText(/home page/i)).toBeInTheDocument();

  // For About
  userEvent.click(screen.getByText(/about/i));
  expect(screen.getByText(/about page/i)).toBeInTheDocument();

  // Gor Contact
  userEvent.click(screen.getByText(/contact/i));
  expect(screen.getByText(/contact page/i)).toBeInTheDocument();
});
