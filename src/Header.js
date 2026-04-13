import Logo from './Logo.svg';
import Nav from './Nav';

function Header(){
    return(
        <header className="Header">
            <div className="container">
                <a href="#home" className="Logo">
                    <img src={Logo}  alt="logo" />
                </a>

                <Nav />
            </div>

        </header>
    );
}
export default Header;