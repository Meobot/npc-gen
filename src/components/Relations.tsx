import { getDataFromField } from "../firebase";
import { useEffect, useState } from "react";

function Relations(props) {

	useEffect(() => {
		props.getOrientation();
		props.getRelationshipStatus();
		props.getChildren();
	}, []);

	// function getOrientation() {
	// 	getDataFromField("orientationsDoc", "orientationsField").then((data) => {
	// 		const randomOrientation = props.getRandomValue(data);
	// 		setOrientation(randomOrientation || "random");
	// 	});
	// }

	// function getRelationshipStatus() {
	// 	getDataFromField("relationsDoc", "relationsField").then(
	// 		(data) => {
	// 			const randomRelationshipStatus = props.getRandomValue(data);
	// 			setRelationshipStatus(randomRelationshipStatus || "random");
	// 		}
	// 	);
	// }

	// function getChildren() {
	// 	getDataFromField("childrenDoc", "childrenField").then(
	// 		(data) => {
	// 			const randomChildren = props.getRandomValue(data);
	// 			setChildren(randomChildren || "random");
	// 		}
	// 	);
	// }

	return (
		<div className="bg-blue-900">
			<h2>Relationships</h2>
			<p>Sexual Orientation: {props.orientation}</p>
			<p>Relationship Status: {props.relationshipStatus}</p>
			<p>Children: {props.children}</p>
		</div>
	);
}

export default Relations;
