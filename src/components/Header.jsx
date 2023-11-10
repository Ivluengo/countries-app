import { Link } from 'react-router-dom';

function Header() {

  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    padding: '0.5rem 2rem'
  }

  const navStyles = {
    display: 'flex',
    gap: '1rem'
  }

  return (
    <header style={headerStyles}>
      <h1>Logo.</h1>
      <nav style={navStyles}>
        <Link style={{ color: 'white' }} to="/">Home</Link>
        <Link style={{ color: 'white' }} to="/countries">Countries</Link>
      </nav>
    </header>
  )
}

export default Header;