import './styles.css';
import foodTable from '../assets/food-on-table.jpg';
import aboutImage from '../assets/about.jpeg';
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
            <p>“We hope to combat food insecurity 
                by creating nonperishable, balanced, and nutritious meal packages to 
                distribute to the hospitals that we partner up with. We also hope to 
                personalize these meals to fit the patients’ needs. For instance if 
                they’re on a low-sodium diet, they have diabetes, or have hypertension. 
                We will receive this data from the hospitals themselves, of course obliging 
                by HIPAA protocols.”
</p>
        </div>
        <div className ="about-section">
            <div className ="about-image">
            <img src={aboutImage} alt="About Us" className="images"/> 
            </div>
            <div className="about-text">
            <h2>About Us</h2>
            <p>“Recovery Recipes, an on-campus organization whose mission is to combat food 
                insecurity in patients who have recently been discharged from the hospital. 
                The few days after discharge, people may not have access to balanced meals. 
                Additionally, food-insecure patients encounter delayed healing, higher readmission rates, 
                and poorer health outcomes.”</p>
            </div>
            </div>
        <div className="footer-section">
            <p>© 2025 Recovery Recipes. All rights reserved.</p>
        </div>
        </div> 
    );
};

export default Home;