import { getDataFromField } from "../firebase";
import { useEffect, useState } from "react";

function Relations(props) {
	const [orientation, setOrientation] = useState("");
	const [relationshipStatus, setRelationshipStatus] = useState("");
	const [children, setChildren] = useState(0);

	useEffect(() => {
		getOrientation();
		getRelationshipStatus();
		getChildren();
	}, []);

	function getOrientation() {
		getDataFromField("orientationsDoc", "orientationsField").then((data) => {
			const randomOrientation = props.getRandomValue(data);
			setOrientation(randomOrientation || "random");
		});
	}

	function getRelationshipStatus() {
		getDataFromField("relationsDoc", "relationsField").then(
			(data) => {
				const randomRelationshipStatus = props.getRandomValue(data);
				setRelationshipStatus(randomRelationshipStatus || "random");
			}
		);
	}

	function getChildren() {
		getDataFromField("childrenDoc", "childrenField").then(
			(data) => {
				const randomChildren = props.getRandomValue(data);
				setChildren(randomChildren || "random");
			}
		);
	}

	return (
		<div className="bg-blue-900">
			<h2>Relationships</h2>
			<p>Sexual Orientation: {orientation}</p>
			<p>Relationship Status: {relationshipStatus}</p>
			<p>Children: {children}</p>
		</div>
	);
}

export default Relations;
