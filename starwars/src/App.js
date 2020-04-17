import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Character from './components/Character'
import styled from 'styled-components'
import './App.css';

const FancyDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const apiKey = 'https://swapi.py4e.com/api/people/'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(apiKey)
      .then((response) => {
        setCharacters(Array.from(response.data.results));
      })
      .catch((err) => { });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <FancyDiv className='character'>
        {characters.map((item, index) => {
          return <Character key={index} name={item.name} height={item.height} weight={item.mass} birthYear={item.birth_year} gender={item.gender} />
        })}
      </FancyDiv>
    </div>
  );
}

export default App;
