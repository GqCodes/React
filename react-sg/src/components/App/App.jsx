import './App.css';
import Header from '../Header/Header';

function App() {
  const name = 'Company Name';
  return (
    <div className='App'>
      <Header company={name} title='Hard Coded' />
    </div>
  );
}

export default App;
