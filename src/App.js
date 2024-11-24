import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import User from './User.js'

function App() {

  const [isVisible, setVisibility] = useState([])

  const [users, setUsers] = useState([])

  // For functional components, instead of ComponentDidMount, use useEffect with empty array
  useEffect(() => {
    fetch('https://randomuser.me/api?results=25')
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results)
        setUsers(res.results);
      });
  }, []);


  const HandleClick = (index) => {

    const newVisibility = [...isVisible]
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
