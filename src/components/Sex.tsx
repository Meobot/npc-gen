function Sex({ handleSexChange }) {
	return (
		<>
		<label htmlFor="sex">Sex</label>
					<select
						name="sex"
						id="sex"
						className="w-full"
						onChange={handleSexChange}
					>
						<option value="random">Random</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
		</>
	)
}

export default Sex