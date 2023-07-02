function AbilityScores() {
	const getAbilityScoreValues = () => {
		const abilityScoreValues = {
			strength: 0,
			dexterity: 0,
			constitution: 0,
			intelligence: 0,
			wisdom: 0,
			charisma: 0,
		};

		const abilityScoreKeys = Object.keys(abilityScoreValues);

		abilityScoreKeys.forEach((abilityScoreKey) => {
			const randomValue = Math.floor(Math.random() * 15) + 3;
			abilityScoreValues[
				abilityScoreKey as keyof typeof abilityScoreValues
			] = randomValue;
		});

		return abilityScoreValues;
	};
	return (
		<div className="bg-green-900">
			<h2>Ability Scores</h2>
			<p>Strength: {getAbilityScoreValues().strength}</p>
			<p>Dexterity: {getAbilityScoreValues().dexterity}</p>
			<p>Constitution: {getAbilityScoreValues().constitution}</p>
			<p>Intelligence: {getAbilityScoreValues().intelligence}</p>
			<p>Wisdom: {getAbilityScoreValues().wisdom}</p>
			<p>Charisma: {getAbilityScoreValues().charisma}</p>
		</div>
	);
}

export default AbilityScores;
