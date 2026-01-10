import './styles.css';
import foodTable from '../assets/food-on-table.jpg';
const Home = () =>{
    return (
        <div className="home-container">
            <div className="feature-box">
      <div className="feature-text">
        <h2 className="feature-tagline">Welcome to Recovery Recipes</h2>
        <p className="feature-description">tagline</p>
      </div>
      <div className="feature-image">
     <img src={foodTable} alt="Delicious food on a table" className="images"/>
      </div>
    </div>
       <div className="mission-section">
            <h1>Our Mission</h1>
            <p>We hope to combat food insecurity 
                by creating nonperishable, balanced, and nutritious meal packages to 
                distribute to the hospitals that we partner up with. We also hope to 
                personalize these meals to fit the patients’ needs. For instance if 
                they’re on a low-sodium diet, they have diabetes, or have hypertension. 
                We will receive this data from the hospitals themselves, of course obliging 
                by HIPAA protocols.
</p>
        </div>
        <div className="footer-section">
            <p>© 2025 Recovery Recipes. All rights reserved.</p>
        </div>
        </div> 
    );
};

export default Home;