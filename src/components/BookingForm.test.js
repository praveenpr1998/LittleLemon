import { render, screen, fireEvent } from "@testing-library/react";
import { BookingForm } from "./BookingForm";

test("Renders the BookingForm date picker", () => {
  render(<BookingForm />);
  const datePicker = screen.getByText("Choose date");
  expect(datePicker).toBeInTheDocument();
});

test("Submits with the correct data when submitted", () => {
  const mockOnSubmit = jest.fn();

  const { getByLabelText, getByRole } = render(
    <BookingForm onSubmit={mockOnSubmit} />
  );

  const dateInput = getByLabelText("Choose date");
  const timeSelect = getByLabelText("Choose time");
  const guestInput = getByLabelText("Number of guests");
  const occasionInput = getByLabelText("Occasion");

  fireEvent.change(dateInput, { target: { value: "2023-02-01" } });
  fireEvent.change(timeSelect, { target: { value: "18:00:00" } });
  fireEvent.change(guestInput, { target: { value: "2" } });
  fireEvent.change(occasionInput, { target: { value: "Birthday" } });

  const form = getByRole("booking");
  fireEvent.submit(form);

  expect(mockOnSubmit).toHaveBeenCalledWith({
    date: "2023-02-01",
    time: "18:00:00",
    numberOfGuests: "2",
    occasion: "Birthday",
  });
});
