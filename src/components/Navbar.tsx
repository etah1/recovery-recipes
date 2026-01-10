import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../assets/logo.png";
const Navbar = () => {
    return (
        <div className="navbar-container">
            <img src={logo} alt="Recovery Recipes Logo" className="logo"/>
        <nav className="navbar">
            <Link to="/" className="links">HOME</Link>
            <Link to="/about" className="links">ABOUT</Link>
            <Link to="/recipes" className="links">RECIPES</Link>
            <Link to="/donation" className="links">DONATION</Link>
            <Link to="/newsletter" className="links">NEWSLETTER</Link>
        </nav>
        </div>
        
    );
}
export default Navbar;