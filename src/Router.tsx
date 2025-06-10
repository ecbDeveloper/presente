import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Album } from "./pages/Album/Album";
import { Musicas } from "./pages/Musicas/Musicas";
import { Defaultlayout } from "./layouts/DefaultLayout/DefaultLayout";

export function Router() {
	return (
		<Routes>
			<Route element={< Defaultlayout />}>
				<Route element={<Home />} path='/' />
				<Route element={<Album />} path='/nosso-album' />
				<Route element={<Musicas />} path='/nossa-playlist' />
			</Route>
		</Routes>
	)
}