import './styles.css';
import foodTable from '../assets/food-on-table.jpg';
const Home = () =>{
    return (
        <div className="home-container">
            <div className="feature-box">
      <div className="feature-text">
        <h2 className="feature-tagline">Recovery Recipes</h2>
      </div>
      <div className="feature-image">
     <img src={foodTable} alt="Delicious food on a table" className="images"/>
      </div>
    </div>
       <div className="mission-section">
            <h1>Our Mission</h1>
            <p>Food-insecure patients endure delayed healing, higher readmission rates, 
                and poorer health outcomes overall. We aim to alleviate food insecurity in discharged patients 
                and education community members about the impacts of food insecurity on health. 
                This website will serve as an educational resource to provide recipes that can be 
                made from easily accessible foods that can be found at food banks and donation drives.
</p>
        </div>
        </div> 
    );
};

export default Home;