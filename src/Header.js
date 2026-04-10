import Logo from './logo.svg';
import Nav from './Nav';
function Header(){
    return(
        <header className="App-header">
            <img src={Logo} className="AppLogo" alt="logo" />
            <Nav />
        </header>
    );
}
export default Header;