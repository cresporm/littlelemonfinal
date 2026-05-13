


function BookingForm({date, time, isValid, guests, occasion, actions}){


    return(
        <form onSubmit={actions.handleSubmit} onChange={actions.handleFormChange}>
			<div>
				<div>
					<label htmlFor="rdate">
						Choose date:
					</label>
					<input
						id="rdate"
						type="date"
						name="date"
						value={date}
						onChange={actions.handleChange}
						required
						/>
				</div>
				<div>
					<label htmlFor="time">Choose Time

					</label>
						<select
							id="time"
							value={time}
							onChange={actions.sTime}
							required
						>
							{
								time.map((avTime,  indice)=>(
									<option key={indice}>{avTime}</option>
								)

								)
							}

						</select>
				</div>

				<label htmlFor='guests'>
					Number of guests
				</label>
					<input
					id="guests"
					type="number"
					placeholder='1'
					value={guests}
					min='1'
					max='10'
					onChange={actions.sGuests}
					required
					/>

				<div>
					<label htmlFor='occasion'>Occasion
					</label>
						<select
						id='occasion'
						value={occasion}
						onChange={actions.sOccasion}
						required
						>
							<option value="Birthday">Birthday</option>
							<option value="Anniversary">Anniversary</option>
							<option value="Other">Other</option>
						</select>
				</div>


			<button aria-label="On Click" type="submit" disabled={!isValid}>Submit</button>
			</div>

</form>
    );
}
export default BookingForm;
