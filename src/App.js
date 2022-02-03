import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Profil from './components/Pages/Profil';
// react-router

import {
  Route,
  BrowserRouter,
  Routes

} from "react-router-dom";


function App() {
  return (

    <BrowserRouter>

        <div className="App">
            <Navbar />
        </div>

        <Routes>

        <Route path='/' element={Home} />
        <Route path='/about' element={About} />
        <Route path='/profil' element={Profil} />

        </Routes>

    </BrowserRouter>
  );
}

export default App;
