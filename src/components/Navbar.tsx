import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Recovery Recipes Logo" className="logo" />
        <span className="navbar-logo-text">Recovery Recipes</span>
      </Link>
      <nav className="navbar">
        <Link to="/"           className="links">Home</Link>
        <Link to="/about"      className="links">About</Link>
        <Link to="/recipes"    className="links">Recipes</Link>
        <Link to="/donation"   className="links">Donation</Link>
        <Link to="/newsletter" className="links">Newsletter</Link>
      </nav>
    </div>
  );
};

export default Navbar;
