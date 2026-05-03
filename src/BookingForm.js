import {useState} from 'react';


function BookingForm({state, dispatch, submit}){
	
	const [date,setDate]=useState('');
	const [time,setTime]=useState('');
	const [guests,setGuests]=useState('');
	const [occasion,setOccasion]=useState('');

	//for cleaning the form
	const clearForm=()=>{
		setDate('');
		setTime('');
		setGuests("");
		setOccasion("");
	}
	//change on the selected date
	const handleChange=(e)=>{
		const selectedDate = e.target.value;
		setDate(selectedDate);
		const dateObject  = new Date(selectedDate);
		dispatch( {type:'UPDATE_TIMES', payload: dateObject} );
	}
	//options for submission
	const handleSubmit =(e) =>{
		e.preventDefault();
		clearForm();
		const data = {date,time,guests,occasion};
		submit(data);

	}

    return(
        <form onSubmit={handleSubmit}>
			<div>
				<div>
					<label htmlFor="res-date">
						Choose date:
					</label>
					<input
						id="res-date"
						type="date"
						name="date"
						value={date}
						onChange={handleChange}
						/>
				</div>
				<div>
				<label htmlFor="time">Choose Time

				</label>
					<select
						id="time"
						value={time}
						onChange={(e)=>setTime(e.target.value)}
					>
						{
							state.map((avTime,  indice)=>(
								<option key={indice}>{avTime}</option>
							)

							)
						}

					</select>
				</div>

				<label htmlFor='guests'>Number of guests

				</label>
					<input
					id="guests"
					type="number"
					placeholder='1'
					value={guests}
					min='1'
					max='10'
					onChange={(e)=>setGuests(e.target.value)}
					/>

				<div>
					<label htmlFor='occasion'>Occasion

					</label>
						<select
						id='occasion'
						value={occasion}
						onChange={(e)=>setOccasion(e.target.value)}
						>
							<option value="Birthday">Birthday</option>
							<option value="Anniversary">Anniversary</option>
							<option value="Other">Other</option>
						</select>
				</div>


			<button type="submit">Submit</button>
			</div>

</form>
    );
}
export default BookingForm;
