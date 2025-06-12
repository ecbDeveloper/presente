
import { MyAudioPlayer } from "@/components/MyAudioPlayer";
import { PolaroidBox } from "@/components/Polaroid";

export function Home() {
	return (
		<div className='flex flex-col items-center min-h-full px-10 overflow-hidden'>
			<h2 className="text-4xl font-black mb-8">OUÇA ESSE AUDIO</h2>

			<PolaroidBox imgPosition="center" imgSrc="/primeira_foto.jpeg">
				<MyAudioPlayer audioSrc="/meu_audio.mp3" />
			</PolaroidBox>

		</div>
	)
}