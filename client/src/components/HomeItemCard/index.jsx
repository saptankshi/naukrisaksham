import React from 'react';
import { Box, Typography } from "@mui/material";
import "./style.css"


export default function HomeItemCard({ logo, Header, BottomText }) {
  return (
    <Box className="homeItemCard">
      <Box className="homeCardImageBox">
        <img className="cardLogo" src={logo} alt="" />
      </Box>
      <Box className="cardHeader">
        <Typography sx={{ fontWeight: "bolder" }}>{Header}</Typography>
      </Box>
      <Box className="cardSubText">
        <Typography sx={{ fontSize: "0.9rem" }} variant="subtitle1">{BottomText}</Typography>
      </Box>
    </Box>
  )
}
