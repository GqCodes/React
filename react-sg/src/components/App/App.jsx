import './App.css';
import Header from '../Header/Header';

function App() {
  const name = 'Company Name';
  return (
    <div className='App'>
      <Header company={name} />
    </div>
  );
}

export default App;
