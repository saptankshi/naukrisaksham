import React from 'react';
import { Box, Typography } from "@mui/material";
import FooterCoverPhoto from "../../Assets/images/FooterCoverPhoto.png"
import CompanyLogo2 from "../../Assets/images/Naukrisaksham 2.png"
import FacebookLogo from "../../Assets/images/FIcon_11_.png"
import TwitterLogo from "../../Assets/images/T_x30_4.Twitter.png"
import InstagramLogo from "../../Assets/images/IVector (4).png"
import LinkedinLogo from "../../Assets/images/LVector (4).png"
import Arrow from "../../Assets/images/footerHomeArrow.png"
import MessageLogo from "../../Assets/images/MessageLogo.png"
import "./style.css";
import { handleAboutBoxScroll } from "../AboutBox/Achievement";


export default function Footer() {
  return (
    <Box className="footer">
      <Box className="footerContent">
        <Box className="footerTextBoxItem footerImageBox">
          <img className='footerImage' src={FooterCoverPhoto} />
        </Box>
        <Box className="footerTextBoxItem">

          <Typography className='footerColHeader  poppins' mb={1} variant='h7' sx={{ fontWeight: "600", fontSize: "22px" }}>Quick Links</Typography>
          <Box className="footerRowItem">
            <Typography className="footerText pointer textUnderlineOnHover poppins" mb={1}>
              <img style={{ width: "7px", height: "11px", margin: "7px 7px 0px 2px" }} src={Arrow} />
              Home
            </Typography>
            <Typography className="pointer textUnderlineOnHover poppins" mb={1}>Course</Typography>
            <Typography className="pointer textUnderlineOnHover poppins" mb={1}>Companies</Typography>
            <Typography className="pointer textUnderlineOnHover poppins" mb={1}>Resources</Typography>
            <Typography onClick={handleAboutBoxScroll} className="pointer textUnderlineOnHover poppins" mb={1}>About Us</Typography>
            <Typography className="pointer textUnderlineOnHover poppins" mb={1}>Contact</Typography>
          </Box>
        </Box>

        <Box className="footerTextBoxItem">
          <Typography className='footerColHeader poppins' mb={1} variant='h7' sx={{ fontWeight: "600", fontSize: "22px" }}>Policies</Typography>
          <Box className="footerRowItem">
            <Typography className="pointer textUnderlineOnHover poppins" mb={1}>Privacy policy</Typography>
            <Typography className="pointer textUnderlineOnHover poppins" mb={1}>Refund policy</Typography>
            <Typography id="pp" sx={{ width: "173px" }} className="pointer textUnderlineOnHover poppins" mb={1}>Terms and Condition</Typography>
          </Box>
        </Box>
        <Box className="footerTextBoxItem ClogBox">

          <img className='cLogo' src={CompanyLogo2} />
          <Typography className="pointer poppins footerLefttext" sx={{ lineHeight: "28px", marginTop: "22px", width: "119%", fontFamily: "Satoshi", fontSize: "18px", fontWeight: "400" }}>
            Nulla sed turpis adipiscing<br />
            mauris sit morbi potenti mauris
            Lorem ipsum dolor sit.</Typography>
        </Box>

      </Box>

      <Box className="footerBottomBox">

        <Box className="footerBottomBoxContent">
          <Typography className='footerBottomText'>© Copyright 2023 <spam style={{ color: "#FFCC00" }}>NaukriSaksham</spam> All Rights Reserved.</Typography>
          <Box className="MediaLinks">
            <a href="https://www.facebook.com/CapablfromEtgroups" target="_blank"> <img src={FacebookLogo} /></a>
            <a href="https://twitter.com/ETgroups" target="_blank"><img src={TwitterLogo} /></a>
            <a href="https://www.instagram.com/capabl.india" target="_blank"> <img src={InstagramLogo} /></a>
            <a href="https://www.linkedin.com/company/cabapl-elite-techno-groups" target="_blank"><img src={LinkedinLogo} /></a>
          </Box>

        </Box>
      </Box>

    </Box >
  )
}
