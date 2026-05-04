import { render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';
import {initializeTimes,
  updateTimes} from './BookingPage';
import { MemoryRouter } from 'react-router-dom';

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

