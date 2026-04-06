import { Link } from 'react-router-dom';
import './styles.css';
import foodTable from '../assets/food-on-table.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-bg-blob" />
        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-kicker">🍽 Nourishing Recovery</div>
            <h2 className="feature-tagline">
              Healthy Meals for<br /><em>Every</em> Step of Healing
            </h2>
            <Link to="/recipes" className="btn-primary">Browse Recipes →</Link>
          </div>
          <div className="hero-img-wrap">
            <img src={foodTable} alt="Delicious food on a table" className="images" />
          </div>
        </div>
      </section>

      <section className="mission-section">
        <h1>Our Mission</h1>
        <p>
          Food-insecure patients endure delayed healing, higher readmission rates,
          and poorer health outcomes overall. We aim to alleviate food insecurity in discharged patients
          and educate community members about the impacts of food insecurity on health.
          This website serves as an educational resource to provide recipes that can be
          made from easily accessible foods found at food banks and donation drives.
        </p>
      </section>
    </div>
  );
};

export default Home;
