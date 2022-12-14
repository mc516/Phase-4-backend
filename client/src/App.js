import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import Camps from './Camps';
import Signup from './Signup';
import Account from './Account';
import Login from './Login';
import {Routes, Route} from "react-router-dom"
import { useEffect, useState } from 'react';

function App() {
  const [camps, setCamps] = useState([])
  const [user, setUser] = useState(null)

    useEffect(() => {
        fetch("/camps")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCamps(data)
        })
    }, [])

    const currentUser  = null

    // if (!user) return <Login />;
  return (
    <div className="App">
      <NavBar user={currentUser}/> 
      <Routes>
        <Route path="/" element={<Home user={currentUser} onLogin={setUser}/>} />     
        <Route path="/camps" element={<Camps camps={camps}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
