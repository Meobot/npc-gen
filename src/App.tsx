import { useEffect, useState } from "react";
import { npcDataCollection } from "./firebase";
import Species from "./components/Species";
import Sex from "./components/Sex";
import Alignment from "./components/Alignment";
import MainDetails from "./components/MainDetails";
import namesList from "./namesList"

// {npcData[0]?.humanNames.map((name, index) => (
// 	<li key={index}>{name}</li>
// ))}

function App() {
	const [species, setSpecies] = useState("");
	const [sex, setSex] = useState("");
	const [alignment, setAlignment] = useState("");

	//function to pull a random name from the names array
	const getRandomName = (namesArray) => {
		let randomIndex = Math.floor(Math.random() * namesArray.length);
		let randomName = namesArray[randomIndex];
		return randomName;
	};

	useEffect(() => {
		setSpecies(getRandomName(namesList));
	}, []);

	const handleSpeciesChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setSpecies(event.target.value);
	};

	const handleSexChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSex(event.target.value);
	};

	const handleAlignmentChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setAlignment(event.target.value);
	};

	return (
		<div className="container p-6 sm:grid sm:grid-cols-3 sm:gap-5">
			<div className="bg-slate-500 flex flex-col justify-center items-center py-4 mb-8 sm:col-span-1">
				<h1>NPC Dispenser</h1>
				<div className="flex flex-col items-start w-3/4 space-y-2">
					<Species handleSpeciesChange={handleSpeciesChange} />
					<Sex handleSexChange={handleSexChange} />
					<Alignment handleAlignmentChange={handleAlignmentChange} />
					<div className="w-full flex justify-center">
						<button className="bg-blue-500 px-6 py-2 rounded-xl">
							Generate
						</button>
					</div>
				</div>
			</div>
			<div className="bg-slate-800 text-white space-y-8 sm:col-span-2">

				<MainDetails 
					species={species}
					sex={sex}
					alignment={alignment}
				/>

				<div className="bg-orange-700">
					<h2>Personality</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				M</div>
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
