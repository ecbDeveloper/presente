import { useEffect, useRef, useState } from "react"
import { PauseCircleIcon, PlayCircleIcon } from "@phosphor-icons/react"

interface AudioProps {
	audioSrc: string
}

export function MyAudioPlayer({ audioSrc }: AudioProps) {
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [duration, setDurantion] = useState(0)

	const audioRef = useRef<HTMLAudioElement>(null)

	function handleSeek(e: React.ChangeEvent<HTMLInputElement>) {
		if (audioRef.current) {
			audioRef.current.currentTime = Number(e.target.value)
			setCurrentTime(Number(e.target.value))
		}
	}

	function handleTimeUpdate() {
		if (audioRef.current) {
			setCurrentTime(audioRef.current.currentTime)
			setDurantion(audioRef.current.duration)
		}
	}

	function handlePlay() {
		if (audioRef.current) {
			audioRef.current.play();
			setIsPlaying(true)
		}
	}

	function handlePause() {
		if (audioRef.current) {
			audioRef.current.pause();
			setIsPlaying(false)
		}
	}

	function handlePlayPause() {
		if (isPlaying) {
			handlePause()
		} else {
			handlePlay()
		}
	}

	function formatDuration(durationSeconds: number) {
		const minutes = Math.floor(durationSeconds / 60)
		const seconds = Math.floor(durationSeconds % 60)
		const formattedSeconds = seconds.toString().padStart(2, "0")

		return `${minutes}:${formattedSeconds}`
	}

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.addEventListener("timeupdate", handleTimeUpdate)
		}
	}, [audioRef])

	return (
		<>
			<div className="w-full mt-4">
				<input
					type="range"
					min={0}
					max={duration}
					value={currentTime}
					onChange={handleSeek}
					className="w-full h-2 bg-blue-200 rounded-lg cursor-pointer accent-sky-700"

				/>

				<audio ref={audioRef} src={audioSrc} />

				<div className="flex justify-between">
					<p className="text-sky-700">{formatDuration(currentTime)}</p>
					<p className="text-sky-700">{formatDuration(duration)}</p>
				</div>
			</div>

			<button onClick={handlePlayPause} className="cursor-pointer">
				{isPlaying ?
					<PauseCircleIcon size={60} weight="fill" className="leading-0 text-sky-700 hover:text-sky-600 transition delay-100" />
					:
					<PlayCircleIcon size={60} weight="fill" className="leading-0 text-sky-700 hover:text-sky-600 transition delay-100" />
				}
			</button>
		</>
	)
}