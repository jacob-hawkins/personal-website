import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Index';
// import About from './Pages/About/Index';
import Mobile from './Pages/Mobile/Index';

function App() {
    if (window.innerWidth <= 640) {
        return <Mobile />;
    } else {
        return (
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Router>
        );
    }
}

export default App;
