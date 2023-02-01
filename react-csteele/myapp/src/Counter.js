import { useState } from 'react';
import './Counter.css';

const Counter = ({ step = 1 }) => {
  const [count, setCount] = useState(0);

  return (
    <div className='counter'>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + step)}>{step}</button>
    </div>
  );
};

export default Counter;
