import { useMemo } from "react";

const AbilityScores = ({ firstName, lastName }) => {
  const getAbilityScoreValues = useMemo(() => {
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
  }, [firstName, lastName]);

  return (
    <div className="px-3 py-5 border-2 border-orange-400 rounded-xl space-y-5 bg-black text-white">
      <h2 className="text-2xl mb-2">Ability Scores</h2>
      <p>Strength: {getAbilityScoreValues.strength}</p>
      <p>Dexterity: {getAbilityScoreValues.dexterity}</p>
      <p>Constitution: {getAbilityScoreValues.constitution}</p>
      <p>Intelligence: {getAbilityScoreValues.intelligence}</p>
      <p>Wisdom: {getAbilityScoreValues.wisdom}</p>
      <p>Charisma: {getAbilityScoreValues.charisma}</p>
    </div>
  );
};

export default AbilityScores;