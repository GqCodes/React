import './link.css';

export default function Link({ lnk }) {
  return (
    <a className='navLink' href={lnk.url}>
      {lnk.title}
    </a>
  );
}
