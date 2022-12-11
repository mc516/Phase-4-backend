import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import Camps from './Camps';
import Enroll from './Enroll';
import Account from './Account';
import {Routes, Route} from "react-router-dom"
import { useEffect, useState } from 'react';

function App() {
  const [camps, setCamps] = useState([])

    useEffect(() => {
        fetch("/camps")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCamps(data)
        })
    }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />     
        <Route path="/camps" element={<Camps camps={camps}/>} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
