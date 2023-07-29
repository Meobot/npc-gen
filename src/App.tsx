import React, { useEffect, useState, useMemo } from "react";
import Choices from "./components/Choices";
import MainDetails from "./components/MainDetails";
import AbilityScores from "./components/AbilityScores";
import PersonalityTraits from "./components/PersonalityTraits";
import { getDataFromField } from "./firebaseConfig";

function App() {
	const [species, setSpecies] = useState(() => {
		const speciesArray = [
			"human",
			"elf",
			"dwarf",
			"halfling",
			"gnome",
			"tiefling",
			"dragonborn",
		];
		const randomSpecies = Math.floor(Math.random() * speciesArray.length);
		return speciesArray[randomSpecies];
	});
	const [sex, setSex] = useState(() => {
		const sexesArray = ["male", "female"];
		const randomSex = Math.floor(Math.random() * sexesArray.length);
		return sexesArray[randomSex];
	});
	const [alignment, setAlignment] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [personalityTraits, setPersonalityTraits] = useState([]);
	const [orientation, setOrientation] = useState("");
	const [relationshipStatus, setRelationshipStatus] = useState("");
	const [children, setChildren] = useState(0);
	const [job, setJob] = useState("");
	const [appearance, setAppearance] = useState("");
	const [bodyType, setBodyType] = useState("");
	const pronouns = useMemo(() => {
		return getPronouns();
	}, [firstName, lastName]);

	useEffect(() => {
		getMultiplePersonalityTraits(3).then((traits) => {
			setPersonalityTraits(traits);
		});
	}, []);

	function getPronouns() {
		if (sex === "male") {
			return "He";
		} else if (sex === "female") return "She";
	}

	const getRandomValue = (valuesArray) => {
		if (!valuesArray || valuesArray.length === 0) {
			return "";
		}
		const randomIndex = Math.floor(Math.random() * valuesArray.length);
		const randomValue = valuesArray[randomIndex];
		return randomValue;
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
	const getPersonalityTrait = (): Promise<string> => {
		return new Promise((resolve) => {
			getDataFromField(
				"personalityTraitsDoc",
				"personalityTraitsField"
			).then((data) => {
				const randomPersonalityTrait = getRandomValue(data);
				resolve(randomPersonalityTrait || "random");
			});
		});
	};

	const getMultiplePersonalityTraits = async (
		count: number
	): Promise<string[]> => {
		const personalityTraits: string[] = [];
		for (let i = 0; i < count; i++) {
			const trait = await getPersonalityTrait();
			personalityTraits.push(trait);
		}
		return personalityTraits;
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
		getMultiplePersonalityTraits(3).then((traits) => {
			setPersonalityTraits(traits);
		});
	};

	return (
		<div className="App container px-3 space-y-4 mt-6">
			<div className="text-white flex flex-col justify-center items-center">
				<h1 className="mb-4 font-bold text-xl">NPC Dispenser</h1>
				<Choices
					handleSpeciesChange={handleSpeciesChange}
					handleSexChange={handleSexChange}
					handleAlignmentChange={handleAlignmentChange}
					handleClick={handleClick}
				/>
			</div>
			<MainDetails
				species={species}
				sex={sex}
				setSex={setSex}
				setSpecies={setSpecies}
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
				getRelationshipStatus={getRelationshipStatus}
				relationshipStatus={relationshipStatus}
				getChildren={getChildren}
				children={children}
			/>
			<PersonalityTraits
				personalityTraits={personalityTraits}
				pronouns={pronouns}
			/>
			<AbilityScores firstName={firstName} lastName={lastName} />
		</div>
	);
}

export default App;
