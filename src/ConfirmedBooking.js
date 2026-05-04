
import {useLocation} from 'react-router-dom';

function ConfirmedBooking() {

    const location = useLocation();
    const {date,time, guests, occasion}  = location.state || {};

    return(

        <div className='confirmationMain'>
            <h1 className='details'>Your reservation for {date} at {time} <br/>for your {occasion} with
            {guests} guests<br/> has been confirmed!✅</h1>
        </div>
    )


}
export default ConfirmedBooking;