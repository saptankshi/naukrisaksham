import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "./style.css";
import "../../Assets/fonts.css";

export const RedButton = ({
  BtnText,
  width = "174px",
  height = "47px",
  backgroundColor = "#FC0",
  onClick,
  textClass
}) => {
  return (
    <div onClick={onClick} style={{ width, height, backgroundColor }} className="NavGetStartBtn redBtn">
      <Typography className={`redBtnText ${textClass}`}>
        {BtnText}
      </Typography>
    </div>
  );
};
export const YellowButton = ({
  BtnText,
  width = "174px",
  height = "47px",
  backgroundColor = "#FFA033",
}) => {
  return (
    <div
      style={{ width, height, backgroundColor }}
      className="NavGetStartBtn NavGetYellowStartBtn"
    >
      <Typography className="redBtnText poppinsBold">
        {BtnText}
      </Typography>
    </div>
  );
};
export const BlueButton = ({
  BtnText,
}) => {
  return (
    <div
      className="NavGetBlueStartBtn"
    >
      <Typography sx={{ color: "#fff" }} className="redBtnText poppinsBold">
        {BtnText}
      </Typography>
    </div>
  );
};
export const WhiteButton = ({
  BtnText,
}) => {
  return (
    <div
      className="NavGetWhiteStartBtn">
      <Typography sx={{ color: "black" }} className="redBtnText">
        {BtnText}
      </Typography>
    </div>
  );
};
