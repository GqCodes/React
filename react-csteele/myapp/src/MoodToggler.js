import { useState } from 'react';
import './MoodToggler.css';

const MoodToggle = () => {
  const [isHappy, setIsHappy] = useState(true);
  const toggleIsHappy = () => setIsHappy(!isHappy);
  const styles = { color: isHappy ? 'green' : 'red' };
  return (
    <div>
      <h3 className='MoodToggler' style={styles} onClick={toggleIsHappy}>
        {isHappy ? ':)' : ':('}
      </h3>
    </div>
  );
};

export default MoodToggle;
