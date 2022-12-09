import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import Camps from './Camps';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camps" element={<Camps />} />
      </Routes>
    </div>
  );
}

export default App;
