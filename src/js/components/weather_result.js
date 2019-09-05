import React from "react";

const WeatherResult = props => (
	<div className="weather__info">
	 {
	 	props.city && props.country && <p className="weather__key"> Location:
	 		<span className="weather__value"> { props.city }, { props.country }</span>

	 	</p>
	 }
	 {
	 	props.temperature && <p className="weather__key"> Temperature:
	 		<span className="weather__value"> { props.temperature }	</span>
			<span className="weather__value"> { props.city }, { props.country }</span>
			<img src={props.img} alt="logo"/>

	 	</p>
	 }
	 {
	 	props.humidity && <p className="weather__key"> Humidity:
	 		<span className="weather__value"> { props.humidity } </span>
	 	</p>
	 }
	 {
	 	props.description && <p className="weather__key"> Conditions:
	 		<span className="weather__value"> { props.description } </span>

	 </p>
	 }
	 {
		props.current_location && <p className="weather__key"> Current Location:
			<span className="weather__value"> { props.current_location } </span>
	 </p>
	 }


	 {
	 	props.error && <p className="weather__error">{ props.error }</p>
	 }
	</div>
);

export default WeatherResult;
