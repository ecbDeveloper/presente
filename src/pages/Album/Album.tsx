import { PolaroidBox } from "@/components/Polaroid";
import { PhotoDescription } from "./components/PhotoDescription";


export function Album() {
	return (
		<div className="flex flex-col items-center min-h-full px-10 overflow-auto">
			<h2 className="text-4xl font-black mb-8">NOSSO ÁLBUM</h2>

			<div className="flex flex-col gap-8 mb-8">
				<PolaroidBox imgSrc={'/primeira_foto.jpeg'} imgPosition='center'>
					<PhotoDescription date="26/09/2021" description="Nossa primeira foto juntos" />
				</PolaroidBox>

				<PolaroidBox imgSrc={'/primeira-viagem.jpeg'} imgPosition='center'>
					<PhotoDescription date="29/01/2022" description="Nossa primeira viagem juntos" />
				</PolaroidBox>

				<PolaroidBox imgSrc={'/segunda-viagem.jpeg'} imgPosition='center'>
					<PhotoDescription date="03/03/2022" description="Nossa segunda viagem juntos" />
				</PolaroidBox>

				<PolaroidBox imgSrc={'/primeiro-show.jpeg'} imgPosition='center'>
					<PhotoDescription date="12/06/2022" description="Nosso primeiro dia dos namorados" />
				</PolaroidBox>

				<PolaroidBox imgSrc={'/fivela.jpeg'} imgPosition='ríght'>
					<PhotoDescription date="30/08/2022" description="Nosso primeiro show juntos" />
				</PolaroidBox>

				<PolaroidBox imgSrc={'/primeiro-reveillon.jpeg'} imgPosition='top'>
					<PhotoDescription date="18/12/2022" description="O dia que você perdeu a fivela do salto KKKKKK" />
				</PolaroidBox>

				<PolaroidBox imgSrc={'/primeira-vez-sozinhops.jpeg'} imgPosition='top'>
					<PhotoDescription date="31/12/2022" description="Nosso segundo ano novo juntos" />
				</PolaroidBox>

				<PolaroidBox imgSrc={'/trend-beijinhos.jpeg'} imgPosition='top'>
					<PhotoDescription date="13/02/2023" description="Uma das primeiras vezes da gente realmente sozinhos" />
				</PolaroidBox>

				<PolaroidBox imgSrc={'/primeiro-dia-namorados.jpeg'} imgPosition='center'>
					<PhotoDescription date="22/05/2023" description="Trend dos beijinhos" />
				</PolaroidBox>

				<PolaroidBox imgSrc={'/sgundo-dia-namorados.jpeg'} imgPosition='bottom'>
					<PhotoDescription date="06/11/2023" description="Nosso segundo ano de namoro" />
				</PolaroidBox>

				<PolaroidBox imgSrc={'/primeira-vez-shopping.jpeg'} imgPosition='center'>
					<PhotoDescription date="08/04/2024" description="Nossa primeira vez no shopping sozinhos" />
				</PolaroidBox>

				<PolaroidBox imgSrc={'/primeiro-jogos.jpeg'} imgPosition='center'>
					<PhotoDescription date="30/11/2024" description="Nosso primeiro dia de jogos" />
				</PolaroidBox>

				<PolaroidBox imgSrc={'/terceiro-dia-namorados.jpeg'} imgPosition='top'>
					<PhotoDescription date="06/11/2024" description="Nosso terceiro ano de namoro" />
				</PolaroidBox>

				<PolaroidBox imgSrc={'/primeira-foto-beijinhos.jpeg'} imgPosition='center'>
					<PhotoDescription date="17/11/2024" description="Nossa primeira foto dando beijinho" />
				</PolaroidBox>

				<PolaroidBox imgSrc={'/ultima-foto.png'} imgPosition='top'>
					<PhotoDescription date="29/04/2025" description="Nossa ultima foto juntos... Teremos muitoo mais" />
				</PolaroidBox>
			</div>

			<div className="lg:w-[30.5rem] md:w-fit	 bg-zinc-100 mb-8 flex flex-col gap-10 rounded-xl p-5">
				<h2 className="text-2xl font-black text-center wrap-break-word text-indigo-300">CONTINUA NOS PRÓXIMOS CAPÍTULOS...</h2>
				<h2 className="text-2xl font-black text-center wrap-break-word text-indigo-300">TE AMO MAIS QUE QUALQUER COISA NO UNIVERSO</h2>
			</div>
		</div>
	)
}