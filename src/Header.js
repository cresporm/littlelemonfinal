import Logo from './Logo.svg';
import {Link} from 'react-router-dom';


function Header(){
    return(
        <header className="Header">
            <div className="container">
                <a href="#home" className="Logo">
                    <img src={Logo}  alt="logo" />
                </a>
                <nav className="Nav">
                    <Link to='/Main'>Home</Link>
                    <Link to='/BookingPage'>Booking</Link>
                </nav>
            </div>

        </header>
    );
}
export default Header;