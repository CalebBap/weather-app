import React, { useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/LocationSearchBar';
import WeatherInfo from './Components/WeatherInfo/WeatherInfo';

function App() {
  
  const [UserInput, setUserInput] = useState<string | null>("");

  function SetUserInput(a: string) {
    setUserInput(a);    
  }

  return (
    <div className="App" >
      <SearchBar SetUserInput={(a: string) => SetUserInput(a)}/>
      <WeatherInfo SearchQuery={UserInput}/>
    </div>
  );
}

export default App;