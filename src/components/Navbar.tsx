import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../assets/logo.png";
const Navbar = () => {
    return (
        <div className="navbar-container">
            <img src={logo} alt="Recovery Recipes Logo" className="logo"/>
        <nav className="navbar">
            <Link to="/" className="links">Home</Link>
            <Link to="/about" className="links">About</Link>
            <Link to="/recipes" className="links">Recipes</Link>
            <Link to="/donation" className="links">Donation</Link>
            <Link to="/newsletter" className="links">Newsletter</Link>
        </nav>
        </div>
        
    );
}
export default Navbar;