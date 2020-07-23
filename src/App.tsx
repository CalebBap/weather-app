import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/LocationSearchBar';

function App() {
  function SetUserInput(a: string) {
    "";    
  }

  return (
    <div className="App" >
      <SearchBar SetUserInput={(a: string) => SetUserInput(a)}/>
    </div>
  );
}

export default App;