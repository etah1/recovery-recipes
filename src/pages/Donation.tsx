import './donation.css'
import foodBanner from '../assets/foodbanner.jpg';
import logo from '../assets/logo.png';
const Donation = () => {
    return (
        <div donation-page className="donation-page">
            <div className="donation-image-container"> 
                <img src={foodBanner} alt="Donation Image" className="donation-image"/>

            </div>
            <div className="donation-container">
            <h2>Donations</h2>
            <p>Your support helps us continue our mission. Thank you for considering a donation!</p>
            <div className="logo-image-container"> 
                <img src={logo} alt="logo image" className="logo-image"/>
                
            </div>
            <div className="donation-buttons">
                <button className="donation-button">Cashapp</button>
                <button className="donation-button">Paypal</button>
                <button className="donation-button">Venmo</button>
                <button className="donation-button">Stripe</button>
            </div>
             </div>
        </div>
    );
};

export default Donation;