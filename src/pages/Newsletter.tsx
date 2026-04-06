import './Newsletter.css';
import logo from '../assets/logo.png';

const Newsletter = () => {
  return (
    <div className="Newsletter-page">
      <div className="Newsletter-container">
        <div className="newsletter-badge">📬 Monthly Updates</div>
        <h2>Newsletter</h2>
        <p className="newsletter-coming-soon">Coming Soon…</p>
        <p>
          Stay tuned for monthly updates on club meetings, recipes,
          and local resources for those facing food insecurity.
        </p>
        <div className="logo-image-container">
          <img src={logo} alt="Recovery Recipes logo" className="logo-image" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
