function PersonalityTraits({ personalityTraits, pronouns }) {
	return (
		<div className="px-3 py-5 border-2 border-orange-400 rounded-xl space-y-3">
			<h2 className="text-2xl">Personality</h2>
			<div>
				{personalityTraits.map((trait, index) => (
					<>
						<p key={index} className="py-3 flex items-center">
							{pronouns} {trait}
						</p>
						{index !== personalityTraits.length - 1 && <hr />}
					</>
				))}
			</div>
		</div>
	);
}

export default PersonalityTraits;
