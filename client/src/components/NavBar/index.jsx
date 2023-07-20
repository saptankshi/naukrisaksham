import React from "react";
import { Box, Typography, Button } from "@mui/material";
import logo from "../../Assets/images/Naukrisaksham 2.png";
import { RedButton } from "../AppButton";

import "./style.css";
import "../../Assets/fonts.css";
import { handleAboutBoxScroll } from "../../Pages/AboutBox/Achievement"
import { handleCourseBoxScroll } from "../../Pages/WorkFlow/index"
import { handleCompaniesBoxScroll } from "../../Pages/ForthBox/CompanyLogoBox"
import { handleHomeBoxScroll } from "../../Pages/Home/index"
import { handleResourcesBoxScroll } from "../../Pages/LearningBox/index"
export default function NavBar({ setEnrollBox }) {
  return (
    <Box className="navContainer">
      <Box className="navBar">
        <Box className="logoBox">
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </Box>
        <Box className="navItems">
        <a style={{ cursor: "pointer" }} onClick={handleHomeBoxScroll} className="navLink" >
            {" "}
            <Box className="navItem">Home</Box>
          </a>
          <a style={{ cursor: "pointer" }} onClick={handleCourseBoxScroll} className="navLink" >
            {" "}
            <Box className="navItem">Course </Box>
          </a>
          <a style={{ cursor: "pointer" }} onClick={handleCompaniesBoxScroll} className="navLink" >
            {" "}
            <Box className="navItem">Companies</Box>
          </a>
          <a style={{ cursor: "pointer" }} onClick={handleResourcesBoxScroll} className="navLink" >
            {" "}
            <Box className="navItem">Resources</Box>
          </a>
          <a style={{ cursor: "pointer" }} onClick={handleAboutBoxScroll} className="navLink" >
            {" "}
            <Box className="navItem">About Us</Box>
          </a>
          <a className="navLink" href="#">
            {" "}
            <Box className="navItem">Contact</Box>
          </a>
        </Box>
        <Box className="buttonBox">
          <RedButton onClick={() => setEnrollBox(true)} BtnText="Get Started" textClass="poppins" />
        </Box>
      </Box>
    </Box>
  );
}
