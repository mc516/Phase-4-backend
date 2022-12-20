import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import Camps from './Camps';
import Signup from './Signup';
import LogInOrSingup from './LogInOrSignup';
import Login from './Login';
import Account from './Account';
import {Routes, Route} from "react-router-dom"
import { useEffect, useState } from 'react';

function App() {
  const [camps, setCamps] = useState([])
  const [user, setUser] = useState(null)
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch("/camps")
    .then(res => res.json())
    .then(data => setCamps(data))

    fetch("/comments")
    .then(res => res.json())
    .then(comments => setComments(comments))

    //auto login
    fetch("/auth").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
        });
      }
    });

  }, [])

  function addComment(newComment) {
    setComments([...comments, newComment])
  }

  function removeComment(id) {
    const filteredComments = comments.filter(comment => comment.id !== id)
    setComments(filteredComments)
  }

  function updateComment(updatedComment) {
    const newComments = comments.map((comment) => {
      if (comment.id === updatedComment.id) {
        return updatedComment;
      }
      else {
        return comment
      }      
    })
    setComments(newComments)
  }

  if (!user) return <LogInOrSingup setUser={setUser}/>;

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/> 
      <Routes>
        <Route path="/home" element={<Home user={user} />} />     
        <Route path="/camps" element={<Camps camps={camps} user={user} addComment={addComment} comments={comments} removeComment={removeComment} updateComment={updateComment}/>} />   
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login user={user}/>} />
        <Route path="/account" element={<Account user={user} comments={comments}/>} />
      </Routes>
    </div>
  );
}

export default App;

