interface AlignmentProps {
	handleAlignmentChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Alignment({ handleAlignmentChange }: AlignmentProps) {
	return (
		<div className="w-3/4">
			<label htmlFor="alignment">Alignment</label>
			<select
				name="alignment"
				id="alignment"
				className="w-full text-black bg-sky-300 rounded-lg p-3"
				onChange={handleAlignmentChange}
			>
				<option value="random">Random</option>
				<option value="lawful-good">Lawful Good</option>
				<option value="neutral-good">Neutral Good</option>
				<option value="chaotic-good">Chaotic Good</option>
				<option value="lawful-neutral">Lawful Neutral</option>
				<option value="true-neutral">True Neutral</option>
				<option value="chaotic-neutral">Chaotic Neutral</option>
				<option value="lawful-evil">Lawful Evil</option>
				<option value="neutral-evil">Neutral Evil</option>
				<option value="chaotic-evil">Chaotic Evil</option>
			</select>
		</div>
	);
}

export default Alignment;
