import "./donation.css";
import logo from "../assets/logo.png";

const Donation = () => {

  const venmoLink = "https://venmo.com/u/buijessica28";

  return (
    <div className="donation-page">

      <div className="donation-container">
        <h2>Donations</h2>

        <p>
          Your support helps Recovery Recipes continue providing healthy meals,
          community outreach, and education. Thank you for considering a donation!
        </p>

        <div className="logo-image-container">
          <img src={logo} alt="Recovery Recipes Logo" />
        </div>

        <div className="donation-buttons">
          <a
            href={venmoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="donation-button"
          >
            Venmo
          </a>
        </div>

      </div>

    </div>
  );
};

export default Donation;
