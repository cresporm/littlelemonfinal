
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ConfirmedBooking from './ConfirmedBooking';
import BookingPage from './BookingPage';

function App() {


  return(
     <BrowserRouter>
      <Header />
      <main>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/Main" element={<Main />}/>
                <Route path="/BookingPage" element={<BookingPage />}/>
                <Route path="/ConfirmedBooking" element={<ConfirmedBooking />}/>
            </Routes>
      </main>
     <Footer />
    </BrowserRouter>

  )
}

export default App;
