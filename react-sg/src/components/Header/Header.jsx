import Nav from '../Nav/Nav';
import './header.css';

export default function Header({ company, title }) {
  return (
    <header className='masthead'>
      <h1>{company}</h1>
      <Nav ttl={title} />
    </header>
  );
}
