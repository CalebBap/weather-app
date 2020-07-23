import React, { useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/LocationSearchBar';
import WeatherGrid from './Components/WeatherGrid/WeatherGrid';

function App() {
  
  const [UserInput, setUserInput] = useState<string | null>("");

  function SetUserInput(a: string) {
    setUserInput(a);    
  }

  return (
    <div className="App" >
      <SearchBar SetUserInput={(a: string) => SetUserInput(a)}/>
      <WeatherGrid SearchQuery={UserInput}/>
    </div>
  );
}

export default App;