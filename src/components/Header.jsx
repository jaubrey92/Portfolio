import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className="navStyle">
        <Link to="/">Home</Link> |<Link to="/about">About Me</Link> |
        <Link to="/portfolio">Portfolio</Link>
      </nav>
    </header>
  )
}

export default Header
