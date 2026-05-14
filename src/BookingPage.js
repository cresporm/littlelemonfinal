import {useReducer, useEffect, useState} from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "./api";
import {useNavigate} from "react-router-dom";

const formatDate = (date) => date.toISOString().split("T")[0];

const initializeTimes = () =>{
    const today = new Date();
    return fetchAPI(today);
};

//This function is the main functions use by the reducer
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
    //Navigate is used when the form is submitted, it redirects to the next page
    const navigate = useNavigate();

    const [date, setDate] = useState(formatDate(new Date()));
    const [dateObject, setDateObject] = useState(new Date());
	const [isValid, setIsValid] = useState(false);
    const [time,setTime]=useState('');
	const [guests,setGuests]=useState('');
	const [occasion,setOccasion]=useState('');
    const [name, setName] = useState('');
    const [email, setEmail] =useState('');

    //Clears the information from the form
	const clearForm=()=>{
		setDate('');
		setTime('');
		setGuests("");
		setOccasion("");
        setName('');
        setEmail('');
	}
    //This variable is used for passing by the functions to the Form (child)
    const formActions = {

        //Updates the date once a new one is selected by the user
        handleChange:(e)=>{
            const selectedDate = e.target.value;
            setDate(selectedDate);
            setDateObject(new Date(selectedDate));
        },
        //Steps for the submission of the form
        handleSubmit :(e) =>{
            e.preventDefault();
            clearForm();
            const data = {date:date,time:time,guests:guests,occasion: occasion, name:name, email:email};
            submitForm(data);

        },
        //When we make sure all the inputs are filled
        handleFormChange:(e)=>{
            setIsValid(e.currentTarget.checkValidity());
        },

        //These are the set functions for our variables, this are being used in the BookingForm component
        sTime: (e)=> {setTime(e.target.value);},

        sGuests: (e)=> {setGuests(e.target.value);},

        sOccasion: (e)=> {setOccasion(e.target.value);},

        sName: (e)=>{setName(e.target.value);},

        sEmail: (e)=>{setEmail(e.target.value);},

    }

    //Saving the previous data in this variable
    const initialState = initializeTimes();

    //Detects when the user has changed the date
    useEffect(()=>{
        if(dateObject){
            dispatch({type:'UPDATE_TIMES', payload:dateObject});
        }
    },[dateObject]);

    //Connects with the API when the user submits the form
    const submitForm= (formData)=>{

        const response =submitAPI(formData)
        if(response){
            //Redirects to this component, which shows the confirmation and the information of the reservation
            navigate('/ConfirmedBooking', {
                replace:true,
                state: formData,
            });
        }
    };

    //Our reducer for updating the available times
    const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

    return (
        <section className="container bookingContainer">
           
                <h1 className="bookingTitle">Reservation page</h1>
                <h2 className="bookingDescription">Make your reservation, fill in the details</h2>

                {/*Form component using actions which contains all the functions used by the form*/}
                <BookingForm
                    times={availableTimes}
                    time={time}
                    date={date}
                    name={name}
                    email={email}
                    actions={formActions}
                    isValid={isValid}
                />
   

        </section>
    );
}
export default BookingPage;
export { initializeTimes, updateTimes };
