import {useReducer, useEffect, useState} from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "./api";
import {useNavigate} from "react-router-dom";


const updateTimes =(availableTimes, action)=>{

    switch(action.type){
        case 'UPDATE_TIMES':
                const newDate = fetchAPI(action.payload);
                return newDate;
        case 'CHECK_TIMES':
            return availableTimes;
        default:
            return availableTimes;
        }
    };


function BookingPage(){

    const navigate = useNavigate();

    const [date, setDate] = useState(new Date());
    const [dateObject, setDateObject] = useState(new Date());
	const [isValid, setIsValid] = useState(false);
    const [time,setTime]=useState('');
	const [guests,setGuests]=useState('');
	const [occasion,setOccasion]=useState('');

	const clearForm=()=>{
		setDate('');
		setTime('');
		setGuests("");
		setOccasion("");
	}

    const formActions = {

        handleChange:(e)=>{
            const selectedDate = e.target.value;
            setDate(selectedDate);
            setDateObject(new Date(selectedDate));
        },

        handleSubmit :(e) =>{
            e.preventDefault();
            clearForm();
            const data = {date:date,time:time,guests:guests,occasion: occasion};
            submitForm(data);

        },

        handleFormChange:(e)=>{
            setIsValid(e.currentTarget.checkValidity());
        },

        sTime: (e)=> {setTime(e.target.value);},

        sGuests: (e)=> {setGuests(e.target.value);},

        sOccasion: (e)=> {setOccasion(e.target.value);},

    }


    const initializeTimes = () =>{
        const today = new Date();
        return fetchAPI(today);
        };

    const initialState = initializeTimes();

    useEffect(()=>{
        if(dateObject){
            dispatch({type:'UPDATE_TIMES', payload:dateObject});
        }
    },[dateObject]);

    const submitForm= (formData)=>{

        const response =submitAPI(formData)
        if(response){

            navigate('/ConfirmedBooking', {
                replace:true,
                state: formData,
            });
        }
        console.log(response);
    };
    const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

    return (
        <section>
           <div className="bookingContainer">
                <h1 className="bookingTitle">Reservation page</h1>
                <p className="bookingDescription">Make your reservation, fill in the details</p>
                <BookingForm
                    time={availableTimes}
                    date={date}
                    actions={formActions}
                    isValid={isValid}

                    className="bookingForm"
                />
           </div>

        </section>
    );
}
export default BookingPage;
