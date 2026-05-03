import Logo from './Logo.svg';

function Header({chPage}){
    return(
        <header className="Header">
            <div className="container">
                <a href="#home" className="Logo">
                    <img src={Logo}  alt="logo" />
                </a>
                <nav className="Nav">
                    <ul >
                        <button
                            onClick={()=>chPage('main')}
                        >Home</button>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <button
                            onClick={()=>chPage('booking')}
                        >Reservations</button>
                        <li><a href="#order">Order Online</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </nav>
            </div>

        </header>
    );
}
export default Header;