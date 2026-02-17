import logo from "../assets/logo.png";
import "./about.css";
import instagramIcon from "../assets/Instagram_icon.png";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-layout">
        <img
          src={logo}
          alt="About Recovery Recipes"
          className="about-image"
        />

        <div className="about-text">
          <h2>About Us</h2>
          <p>
            We are an on-campus organization at the University of Maryland College Park whose mission 
            is to combat food insecurity in patients who have been recently discharged from the hospital. 
            We hope to provide balanced and nutritious meals to streamline their healing process. 
            Our recipes are created with the help from chefs from UMD’s Campus Pantry. 
            Our newsletter gives monthly updates on club meetings and various local resources for those facing food insecurity.

          </p>

          <a
            href="https://www.instagram.com/recoveryrecipesumd"
            target="_blank"
            rel="noopener noreferrer"
            className="about-instagram"
            >
                <img
                src={instagramIcon}
                alt="Instagram"
                className="instagram-icon"
            />
            Follow us on Instagram!
            </a>

        </div>
      </div>
    </div>
  );
};

export default About;