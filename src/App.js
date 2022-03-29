import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Index';
import About from './Pages/About/Index';

function App() {
	return (

		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/About" element={<About />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
