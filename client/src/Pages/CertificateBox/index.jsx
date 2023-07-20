import React from 'react';
import { Box, Typography } from '@mui/material';

import "./style.css";
import coverPhoto from "../../Assets/images/certificate image.png";
import num1 from "../../Assets/images/num1.png"
import num2 from "../../Assets/images/num2.png"
import num3 from "../../Assets/images/num3.png"
import num4 from "../../Assets/images/num4.png"
import num5 from "../../Assets/images/num5.png"

export const CertificateBox = () => {
  return (
    <Box className="Certificate_Box">
      <Box className="cover">
        <img style={{ width: "100%", maxWidth: "746px" }} src={coverPhoto} />
      </Box>
      <Box className="CertificateText">
        <Typography mb={3} className="poppinsBold mobileHeader"
          sx={{ fontWeight: "700", fontSize: "42px" }}
          variant="h5">Internationally<br /> Accrediated Certificate with  Over 20+ Points Added in Your Resume</Typography>

        <Box className="CertificateTextNumList">
          <img src={num1} />
          <Typography className='poppins' sx={{ fontWeight: "500", fontSize: "16px" }}>Earn a certificate for each completed module (Minimum of 6 Certificates)</Typography>
        </Box>
        <Box className="CertificateTextNumList">
          <img src={num2} />
          <Typography className='poppins' sx={{ fontWeight: "500", fontSize: "16px" }}>Access 12 project reports by industry experts (One for each project)</Typography>
        </Box>
        <Box className="CertificateTextNumList">
          <img src={num3} />
          <Typography className='poppins' sx={{ fontWeight: "500", fontSize: "16px" }}>Secure a minimum of 2 internship opportunities in the industry</Typography>
        </Box>
        <Box className="CertificateTextNumList">
          <img src={num4} />
          <Typography className='poppins' sx={{ fontWeight: "500", fontSize: "16px" }}>Obtain a Letter of Recommendation from industry experts</Typography>
        </Box>
        <Box className="CertificateTextNumList">
          <img src={num5} />
          <Typography className='poppins' sx={{ fontWeight: "500", fontSize: "16px" }}>Statement of Purpose for higher studies applicants</Typography>
        </Box>

      </Box>

    </Box >
  )
}
