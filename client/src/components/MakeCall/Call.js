import React from "react";
import { Box, Typography } from "@mui/material";
import headset from "../../Assets/images/headset-svgrepo-com.svg";
import whatSappLogo from "../../Assets/images/whatsapp-icon-logo.png";

import "./style.css";

export default function Call() {
  const whatsappNumber = "+917795940242";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <>
      <Box className="headsetIconBox">
        <img
          onClick={handleWhatsAppClick}
          src={whatSappLogo}
          alt="Phone Icon"
          style={{ cursor: "pointer" }}
        />
      </Box>
    </>
  );
}
