import logo from '../assets/logo.png';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <main className="newsletter-page">
      <section className="newsletter-container">
        <p className="newsletter-badge">Monthly Updates</p>
        <h1>Newsletter</h1>
        <p className="newsletter-coming-soon">Coming Soon...</p>
        <p>
          Stay tuned for monthly updates on club meetings, recipes,
          and local resources for those facing food insecurity.
        </p>
        <div className="logo-image-container">
          <img src={logo} alt="Recovery Recipes logo" className="logo-image" />
        </div>
      </section>
    </main>
  );
};

export default Newsletter;
