import './Newsletter.css'
import logo from '../assets/logo.png';
const Newsletter = () => {
    return (
        <div donation-page className="Newsletter-page">
            <div className="Newsletter-container">
            <h2>Newsletter</h2>
            <p>Coming Soon!</p>
            <div className="logo-image-container"> 
                <img src={logo} alt="logo image" className="logo-image"/>
                
            </div>
             </div>
        </div>
    );
};

export default Newsletter;