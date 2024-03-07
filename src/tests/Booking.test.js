import { render, screen } from "@testing-library/react";
import BookingPage from "../pages/BookingPage";

test("Booking page", () => {
  render(<BookingPage />);
  const h1Element = screen.getByText(/Booking/);
  expect(h1Element).toBeInTheDocument();
});
