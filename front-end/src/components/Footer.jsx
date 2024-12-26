import { Link } from "react-router-dom";
import React from "react";
import "./Footer.css";
const Footer = (props) => {
  return (
    <footer className="footer" >
      <section className="section">
        <div
          style={{ color: "lightgray" }}
          className=" text-center text-lg-start text-muted"
        >
          <div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block"></div>

            <div>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          <div className=" text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h4 style={{ fontWeight: "bold", color: "black" }}>
                  <span style={{ fontWeight: "bold", color: "orange" }}>
                    Delightful
                  </span>
                  Plates
                </h4>
                <br></br> <p>Where every bite is a delight.</p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="/home" className="text-reset">
                    Home
                  </a>
                </p>
                <p>
                  <a href="/adminsignin" className="text-reset">
                    SignIn
                  </a>
                </p>
                <p>
                  <a href="/contactus" className="text-reset">
                    ContactUs
                  </a>
                </p>
                <p>
                  <a href="/about" className="text-reset">
                    About Us
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-2"></i>
                  DelightfulPlates.
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  contact@delightfulplates.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +99999 00000
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> +91 9876542310
                </p>
              </div>
            </div>
          </div>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "black", color: "white" }}
          >
            &copy; { new Date().getFullYear() } DelightfulPlates.com. All rights reserved.
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
