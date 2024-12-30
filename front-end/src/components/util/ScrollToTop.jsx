import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ScrollToTop.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  
  useEffect(() => { 
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  }, [location]); 


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);


  return (
    <a
      href="#"
      className={`back-to-top d-flex align-items-center justify-content-center ${visible ? 'active' : ''}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
}  

export default ScrollToTop;
