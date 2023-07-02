interface SexProps {
	handleSexChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Sex({ handleSexChange }: SexProps) {
	return (
		<div className="w-3/4">
			<label htmlFor="sex">Sex</label>
			<select
				name="sex"
				id="sex"
				className="w-full text-black"
				onChange={handleSexChange}
			>
				<option value="random">Random</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
			</select>
		</div>
	)
}

export default Sex