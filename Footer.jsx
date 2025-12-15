import react from "react"
import "./Footer.css";
// import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
  
    <footer className="footer">
      <div className="footer-container">

        
        <div className="footer-left">
          <h2 className="logo">
            Health<span className="plus"> +</span>
          </h2>

          <p className="footer-text">
            Talk to online doctors and get medical advice, online prescriptions,
            refills and medical notes within minutes. On-demand healthcare services
            at your fingertips.
          </p>

          <h3 className="newsletter-title">Stay Update to our Newsletter</h3>
          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>

        
        <div className="footer-col">
          <h4 className="footer-heading">Services</h4>
          <ul class='ft-section'>
            <li>Emergency Care</li>
            <li>Heart Disease</li>
            
            <li>Prescription</li>
            <li>Insights for doctors</li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h4 className="footer-heading">Legal</h4>
          <ul class='ft-section'>
            <li>General Info</li>
            
            <li>Privacy Policy</li>
            <li>Terms of Services</li>
            <li>Consultations</li>
            
          </ul>
        </div>

       
        <div className="footer-col">
          <h4 className="footer-heading">Talk To Us</h4>
          <ul class='ft-section'>
            <li>support@healthplus.com</li>
            <li>appointment@healthplus.com</li>
            <li>+022 5454 5252</li>
          
            <li>+022 2326 6232</li>
          </ul>
        </div>
      </div>
     

      
      
    </footer>
    
  );
};


export default Footer;
