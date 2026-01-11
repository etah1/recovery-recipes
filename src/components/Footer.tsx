import './Footer.css'
const Footer = () => { 
    return (
        <div className="footer-section">
            <hr className="contact-divider" />
                <div className="contact-info">
                    <p><strong>Recovery Recipes</strong></p>
                    <p>College Park, MD</p>
                    <p>Email: recoveryrecipes@gmail.com</p>
                    <p>Phone: 443-546-884</p>
                </div>
            <hr className="contact-divider" />

            <p>© 2025 Recovery Recipes. All rights reserved.</p>
            <p> Created by Ethan Ta and Averie Ahn</p>
        </div>
    )
};

export default Footer;