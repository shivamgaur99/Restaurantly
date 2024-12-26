import { Link } from "react-router-dom";
import React from "react";
import "./Footer.css"; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>Restaurantly</h3>
                <p>
                  A108 Adam Street <br />
                  NY 535022, USA<br /><br />
                  <strong>Phone:</strong> +1 5589 55488 55<br />
                  <strong>Email:</strong> info@example.com<br />
                </p>
                <div className="social-links mt-3">
                  <a href="https://twitter.com" className="twitter" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="https://facebook.com" className="facebook" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="https://instagram.com" className="instagram" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="https://skype.com" className="google-plus" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-skype"></i>
                  </a>
                  <a href="https://linkedin.com" className="linkedin" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <Link to="/home">Home</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/about">About Us</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/services">Services</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/terms">Terms of Service</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <Link to="/food-delivery">Food Delivery</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/event-catering">Event Catering</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/online-ordering">Online Ordering</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/private-events">Private Events</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/menu">Menu</Link></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <form action="" method="post">
                <input type="email" name="email" placeholder="Your Email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>

          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; {new Date().getFullYear()} <strong><span>Restaurantly</span></strong>. All Rights Reserved
        </div>
        {/* <div className="credits">
          Designed by <a href="https://bootstrapmade.com/" target="_blank" rel="noopener noreferrer">BootstrapMade</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
