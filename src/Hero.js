import Restauranfood from './restauranfood.jpg';
import {Link} from 'react-router-dom';

function Hero(){
    return(
        <div className="hero">
            <div  className="container HeroContent">
                <div className="HeroText">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family-owned restaurant, focused on providing the best dining experience with our unique twist on traditional cuisine.</p>
                    <Link className="hero-button" to="/BookingPage">Reserve a Table</Link>
                </div>
                <img src={Restauranfood} className="Hero-image" alt="Restaurant chef" width="400" />
            </div>
        </div>
    );
}
export default Hero;