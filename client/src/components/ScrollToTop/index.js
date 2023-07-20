import React, { useState, useEffect } from "react";
import "./style.css"; // You can create a separate CSS file for styling
import { Typography } from "@mui/material";

export const scrollToTop = () => {
  const topPosition = window.innerWidth < 600 ? 600 : 0;
  window.scrollTo({
    top: topPosition,
    behavior: "smooth",
  });
};

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <Typography className="goUpArrowText poppinsBold">Enroll Now</Typography>
    </div>
  );
};
