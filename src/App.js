import './App.css';

import Home from './Pages/Home/Index';
// import About from './Pages/About/Index';
import Mobile from './Pages/Mobile/Index';

function App() {
    if (window.innerWidth <= 640) {
        return <Mobile />;
    } else {
        return <Home />;
    }
}

export default App;
