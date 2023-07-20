import React, { useState } from 'react';
import { Box, Typography } from "@mui/material";

import "./style.css";

import MicrosoftLogo from "../../Assets/images/ForthBoxCompanyLogos/Microsoft.png"
import GoogleLogo from "../../Assets/images/ForthBoxCompanyLogos/Google.png"
import FlipkartLogo from "../../Assets/images/ForthBoxCompanyLogos/flipkart.svg"
import AdobeLogo from "../../Assets/images/ForthBoxCompanyLogos/Adobe.png"
import AmazonLogo from "../../Assets/images/ForthBoxCompanyLogos/Amazon.png"
import intel from "../../Assets/images/ForthBoxCompanyLogos/intel.png"
import ibm from "../../Assets/images/ForthBoxCompanyLogos/IBM.png"
import dell from "../../Assets/images/ForthBoxCompanyLogos/DELL.png"
import HEROelectric from "../../Assets/images/ForthBoxCompanyLogos/HEROelectric.png"
import Honeywell from "../../Assets/images/ForthBoxCompanyLogos/Honeywell_logo.svg"
import BARCLAYS from "../../Assets/images/ForthBoxCompanyLogos/barclays-ar21.svg"
import KUKA from "../../Assets/images/ForthBoxCompanyLogos/KUKA.png"
import ola from "../../Assets/images/ForthBoxCompanyLogos/OLA electric.png"
import apple from "../../Assets/images/ForthBoxCompanyLogos/apple.png"
import TATA from "../../Assets/images/ForthBoxCompanyLogos/TATA.png"

export const handleCompaniesBoxScroll = () => {
  const videosBox = document.getElementById('CompaniesBox');
  videosBox.scrollIntoView({ behavior: 'smooth' });
};


export default function CompanyLogoBox() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const placementCompanyLogoCard = (logo) => {
    const className = "placementCompanyLogosItem";
    return (
      <Box
        className={className}
      // onMouseEnter={() => handleMouseEnter(index)}
      // onMouseLeave={handleMouseLeave}
      >
        <img className='companyLogoImage' src={logo} />
      </Box>
    )
  }
  return (
    <>
      <Box className="placementCompanyLogosBox" id="CompaniesBox">
        <Box mt={7} className="companiesHeader">
          <Typography className='poppins' sx={{ fontSize: "23px", textAlign: "center", color: "#DEB511", fontWeight: "700" }} >Over 200+ Hiring Partners</Typography>
          <Typography className='poppinsBold' sx={{ fontWeight: "700", textAlign: "center", fontSize: "42px" }} variant='h5'>Top MNC's & Startup Hire</Typography>
          <Typography className='poppins' sx={{ textAlign: "center", fontSize: "22px", color: "#359CEF", fontWeight: "500" }}>From Us upto 29 Lakhs</Typography>
        </Box>
        <Box className="placementCompanyLogosItems">
          {placementCompanyLogoCard(MicrosoftLogo)}
          {placementCompanyLogoCard(FlipkartLogo)}
          {placementCompanyLogoCard(GoogleLogo)}
          {placementCompanyLogoCard(AmazonLogo)}
          {placementCompanyLogoCard(AdobeLogo)}
          {placementCompanyLogoCard(intel)}
          {placementCompanyLogoCard(ibm)}
          {placementCompanyLogoCard(dell)}
          {placementCompanyLogoCard(HEROelectric)}
          {placementCompanyLogoCard(Honeywell)}
          {placementCompanyLogoCard(BARCLAYS)}
          {placementCompanyLogoCard(KUKA)}
          {placementCompanyLogoCard(ola)}
          {placementCompanyLogoCard(apple)}
          {placementCompanyLogoCard(TATA)}
        </Box>
      </Box>
    </>
  )
}
