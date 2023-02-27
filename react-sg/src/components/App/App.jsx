import SearchBar from '../SearchBar/SearchBar';
import './App.css';
import Header from '../Header/Header';
import SearchHistory from '../SearchHistory/SearchHistory';
import { useState } from 'react';

function App() {
  const [terms, setTerms] = useState(['new hope', 'empire']);
  const addTerm = (term) => {
    setTerms([term, ...terms]);
  };
  const name = 'Company Name';
  const myFunc = (e) => {
    console.log(e.target);
  };

  return (
    <div className='App'>
      <Header company={name} />
      <SearchBar term={terms[0]} addTerm={addTerm} />
      <SearchHistory terms={terms} />
    </div>
  );
}

export default App;
