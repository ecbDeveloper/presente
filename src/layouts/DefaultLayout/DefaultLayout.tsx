import { Header } from "@/components/Header";
import { Outlet } from "react-router-dom";

export function Defaultlayout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}