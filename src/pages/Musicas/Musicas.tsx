import reinicio from '/reinicio.mp3'
import { AudioPlayer } from "react-audio-play";

const musicasData = [
	{ src: '/bb.mp3', message: "DESDE O DIA QUE TE CONHECI, EU TINHA CERTEZA QUE EU E VOCÊ SOMOS COISA DE ALMA." },
	{ src: '/lisboa.mp3', message: "EU TE QUIS MINHA VIDA TODA, LHE CONFESSO" },
	{ src: '/portugal.mp3', message: "EU FIZ UM PEDIDO PRA ESTRELA CADENTE, PORÉM JAMAIS IMAGINARIA QUE VIRIA ALGO TÃO PERFEITO" },
	{ src: '/partilhar.mp3', message: "A COISA QUE MAIS QUERO NESSE MUNDO, É PARTILHAR A VIDA BOA COM VOCÊ" },
	{ src: '/planos.mp3', message: "QUERO REALIZAR TODOS OS MEUS PLANOS E SONHOS AO SEU LADO" },
	{ src: '/best_part.mp3', message: "VOCÊ ME FAZ SER UMA PESSOA MELHOR A CADA DIA, VOCÊ É A LUZ DO SOL NA MINHA VIDA" },
	{ src: '/pupila.mp3', message: "DEPOIS QUE TEU TE CONHECI, FICOU DIFICIL DE VIVER SEM VOCÊ" },
	{ src: '/preciso_dizer_que_te_amo.mp3', message: "TODO DIA EU PRECISO DIZER QUE TE AMO, POIS A CADA DIA ESSE AMOR SÓ CRESCE" },
	{ src: '/outra_vida.mp3', message: "NESSE MUNDO LOUCO E COMPLEXO, NÃO PRECISEI DE OUTRA VIDA PRA VOCÊ SER A MINHA VIDA" },
	{ src: '/love_love.mp3', message: "VOCÊ ME ENSINOU COMO AMAR DE VERDADE E QUE O AMOR, É COMO UM PEDACINHO DE CÉU" },
];

export function Musicas() {
	return (
		<div className="flex flex-col gap-8 items-center min-h-full px-10 overflow-auto mb-8 divide-y-4 divide-indigo-400">


			<h2 className="text-4xl font-black pb-8">UMA PEQUENA PLAYLIST SOBRE A GENTE</h2>


			{musicasData.map(musica => (
				<div className="lg:w-[30.5rem] md:w-fit bg-zinc-100 flex flex-col gap-10 rounded-xl p-5 items-center" key={musica.src}>
					<h2 className="text-2xl font-black text-center wrap-break-word text-indigo-300">
						{musica.message}
					</h2>
					<AudioPlayer src={musica.src} className="w-full" />
				</div>
			))}

			<div className="pb-8 flex flex-col items-center gap-10">
				<div className="lg:w-[30.5rem] md:w-fit bg-zinc-100 flex flex-col gap-10 rounded-xl p-5 items-center">
					<h2 className="text-2xl font-black text-center wrap-break-word text-indigo-300">
						QUANDO ESTAMOS LONGE, SÓ PENSO O QUANTO EU QUERO QUE VOCÊ FIQUE MAIS PERTO DE MIM
					</h2>
					<AudioPlayer src={reinicio} className="w-full" />
				</div>

				<div className="lg:w-[30.5rem] md:w-fit bg-zinc-100 flex flex-col gap-10 rounded-xl p-5 items-center">
					<h2 className="text-xl font-black text-center text-indigo-300">EU PODERIA MONTAR UMA PLAYLIST COM 100 MUSÍCAS QUE ME FAZEM PENSAR EM VOCÊ</h2>
					<h2 className="text-xl font-black text-center text-indigo-300">MAS ESCOLHI ESSAS PARA TRANSMITIR 0,001% DO MEU AMOR</h2>
					<h2 className="text-xl font-black text-center text-indigo-300">OBRIGADO POR ESTAR NA MINHA VIDA POR MAIS 1 ANO</h2>
					<h2 className="text-xl font-black text-center text-indigo-300">FELIZ DIA DOS NAMORADOS AMOR DA MINHA VIDA</h2>
				</div>

			</div>

		</div>
	)
}