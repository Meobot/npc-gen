import { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { namesCollection } from "./firebase";

function App() {
	const [names, setNames] = useState<string[]>([]);

	useEffect(() => {
		fetchNamesFromFirestore();
	}, []);

	const fetchNamesFromFirestore = async () => {
		try {
			const querySnapshot = await getDocs(namesCollection);
			const namesList = querySnapshot.docs.map((doc) => doc.data()); // Access the 'name' field specifically
			setNames(namesList);
		} catch (error) {
			console.error("Error fetching names from Firestore:", error);
		}
	};

	return (
		<>
			<h1>Names</h1>
			<ul>
				{names[0]?.humanNames.map((name, index) => (
					<li key={index}>{name}</li>
				))}
			</ul>
		</>
	);
}

export default App;
