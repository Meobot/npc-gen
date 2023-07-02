import { useEffect, useState } from "react";
import Species from "./components/Species";
import Sex from "./components/Sex";
import Alignment from "./components/Alignment";
import MainDetails from "./components/MainDetails";
import { getDataFromField } from "./firebase";
import AbilityScores from "./components/AbilityScores";

function App() {
	const [species, setSpecies] = useState("human");
	const [sex, setSex] = useState("female");
	const [alignment, setAlignment] = useState("");

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [personalityTrait, setPersonalityTrait] = useState("");
	const pronouns = getPronouns();

	useEffect(() => {
		getPersonalityTrait();
	}, []);

	function getPersonalityTrait() {
		getDataFromField("personalityTraitsDoc", "personalityTraitsField").then(
			(data) => {
				const randomTrait = getRandomValue(data);
				setPersonalityTrait(randomTrait || "random");
			}
		);
	}

	function getPronouns() {
		if (sex === "male") {
			return "He";
		} else if (sex === "female") return "She";
		else return "They";
	}

	const getRandomValue = (namesArray) => {
		const randomIndex = Math.floor(Math.random() * namesArray.length);
		const randomName = namesArray[randomIndex];
		return randomName;
	};

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

	const handleClick = () => {
		const firstNamesField = sex === "male" ? "maleNames" : "femaleNames";
		const lastNamesField = `${species}Names`;

		Promise.all([
			getDataFromField("namesDoc", firstNamesField),
			getDataFromField("namesDoc", lastNamesField),
		]).then(([firstNamesData, lastNamesData]) => {
			const randomFirstName = getRandomValue(firstNamesData);
			const randomLastName = getRandomValue(lastNamesData);
			setFirstName(randomFirstName);
			setLastName(randomLastName);
		});
		getPersonalityTrait();
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
						<button
							className="bg-blue-500 px-6 py-2 rounded-xl"
							onClick={handleClick}
						>
							Generate
						</button>
					</div>
				</div>
			</div>
			<div className="bg-slate-800 text-white space-y-8 sm:col-span-2">
				<MainDetails
					species={species}
					sex={sex}
					firstName={firstName}
					lastName={lastName}
					setFirstName={setFirstName}
					setLastName={setLastName}
					getRandomValue={getRandomValue}
				/>

				<div className="bg-orange-700">
					<h2>Personality</h2>
					<p>
						{pronouns} {personalityTrait}
					</p>
				</div>
				<AbilityScores />
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
