import { useEffect, useState } from "react";
import { getDataFromField } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBriefcase,
	faHeart,
	faBabyCarriage,
} from "@fortawesome/free-solid-svg-icons";

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
		props.getAppearance();
		props.getBodyType();
		props.getJob();
	}, []);

	return (
		<div className="px-3 py-5">
			<h2 className="text-3xl">
				{props.firstName} {props.lastName}
			</h2>
			<div className="flex flex-col">
				<div className="flex items-center space-x-2">
					<FontAwesomeIcon icon={faBriefcase} /> <p>{props.job}</p>
				</div>
				<div className="flex items-center space-x-2">
					<FontAwesomeIcon icon={faHeart} /> <p>{props.relationshipStatus}</p>
				</div>
				<div className="flex items-center space-x-2">
					<FontAwesomeIcon icon={faBabyCarriage} /> <p>{props.children}</p>
				</div>
			</div>
			<p>
				{props.pronouns} {props.appearance}
			</p>
			<p>
				{props.pronouns} {props.bodyType}
			</p>
		</div>
	);
}

export default MainDetails;
