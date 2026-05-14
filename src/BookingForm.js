


function BookingForm({date, times, time, name, email, isValid, guests, occasion, actions}){


    return(
		
        <form className="formGeneral" onSubmit={actions.handleSubmit} onChange={actions.handleFormChange}>
			
			<div className="formRow">
				<div >
					<label htmlFor="rdate">
						Choose date:
					</label>
					<input
						className="formBox"
						id="rdate"
						type="date"
						name="date"
						value={date}
						onChange={actions.handleChange}
						required
						/>
				</div>
				<div>
					<label htmlFor="time">
						Choose Time
					</label>
						<select
						className="formBox"
							id="time"
							value={time}
							onChange={actions.sTime}
							required
						>
							{
								//This is where we map the available times to the options of the select, this is being updated by the reducer in the BookingPage component
								times.map((avTime,  indice)=>(
									<option key={indice}>{avTime}</option>
								)

								)
							}

						</select>
				</div>

			</div>
			<div className="formRow">

						<div>
							<label htmlFor='guests'>
							Number of guests
							</label>
							<input
							className="formBox"
							id="guests"
							type="number"
							placeholder='1'
							value={guests}
							min='1'
							max='10'
							onChange={actions.sGuests}
							required
							/>

						</div>

						<div>
							<label htmlFor='occasion'>Occasion
							</label>
								<select
								className="formBox"
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

			</div>

			<fieldset className="formRow">
				<legend htmlFor='name'>Your information</legend>
				<div >
					<label htmlFor="name">Your name</label>
					<input
					className='formBox'
					type="text"
					placeholder="Your name"
					value={name}
					onChange={actions.sName}
					id='name'
					required
					/>
				</div>
				<div>

				<div >
					<label htmlFor="email">Your Email</label>
					<input
					className='formBox'
					type="email"
					placeholder="example@email.com"
					value={email}
					onChange={actions.sEmail}
					id='email'
					required
					/>
					</div>
				</div>
			</fieldset>

	<button className='subBtn' type="submit" disabled={!isValid}>Reserve</button>

</form>
    );
}
export default BookingForm;
