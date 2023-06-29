function Species({ handleSpeciesChange }) {
	return (
		<>
			<label htmlFor="species">Species</label>
			<select
				name="species"
				id="species"
				className="w-full"
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
				<option value="half-elf">Half-Elf</option>
				<option value="half-orc">Half-Orc</option>
			</select>
		</>
	);
}

export default Species;
