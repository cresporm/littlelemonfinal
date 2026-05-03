
import './App.css';
import { useEffect, useState } from 'react';
import BookingPage from './BookingPage';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {

  const [page, setPage] = useState('main');

  const renderPage=()=>{

    switch(page){
      case 'main':
        return <Main />;
      case 'booking':
        return <BookingPage />;
      default:
        return <Main />;
    }
  }

  return(
     <>
      <Header
        chPage={setPage}
      />
      {renderPage()}
      <Footer />
    </>

  )
   
}

export default App;
