import React from "react";
import { Box, Typography } from "@mui/material";

import "./style.css";

export default function PlacementCard({ logo, FirsText, secondText }) {
  return (
    <Box className="placementItemCard">
      <Box className="placementCardLogo">
        <img src={logo} alt="" />
      </Box>
      <Box px={2} className="placementCardText">
        <Typography
          className="poppinsBold"
          sx={{ fontWeight: "700", textAlign: "center", fontSize: "40px" }}
          variant="h5"
        >
          {FirsText}
        </Typography>
        <Typography className="cardBottomText" variant="h7">
          {secondText}
        </Typography>
      </Box>
    </Box>
  );
}
