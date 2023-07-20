import React, { useState, useRef } from 'react';
import gsap from "gsap";
import { Box, Typography } from '@mui/material';
import { RedButton } from '../../components/AppButton';
import "./about.css";


import coverGirlPhoto from "../../Assets/images/sideview-students-prepearing-exams-university Girl.png"


export const handleAboutBoxScroll = () => {
  const videosBox = document.getElementById('AboutBox');
  videosBox.scrollIntoView({ behavior: 'smooth' });
};

export default function Achievement() {


  return (
    <>
      <Box className="CertificateBox" id="AboutBox">
        <Box className="certificateMedia">
          <Box className="CcoverPhoto">
            <img style={{ width: "100%", maxWidth: "624px" }} src={coverGirlPhoto} alt="" />
          </Box>
          <Box className="CTextBox">
            <Typography mb={3} className=" poppinsBold"
              sx={{ fontWeight: "700", fontSize: "42px" }}
              variant="h5">About Capabl</Typography>
            <Typography mb={4} className='poppins' sx={{ fontWeight: "400", fontSize: "18" }}>
              Capabl from Elite Techno Groups, an industry consultant and Ed-Tech backed by 200+ leading MNC's & Startups, is dedicated to creating a top-notch learning ecosystem. Our mission is to bridge the industry-academia gap while considering the complexities of the Indian degree ecosystem.
            </Typography>
            <Typography mb={4} className='poppins' sx={{ fontWeight: "400", fontSize: "18" }}>
              Our NaukriSaksham initiatives aim to protect students from the exploitation of commercial Edtech companies that charge exorbitant fees for placement and training. Our pocket-friendly model allows students to learn, secure a job, and pay fees, relieving the financial burden on their parents.
            </Typography>
            <Typography sx={{ color: "#3E8504", fontWeight: "700", fontSize: "18px" }} mb={4} className='poppins'>
              With Capabl, students become Capable!
            </Typography>
          </Box>
        </Box>

        <Box className="certificateCompanyLogoBox">
          <Typography className="poppinsBold" sx={{ fontWeight: "700", fontSize: "42px", textAlign: "center" }}
            variant="h5">Awards and Achievements</Typography>
        </Box>

      </Box >
    </>
  )
}
