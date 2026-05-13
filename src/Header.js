import Logo from './Logo.svg';
import {Link} from 'react-router-dom';


function Header(){
    return(
        <header className="Header">
            <div className="container">
                <Link to='/Main' className="Logo">
                    <img src={Logo}  alt="logo" />
                </Link>
                 {/*We use Link for the navigation bar*/}
                <nav className="Nav">
                    <div className="NavElement_container">
                        <Link className="NavElement" to='/Main'>Home</Link>
                        <Link className="NavElement" to='/Main'>About</Link>
                        <Link className="NavElement" to='/Main'>Menu</Link>
                        <Link className="NavElement" to='/BookingPage'>Reservations</Link>
                        <Link className="NavElement" to='/BookingPage'>Order Online</Link>
                        <Link className="NavElement" to='/BookingPage'>Login</Link>
                    </div>
                </nav>
            </div>

        </header>
    );
}
export default Header;