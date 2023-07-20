import React from "react";
import { Box, Typography } from "@mui/material";
import HomeItemCard from "../../components/HomeItemCard";

import "./featureCard.css";

//Home card logo
import JobSearch from "../../Assets/images/HomeCardLogo/Group 21302.png";
import FectoryHelmet from "../../Assets/images/HomeCardLogo/FectoryHelmet.png";
import factory from "../../Assets/images/HomeCardLogo/factory.png";
import CurencyGraph from "../../Assets/images/HomeCardLogo/CurencyGraph.png";
import Lock from "../../Assets/images/HomeCardLogo/Lock.png";

export default function FeatureCards() {
  return (
    <>
      <Box className="homeItemBox">
        <Typography
          className="header poppinsBold"
          mt={4}
          sx={{ fontWeight: "700", textAlign: "center", color: "#000" }}
          variant="h5"
        >
          Why NaukriSaksham
        </Typography>
        <Box className="homeItemCardBox">
          <HomeItemCard
            logo={JobSearch}
            Header="Future Job Market"
            BottomText="2.5 million jobs in EV, DS, and Full Stack by 2025."
          />
          <HomeItemCard
            logo={FectoryHelmet}
            Header="Misfit Engineers"
            BottomText="94% student lack the necessary skills due to outdated curriculum."
          />
          <HomeItemCard
            logo={factory}
            Header="Industry Demands"
            BottomText="Companies face challenges in finding skilled graduates."
          />
          <HomeItemCard
            logo={CurencyGraph}
            Header="Financial Burden"
            BottomText="Students spend 1.2 lakh rupees on upskilling, on top of college fees."
          />
          <HomeItemCard
            logo={Lock}
            Header="Job Security"
            BottomText="Neither colleges nor the expensive training programs offer job assurance."
          />
        </Box>
      </Box>
    </>
  );
}
