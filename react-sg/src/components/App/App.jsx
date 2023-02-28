import SearchBar from '../SearchBar/SearchBar';
import './App.css';
import Header from '../Header/Header';
import SearchHistory from '../SearchHistory/SearchHistory';
import { useState, useEffect } from 'react';
import SearchResults from '../SearchResults/SearchResults';

function App() {
  const [terms, setTerms] = useState(['new hope', 'empire']);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    console.log('initial render');
    fetchData('films');
  }, []);

  async function fetchData(type) {
    let url = `https://swapi.dev/api/${type}`;
    let res = await fetch(url);
    if (!res.ok) throw new Error(res.statusText);
    let data = await res.json();
    setFilms(data.results);
  }

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
      <main className='content'>
        <SearchHistory terms={terms} />
        <SearchResults films={films} />
      </main>
    </div>
  );
}

export default App;
