import { useState } from 'react';

const Home = () => {
  // State
  const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);

  // Click Events
  const handleClick = () => {
    setName('Luigi');
    setAge(30);
  };
  const handleClickAgain = (name, e) => {
    console.log(`Hello ${name}`, e.target);
  };

  // Styles
  const buttonStyle = {
    marginLeft: '5px',
  };

  return (
    <div className='home'>
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>

      <button onClick={handleClick}>Click Me</button>

      <button style={buttonStyle} onClick={(e) => handleClickAgain('Chris', e)}>
        Click Me Again
      </button>
    </div>
  );
};

export default Home;
