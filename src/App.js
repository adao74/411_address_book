import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import User from './User.js'
import { isVisible } from '@testing-library/user-event/dist/utils';

function App() {

  [isVisible, setVisibility] = useState([])

  const users = []

  // For functional components, instead of ComponentDidMount, use useEffect with empty array
  useEffect( () => {
    fetch('https://randomuser.me/api?results=25')
    .then( res => res.json())
    .then( res => {
      users = res.results
      console.log(users)
    })
    }, [])


  const HandleClick = (index) => {

    const newVisibility = []
    newVisibility[index] = !newVisibility[index]

    setVisibility(newVisibility)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { users.map( (user, index) => {
            return (
              <User user={user} HandleClick={HandleClick} isVisible={isVisible[index]} index={index}></User>
            )
        })}
      </header>
    </div>
  );
}

export default App;
