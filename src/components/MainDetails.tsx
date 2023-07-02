import { useEffect, useState } from "react";
import { getDataFromField } from "../firebase";

function MainDetails(props) {
	const getFirstName = () => {
		const firstNamesField =
			props.sex === "male" ? "maleNames" : "femaleNames";
		getDataFromField("namesDoc", firstNamesField).then((data) => {
			const randomName = props.getRandomValue(data);
			props.setFirstName(randomName || "random");
		});
	};

	const getLastName = () => {
		const lastNamesField = `${props.species}Names`;
		getDataFromField("namesDoc", lastNamesField).then((data) => {
			const randomName = props.getRandomValue(data);
			props.setLastName(randomName || "random");
		});
	};

	useEffect(() => {
		getFirstName();
		getLastName();
	}, []);
	
	return (
		<div>
			<h2>
				{props.firstName} {props.lastName}
			</h2>
		</div>
	);
}

export default MainDetails;
