import { getDataFromField } from "../firebase";
import { useEffect, useState } from "react";

function Relations(props) {

	useEffect(() => {
		props.getOrientation();
		props.getRelationshipStatus();
		props.getChildren();
	}, []);

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
