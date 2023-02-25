import Nav from '../Nav/Nav';
import './header.css';

export default function Header({ company }) {
  return (
    <header className='masthead'>
      <h1>{company}</h1>
      <Nav />
    </header>
  );
}
