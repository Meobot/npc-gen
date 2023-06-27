import { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { namesCollection } from "./firebase";

// {names[0]?.humanNames.map((name, index) => (
// 	<li key={index}>{name}</li>
// ))}

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
		<div className="container p-6 sm:grid sm:grid-cols-3 sm:gap-5">
			<div className="bg-slate-500 flex flex-col justify-center items-center py-4 mb-8 sm:col-span-1">
				<h1>NPC Dispenser</h1>
				<div className="flex flex-col items-start w-3/4 space-y-2">
					<label htmlFor="species">Species</label>
					<select name="species" id="species" className="w-full">
						<option value="human">Human</option>
						<option value="elf">Elf</option>
						<option value="dwarf">Dwarf</option>
						<option value="halfling">Halfling</option>
						<option value="gnome">Gnome</option>
						<option value="dragonborn">Dragonborn</option>
						<option value="tiefling">Tiefling</option>
						<option value="half-elf">Half-Elf</option>
						<option value="half-orc">Half-Orc</option>
						<option value="aasimar">Aasimar</option>
						<option value="firbolg">Firbolg</option>
						<option value="goliath">Goliath</option>
					</select>
					<label htmlFor="gender">Gender</label>
					<select name="gender" id="gender" className="w-full">
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="non-binary">Non-binary</option>
						<option value="other">Other</option>
					</select>
					<label htmlFor="age">Age</label>
					<select name="age" id="age" className="w-full">
						<option value="child">Child</option>
						<option value="young adult">Young Adult</option>
						<option value="adult">Adult</option>
						<option value="elder">Elder</option>
					</select>
					<label htmlFor="occupation">Occupation</label>
					<select
						name="occupation"
						id="occupation"
						className="w-full"
					>
						<option value="adventurer">Adventurer</option>
						<option value="artisan">Artisan</option>
						<option value="criminal">Criminal</option>
						<option value="entertainer">Entertainer</option>
						<option value="farmer">Farmer</option>
						<option value="fisherman">Fisherman</option>
						<option value="herder">Herder</option>
						<option value="hunter">Hunter</option>
						<option value="laborer">Laborer</option>
						<option value="merchant">Merchant</option>
					</select>
					<label htmlFor="personality">Personality</label>
					<select
						name="personality"
						id="personality"
						className="w-full"
					>
						<option value="arrogant">Arrogant</option>
						<option value="belligerent">Belligerent</option>
						<option value="boastful">Boastful</option>
						<option value="bold">Bold</option>
						<option value="brave">Brave</option>
						<option value="cautious">Cautious</option>
						<option value="charming">Charming</option>
						<option value="cheerful">Cheerful</option>
						<option value="cowardly">Cowardly</option>
					</select>
					<label htmlFor="quirk">Quirk</label>
					<select name="quirk" id="quirk" className="w-full">
						<option value="always hungry">Always hungry</option>
						<option value="always tired">Always tired</option>
						<option value="always thirsty">Always thirsty</option>
						<option value="always wants to fight">
							Always wants to fight
						</option>
						<option value="always wants to talk">
							Always wants to talk
						</option>
					</select>
					<div className="w-full flex justify-center">
						<button className="bg-blue-500 px-6 py-2 rounded-xl">
							Generate
						</button>
					</div>
				</div>
			</div>
			<div className="bg-slate-800 text-white space-y-8 sm:col-span-2">
				<div className="bg-pink-700">
					<h2>Description</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
						voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
					</p>
				</div>
				<div className="bg-orange-700">
					<h2>Personality</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
						voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
					</p>
				</div>
				<div className="bg-green-900">
					<h2>Ability Scores</h2>
					<p>Strength: 10</p>
					<p>Dexterity: 10</p>
					<p>Constitution: 10</p>
					<p>Intelligence: 10</p>
					<p>Wisdom: 10</p>
					<p>Charisma: 10</p>
				</div>
				<div className="bg-blue-900">
					<h2>Relationships</h2>
					<p>Sexual Orientation: Straight</p>
					<p>Relationship Status: Single</p>
					<p>Children: 0</p>
				</div>
			</div>
		</div>
	);
}

export default App;
