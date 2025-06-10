import { NavLink } from "react-router-dom";
import { Navigation } from "./Navigation";


export function Header() {
	return (
		<header className="bg-zinc-100 mb-8 h-20 flex justify-center gap-20 items-center px-10">
			<NavLink to='/' className='text-indigo-400 font-bold text-lg '>UMA PEQUENA SURPRESA</NavLink>
			<Navigation />
		</header>
	)
}