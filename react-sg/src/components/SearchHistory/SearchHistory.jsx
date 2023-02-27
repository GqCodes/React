import './searchhistory.css';

export default function SearchHistory({ terms }) {
  return (
    <ul>
      {terms.map((term) => (
        <li key={term}>{term}</li>
      ))}
    </ul>
  );
}
