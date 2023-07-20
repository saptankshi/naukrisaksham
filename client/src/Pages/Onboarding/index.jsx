import React from 'react';
import { Box, Typography, Button, Container, TextField } from "@mui/material";
import { scrollToTop } from "../../components/ScrollToTop"
import "./onboarding.css";
import { RedButton } from '../../components/AppButton';
import step1 from "../../Assets/images/StepLogo1.png"
import step2 from "../../Assets/images/StepLogo2.png"
import step3 from "../../Assets/images/StepLogo3.png"
import cover1 from "../../Assets/images/Group 21337.png"
import cover2 from "../../Assets/images/Group 21357.png"



export default function Onboarding() {
  return (
    <>
      <Box className="onboardContainer">
        <Typography mb={1} className="poppinsBold"
          sx={{ fontWeight: "700", textAlign: "center", fontSize: "42px" }}
          variant="h5"
        >Process of Onboarding</Typography>
        <Typography mb={5} sx={{ fontSize: "22px", textAlign: "center", fontWeight: "400", fontFamily: "Satoshi" }}>Lorem ipsum dolor sit amet consectetur. Nulla sed turpis adipiscing mauris sit morbi potenti mauris.</Typography>
        <Box className="stepBox">

          <Box className="stepItem">
            <Box className="stepItemLOgo">
              <Box sx={{ background: "#359cef" }} className="stepItemLogoBox">
                <img src={step1} />
              </Box>
            </Box>
            <Typography className='poppinsBold CardSteps' sx={{ color: "#359CEF", fontWeight: "700", fontSize: "16px" }}>STEPS 1</Typography>
            <Typography className='poppins' sx={{ textAlign: "center", fontWeight: "500", fontSize: "26px", lineHeight: "27px" }}>Register for <br /> NaukriSaksham</Typography>
          </Box>
          <Box className="stepItem">
            <Box className="stepItemLOgo">
              <Box sx={{ background: "#CF2323" }} className="stepItemLogoBox">
                <img src={step2} />
              </Box>
            </Box>
            <Typography className='poppinsBold CardSteps' sx={{ color: "#CF2323", fontWeight: "700", fontSize: "16px" }}>STEPS 2</Typography>
            <Typography className='poppins' sx={{ textAlign: "center", fontWeight: "500", fontSize: "26px", lineHeight: "27px" }}>Deposit 100% Refundable<br /> deposit: Rs. 6900/-</Typography>
          </Box>
          <Box className="stepItem">
            <Box className="stepItemLOgo">
              <Box sx={{ background: "#8C29CC" }} className="stepItemLogoBox">
                <img src={step3} />
              </Box>
            </Box>
            <Typography className='poppinsBold CardSteps' sx={{ color: "#8C29CC", fontWeight: "700", fontSize: "16px" }}>STEPS 3</Typography>
            <Typography className='poppins' sx={{ textAlign: "center", fontWeight: "500", fontSize: "26px", lineHeight: "27px" }}>Get all above Program<br /> and Placement Features</Typography>
          </Box>




        </Box>


        <Box className="step4">
          <Typography className='poppinsBold' sx={{ paddingLeft: "35px", color: "#359CEF", fontWeight: "700", fontSize: "35px", textAlign: "center" }}>STEPS 4</Typography>
          <Box className="borderContainer">
            <Box className='borderBox'>
              <Box className="leftBorderBox"></Box>
              <Box className="rightBorderBox rightTopBox"></Box>
            </Box>
            <Box className='borderBox'>
              <Box className="leftBorderBox leftBottomBox">
                <Box className="leftSBox"></Box>
              </Box>
              <Box className="rightBorderBox rightBottomBox">
                <Box className="rightSBox"></Box>
              </Box>
            </Box>
          </Box>
          <Box className="onboardCoverItem">
            <Box className="onboardCover">
              <img src={cover1} />
            </Box>
            <Box className="onboardCover">
              <img src={cover2} />
            </Box>
          </Box>
        </Box>
        <Box className="onboardBtnBox"><RedButton onClick={scrollToTop} BtnText="ENROLL NOW" width='329px' /></Box>
      </Box>
    </>
  )
}
