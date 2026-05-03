import { render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';
import {initializeTimes, 
  updateTimes, 
  initialState} from './BookingPage';

test('renders the title of the reservation form',()=>{
  render(<BookingPage/>);
  const titleElement =screen.getByText("Make your reservation");
  expect (titleElement).toBeInTheDocument();
}

)

test('initializes available times',()=>{
  
  const initState = initialState;
  const data = initializeTimes(initState);
  expect (data.times ).toEqual([
    "17:00",
   "18:00",
   "19:00",
   "20:00",

  ])
}
)

test('checks that updateTimes returns the right values',()=>{
  const ntimes  = ["17:00", "18:00", "19:00", "20:00"];
  const updates = updateTimes(ntimes);
  expect (updates).toEqual(
    [
    "17:00",
   "18:00",
   "19:00",
   "20:00",

  ]

  )


})

