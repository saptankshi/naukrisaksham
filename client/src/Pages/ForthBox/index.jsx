import React, { useState } from 'react';

//Logos
import LearnersLogo from "../../Assets/images/LearnersLogo.png"
import CollegesLogo from "../../Assets/images/CollegesLogo.png"
import PlacementLogo from "../../Assets/images/Placement SuccessLogo.png"
import AverageCTCLogo from "../../Assets/images/Average CTC FresherLogo.png"
import MaximumCTCLogo from "../../Assets/images/Maximum CTALogo.png"

import { Box, Typography } from "@mui/material";
//components
import PlacementCard from "../../components/PlacementCard"

import "./style.css";

export default function ForthBox() {
  return (
    <Box className="container">
      <Box className="placementBox">
        <Box className="placementHeadingBox">
          <Typography className="placementHeading poppinsBold" sx={{ fontWeight: "700", textAlign: "center" }} variant='h5'>Impact Created</Typography>
          <Typography className="placementSubHeading" sx={{ textAlign: "center" }} variant="subtitle2">
            NaukriSaksham is a results-oriented and proactive initiative,
            committed to ensuring students achieve unparalleled career success.
          </Typography>
        </Box>
        <Box className="placementItems">
          <PlacementCard logo={LearnersLogo} FirsText="2.2k" secondText="Learners" />
          <PlacementCard logo={CollegesLogo} FirsText="800+" secondText="Colleges" />
          <PlacementCard logo={PlacementLogo} FirsText="94%" secondText="Placement Success" />
          <PlacementCard logo={AverageCTCLogo} FirsText="8.2 LPA" secondText="Average CTC Fresher" />
          <PlacementCard logo={MaximumCTCLogo} FirsText="29 LPA" secondText="Maximum CTA" />
        </Box>
      </Box>
      <Box className="reviewBox"></Box>
    </Box>
  )
}
