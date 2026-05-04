import {useReducer, useEffect} from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "./api";
import {useNavigate} from "react-router-dom";


export const updateTimes =(selected)=>{

        const newDate = fetchAPI(selected);
        return newDate;
     }

const reducer =(state, action)=>{

    switch(action.type){

        case 'UPDATE_TIMES':
            const newTime = updateTimes(action.payload);
            return newTime;
        case 'CHECK_TIMES':
            return state;
        default:
            return state;
    }

}
    export const initializeTimes = ()=>{

        const today = new Date();
        return fetchAPI(today);

    };

function BookingPage(){

    const navigate = useNavigate();



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

    const initialState = initializeTimes();

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <section>
           <div>
                <h1>Make your reservation</h1>
                <BookingForm state={state} dispatch={dispatch} submit={submitForm}/>
           </div>

        </section>
    );
}
export default BookingPage;
