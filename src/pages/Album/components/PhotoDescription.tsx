interface PhotoDescriptionProps {
	description: string
	date: string
}

export function PhotoDescription({ date, description }: PhotoDescriptionProps) {
	return (
		<>
			<p className="text-indigo-400 w-full mt-6 font-bold text-xl pb-3 border-b-2 border-indigo-400 text-center">{description}</p>
			<p className="text-indigo-400 mt-3 font-bold text-xl">{date}</p>
		</>
	)
}