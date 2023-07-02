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
	const [orientation, setOrientation] = useState("");
	const [relationshipStatus, setRelationshipStatus] = useState("");
	const [children, setChildren] = useState(0);
	const [job, setJob] = useState("");
	const [appearance, setAppearance] = useState("");
	const [bodyType, setBodyType] = useState("");

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

	const getOrientation = () => {
		getDataFromField("orientationsDoc", "orientationsField").then(
			(data) => {
				const randomOrientation = getRandomValue(data);
				setOrientation(randomOrientation || "random");
			}
		);
	};

	const getRelationshipStatus = () => {
		getDataFromField("relationsDoc", "relationsField").then((data) => {
			const randomRelationshipStatus = getRandomValue(data);
			setRelationshipStatus(randomRelationshipStatus || "random");
		});
	};

	const getChildren = () => {
		getDataFromField("childrenDoc", "childrenField").then((data) => {
			const randomChildren = getRandomValue(data);
			setChildren(randomChildren || "random");
		});
	};

	const getAppearance = () => {
		getDataFromField("appearanceDoc", "appearanceField").then((data) => {
			const randomAppearance = getRandomValue(data);
			setAppearance(randomAppearance || "random");
		});
	};

	const getBodyType = () => {
		getDataFromField("bodyTypesDoc", "bodyTypesField").then((data) => {
			const randomBodyType = getRandomValue(data);
			setBodyType(randomBodyType || "random");
		});
	};

	const getJob = () => {
		getDataFromField("jobsDoc", "jobsField").then((data) => {
			const randomJob = getRandomValue(data);
			setJob(randomJob || "random");
		});
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
		getOrientation();
		getRelationshipStatus();
		getChildren();
		getAppearance();
		getBodyType();
		getJob();
	};

	return (
		<div className="container p-6 sm:grid sm:grid-cols-3 sm:gap-5">
			<div className="text-white flex flex-col justify-center items-center py-4 mb-8 sm:col-span-1">
				<h1 className="mb-4 font-bold text-xl">NPC Dispenser</h1>
				<div className="flex flex-col items-center w-full px-4 pt-4 space-y-5 border-2 border-sky-600 rounded-xl">
					<Species handleSpeciesChange={handleSpeciesChange} />
					<Sex handleSexChange={handleSexChange} />
					<Alignment handleAlignmentChange={handleAlignmentChange} />
					<div className="w-full flex justify-center py-5">
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
				<div>
					<MainDetails
						species={species}
						sex={sex}
						firstName={firstName}
						lastName={lastName}
						setFirstName={setFirstName}
						setLastName={setLastName}
						getRandomValue={getRandomValue}
						pronouns={pronouns}
						getAppearance={getAppearance}
						getBodyType={getBodyType}
						appearance={appearance}
						bodyType={bodyType}
						getJob={getJob}
						job={job}
						relationshipStatus={relationshipStatus}
						children={children}
					/>
				</div>

				<div className="bg-orange-700">
					<h2>Personality</h2>
					<p>
						{pronouns} {personalityTrait}
					</p>
				</div>
				<AbilityScores />
			</div>
		</div>
	);
}

export default App;
