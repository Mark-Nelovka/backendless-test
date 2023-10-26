import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={'/dummyList'}>DummyList</Link>
          </li>
          <li>
            <Link to={'/dummyChart'}>DummyChart</Link>
          </li>
          <li>
            <Link to={'/dummyTable'}>DummyTable</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
