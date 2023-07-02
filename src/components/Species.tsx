interface SpeciesProps {
	handleSpeciesChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Species({ handleSpeciesChange }: SpeciesProps) {
	return (
		<div className="w-3/4">
			<label htmlFor="species">Species</label>
			<select
				name="species"
				id="species"
				className="w-full text-black"
				onChange={handleSpeciesChange}
			>
				<option value="random">Random</option>
				<option value="human">Human</option>
				<option value="elf">Elf</option>
				<option value="dwarf">Dwarf</option>
				<option value="halfling">Halfling</option>
				<option value="gnome">Gnome</option>
				<option value="dragonborn">Dragonborn</option>
				<option value="tiefling">Tiefling</option>
			</select>
		</div>
	);
}

export default Species;
