import { Menu, Portal } from "@chakra-ui/react";
import { ListIcon } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function Navigation() {
	return (
		<>
			<Menu.Root>
				<Menu.Trigger asChild>
					<button className="cursor-pointer">
						<ListIcon size={32} weight="bold" className="text-indigo-400 hover:text-indigo-600 active:hover:text-indigo-600  stroke-current fill-current" />
					</button>
				</Menu.Trigger>
				<Portal>
					<Menu.Positioner>
						<Menu.Content>
							<Menu.Item value="Nosso Album">
								<NavLink to='nosso-album'>
									Nosso album
								</NavLink>
							</Menu.Item>
							<Menu.Item value="Nossa playlist">
								<NavLink to='nossa-playlist'>
									Nossa playlist
								</NavLink>
							</Menu.Item>
						</Menu.Content>
					</Menu.Positioner>
				</Portal>
			</Menu.Root>


		</>

	)
}