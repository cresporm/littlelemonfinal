import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import BookingPage from './BookingPage';
import {initializeTimes,
  updateTimes} from './BookingPage';
import { MemoryRouter } from 'react-router-dom';
import BookingForm from './BookingForm';

const renderBookingForm = () => {
  const defaultProps = {
    state: [],
    dispatch: jest.fn(),
    submit: jest.fn(),
  };

  render(<BookingForm {...defaultProps} />);

  return defaultProps;
};

test('renders the title of the reservation form',()=>{
  
    render(

    <MemoryRouter>
          <BookingPage/>
    </MemoryRouter>
  );
  const titleElement =screen.getByText("Make your reservation");
  expect (titleElement).toBeInTheDocument();
}

)

test('initializes available times',()=>{

  const data = initializeTimes();
  expect(data.length).toBeGreaterThan(0);

}
)

test('checks that updateTimes returns the right values',()=>{
  //const ntimes  = ["17:00", "18:00", "19:00", "20:00"];
  const today = new Date();
  const updates = updateTimes(today);
  expect(updates.length).toBeGreaterThan(0);
})

test('checks if the submit button is disabled',()=>{
  render(

    <MemoryRouter>
        <BookingPage/>
    </MemoryRouter>

  );
  const submitButton = screen.getByRole("button", {name: /submit/i});
  expect(submitButton).toBeDisabled();

})

test('checks if the fields are empty or not',()=>{
  renderBookingForm();
  const guestsInput = screen.getByLabelText(/number of guests/i);

  userEvent.clear(guestsInput);
  userEvent.type(guestsInput, '15');

  expect(guestsInput).toBeInvalid();
  expect(guestsInput.validity.rangeOverflow).toBe(true);

})

test('checks if a date has been selected',()=>{
  renderBookingForm();
  const dateInput = screen.getByLabelText(/choose date/i, {selector: 'input'});
  const guestsInput = screen.getByLabelText(/number of guests/i,{selector: 'input'});
  const submitButton = screen.getByRole("button", {name: /submit/i});
  userEvent.clear(guestsInput);
  userEvent.type(guestsInput, '6');
  userEvent.type(dateInput, "2026-05-05");

  expect(submitButton).toBeEnabled();



}

)
