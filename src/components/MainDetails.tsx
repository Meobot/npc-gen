import { useEffect } from "react";
import { getDataFromField } from "../firebaseConfig";
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
		props.getRelationshipStatus();
		props.getChildren();
	}, []);

	return (
		<div className="px-3 py-5 border-2 border-orange-400 rounded-xl bg-black text-white">
			<h2 className="text-3xl">
				{props.firstName} {props.lastName}
			</h2>
			<hr className="my-2"></hr>
			<div className="flex flex-col py-4 space-y-3">
				<div className="flex items-center space-x-2">
					<FontAwesomeIcon icon={faBriefcase} /> <p>{props.job}</p>
				</div>
				<div className="flex items-center space-x-2">
					<FontAwesomeIcon icon={faHeart} />{" "}
					<p>{props.relationshipStatus}</p>
				</div>
				<div className="flex items-center space-x-2">
					<FontAwesomeIcon icon={faBabyCarriage} />{" "}
					<p>{props.children}</p>
				</div>
			</div>
			<hr className="my-1"></hr>
			<div className="py-2 space-y-3">
				<h2 className="text-2xl">Appearance</h2>
				<p>
					{props.pronouns} {props.appearance}
				</p>
				<p>
					{props.pronouns} {props.bodyType}
				</p>
			</div>
		</div>
	);
}

export default MainDetails;
