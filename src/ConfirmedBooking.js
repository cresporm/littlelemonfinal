
import {useLocation} from 'react-router-dom';

function ConfirmedBooking() {

    const location = useLocation();
    const {date,time, guests, occasion, name, email}  = location.state || {};

    return(

        <div className='confirmationMain'>
            <h1>Your reservation for {date}<br/> at {time} for your {occasion}<br/>
            with {guests} guests has been confirmed!✅</h1><br/>
            <h2> {name} all the details have been sent to your email: {email}</h2>
            <h2>Thank you for choosing Little lemon!</h2>
        </div>
    )


}
export default ConfirmedBooking;