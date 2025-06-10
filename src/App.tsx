import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'
import { Provider } from './components/ui/provider'

export function App() {
	return (
		<BrowserRouter>
			<Provider>
				<Router />
			</Provider>
		</BrowserRouter>
	)
}