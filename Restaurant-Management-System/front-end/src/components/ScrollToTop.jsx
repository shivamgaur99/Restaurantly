import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Fab, Box } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

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
    <Box
      sx={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 1000,
        display: visible ? "flex" : "none",
      }}
    >
      <Fab
        color="primary"
        size="small"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        sx={{
          backgroundColor: "#ff9900",
          "&:hover": { backgroundColor: "#cc7a00"},
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Box>
  );
}

export default ScrollToTop;
