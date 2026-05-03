import {useReducer, useEffect} from "react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "./api";

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

function BookingPage(){


    const initializeTimes = ()=>{

        const today = new Date();
        return fetchAPI(today);

    };
    const initialState = initializeTimes();

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <section>
            <h1>Make your reservation</h1>
            <BookingForm state={state} dispatch={dispatch}/>
        </section>
    );
}
export default BookingPage;
