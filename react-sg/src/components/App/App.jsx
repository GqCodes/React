import SearchBar from '../SearchBar/SearchBar';
import './App.css';
import Header from '../Header/Header';

function App() {
  const name = 'Company Name';

  const myFunc = (e) => {
    console.log(e.target);
  };

  return (
    <div className='App'>
      <Header company={name} />
      <SearchBar />
    </div>
  );
}

export default App;
