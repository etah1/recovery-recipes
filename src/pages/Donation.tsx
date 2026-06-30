import logo from '../assets/logo.png';
import './donation.css';

const Donation = () => {
  const venmoLink = 'https://venmo.com/u/buijessica28';

  return (
    <main className="donation-page">
      <section className="donation-container">
        <h1>Donations</h1>

        <p>
          Your support helps Recovery Recipes continue providing healthy meals,
          community outreach, and education. Thank you for considering a donation.
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
      </section>
    </main>
  );
};

export default Donation;
