import Species from "./Species";
import Sex from "./Sex";
import Alignment from "./Alignment";

function Choices({ handleSpeciesChange, handleSexChange, handleAlignmentChange, handleClick }) {
  return (
	<div className="flex flex-col items-center w-full max-w-sm px-4 pt-4 space-y-5 border-2 border-sky-600 rounded-xl">
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
  )
}

export default Choices