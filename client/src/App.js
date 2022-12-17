import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import Camps from './Camps';
import Signup from './Signup';
import LogInOrSingup from './LogInOrSignup';
import Account from './Account';
import Login from './Login';
import {Routes, Route} from "react-router-dom"
import { useEffect, useState } from 'react';

function App() {
  const [camps, setCamps] = useState([])
  const [user, setUser] = useState(null)
  const [comments, setComments] = useState([])

    useEffect(() => {
        fetch("/camps")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCamps(data)
        })

        fetch("/comments")
        .then(res => res.json())
        .then(comments => setComments(comments))

        //auto login
        fetch("/auth").then((res) => {
          if (res.ok) {
            res.json().then((user) => {
              console.log(user)
              setUser(user)
            });
          }
        });

    }, [setComments])

    function addComment(newComment) {
      setComments([...comments, newComment])
    }

  if (!user) return <LogInOrSingup setUser={setUser}/>;

  return (
    <div className="App">
      <NavBar setUser={setUser}/> 
      <Routes>
        <Route path="/" element={<Home user={user} />} />     
        <Route path="/camps" element={<Camps camps={camps} user={user} addComment={addComment} comments={comments}/>} />   
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;

//addComment={addComment} 