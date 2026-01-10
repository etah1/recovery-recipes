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
            Recovery Recipes, an on-campus organization whose mission is to
            combat food insecurity in patients who have recently been
            discharged from the hospital. The few days after discharge, people
            may not have access to balanced meals. Additionally, food-insecure
            patients encounter delayed healing, higher readmission rates, and
            poorer health outcomes.
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