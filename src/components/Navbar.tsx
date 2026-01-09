import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <div className="body">
        <nav className="navbar">
            <Link to="/" className="links">Home</Link>
            <Link to="/about" className="links">About</Link>
            <Link to="/recipes" className="links">Recipes</Link>
            <Link to="/donation" className="links">Donation</Link>
        </nav>
        </div>
    );
}
export default Navbar;