import './searchbar.css';

export default function SearchBar({ term, addTerm }) {
  // const [term, setTerm] = useState('');

  const submitted = (e) => {
    e.preventDefault();
    console.log('submitted');
    // setMyProp(e.target['keyword'].value);
    addTerm(e.target['keyword'].value);
  };
  const focused = (e) => {
    console.log('onFocus');
  };
  const changed = (e) => {
    console.log('onInput', e.target.value);
  };
  const clicked = (e) => {
    // e.preventDefault();
    console.log('clicked');
  };

  return (
    <section className='searchBar'>
      <form onSubmit={submitted}>
        <input
          type='text'
          name='keyword'
          placeholder='keyword'
          className='searchText'
          onFocus={focused}
          onInput={(e) => {
            changed(e);
          }}
        />
        <button type='submit' className='searchBtn' name='searchBtn' onClick={clicked}>
          Search
        </button>
      </form>
      {term ? <p>You searched for {term}</p> : ''}
    </section>
  );
}
