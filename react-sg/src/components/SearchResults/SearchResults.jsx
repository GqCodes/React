import { useEffect } from 'react';
import './SearchResults.css';

export default function SearchResults({ films }) {
  useEffect(() => {
    console.log('initial render only of films');
  }, []);

  useEffect(() => {
    console.log('initial AND re-render of films');
  }, [films]);

  return (
    <ul className='results'>
      {films.map((film) => (
        <li key={film.episode_id}>{film.title}</li>
      ))}
    </ul>
  );
}
