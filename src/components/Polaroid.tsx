import type { PropsWithChildren } from "react"

interface PolaroidBoxProps {
	imgSrc: string
	imgPosition: 'top' | 'center' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' | 'ríght'
}

export function PolaroidBox({ imgPosition, imgSrc, children }: PropsWithChildren<PolaroidBoxProps>) {
	return (
		<div className="sm:w-fit lg:w-[30.5rem] md:w-[30.5rem] h-[30rem] bg-zinc-100 flex flex-col items-center p-5 rounded-xl">
			<img src={imgSrc} alt="Foto Capa" className={`rounded-xl w-[28rem] h-80 object-cover object-${imgPosition}`} loading="lazy" />
			{children}
		</div>
	)
}