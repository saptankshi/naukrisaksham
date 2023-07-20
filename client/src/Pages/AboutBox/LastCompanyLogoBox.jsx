import React, { useState, useRef } from 'react';
import gsap from "gsap";
import "./about.css";
import "../../Pages/ForthBox/style.css"
import { Box, Typography } from '@mui/material';

import TEDx from "../../Assets/images/TEDx.png"
import startupindia from "../../Assets/images/startupindia.png"
import nasscom from "../../Assets/images/NASSCOM.png"
import ark from "../../Assets/images/ARK.png"
import ansys from "../../Assets/images/ANSYS.png"
import siemens from "../../Assets/images/SIEMENS.png"
import saeindia from "../../Assets/images/saeindia.png"
import altair from "../../Assets/images/ALTAIR.png"
import abba from "../../Assets/images/abba_logo.jpg"
import iso from "../../Assets/images/ISO-Logo.png"
import Expo from "../../Assets/images/Expo2020_dubai.svg.png"
import India from "../../Assets/images/india_pavilion_logo_01.jpg"
import EdTech from "../../Assets/images/EdTech.png"
import NITI from "../../Assets/images/niti-aayog-logo-vector.png"

import { RedButton } from '../../components/AppButton';
import RightArrow from "../../Assets/images/arrow.png"
import LeftArrow from "../../Assets/images/arrow - Copy.png"

export default function LastCompanyLogoBox() {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);
  const [scrolLeftEnd, setScrolLeftEnd] = useState(false);


  const slide = (shift) => {
    if (scrl.current.scrollLeft === 0) {
      setScrolLeftEnd(true)
    } else {
      setScrolLeftEnd(false)
    }



    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const anim = (e) => {
    gsap.from(e.target, { scale: 1 });
    gsap.to(e.target, { scale: 1.5 });
  };
  const anim2 = (e) => {
    gsap.from(e.target, { scale: 1.5 });
    gsap.to(e.target, { scale: 1 });
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };
  return (
    <>
      <Box className="AchieveContainer">


        <Box className="certificateCompanyLogo" ref={scrl} onScroll={scrollCheck}>
          <Box className="CLogo">
            <Typography className='poppins' px={5} variant='caption' sx={{ textAlign: "center", fontSize: "17px" }}>TeaX talk delivered by Mayank Arora</Typography>
            <img className='Cimage' src={TEDx} />
          </Box>
          <Box className="CLogo">
            <Typography className='poppins' px={5} variant='caption' sx={{ textAlign: "center", fontSize: "17px" }}>Recognised by</Typography>
            <img className='Cimage' style={{ width: "50%", height: "50%" }} src={startupindia} />
          </Box>
          <Box className="CLogo">
            <Typography className='poppins' px={5} variant='caption' sx={{ textAlign: "center", fontSize: "17px" }}>Inoculated  by</Typography>
            <img className='Cimage' style={{ width: "53%", height: "34%" }} src={nasscom} />
          </Box>
          <Box className="CLogo">
            <Typography className='poppins' px={5} variant='caption' sx={{ textAlign: "center", fontSize: "17px" }}>Industry Tie Up with</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>

              <img style={{ width: "40px", margin: "0px 10px" }} src={ark} />
              <img style={{ width: "40px", margin: "0px 10px" }} src={saeindia} />
              <img style={{ width: "40px", margin: "0px 10px" }} src={ansys} />
              <img style={{ width: "40px", margin: "0px 10px" }} src={siemens} />
              <img style={{ width: "40px", margin: "0px 10px" }} src={altair} />
            </Box>
          </Box>

          <Box className="CLogo">
            <Typography className='poppins' px={5} variant='caption' sx={{ textAlign: "center", fontSize: "17px" }}>Finalists at</Typography>
            <img className='Cimage' style={{ width: "43%", height: "64%" }} src={abba} />
          </Box>

          <Box className="CLogo">
            <Typography className='poppins' variant='caption' sx={{ textAlign: "center", fontSize: "12px" }}>Accredited by International Organization  for Standardization, USA & UK </Typography>
            <img className='Cimage' src={iso} style={{ width: "21%", height: "48%" }} />
          </Box><Box className="CLogo">
            <Typography className='poppins' variant='caption' sx={{ textAlign: "center", fontSize: "12px" }}>Selected as a game-changer Indian EdTech Company by Ministry of External</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
              <img style={{ width: "64px", height: "100%", margin: "0px 10px" }} src={Expo} />
              <img style={{ width: "76px", height: "100%", margin: "0px 10px" }} src={India} />
            </Box>
          </Box><Box className="CLogo">
            <Typography className='poppins' px={5} variant='caption' sx={{ textAlign: "center", fontSize: "12px" }}>Winner of All India EdTech challenge 2021-22</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
              <img style={{ width: "70px", height: "100%", margin: "0px 10px" }} src={EdTech} />
              <img style={{ width: "70px", height: "100%", margin: "0px 10px" }} src={NITI} />
            </Box>
          </Box>
        </Box>

        <Box className="arrowBox">
          <Box className={`ScrollBtn${scrolLeftEnd ? ' arrowDisabled' : ''}`}
            onClick={() => slide(-300)}
            onMouseEnter={(e) => anim(e)}
            onMouseLeave={(e) => anim2(e)}
          >
            <img style={{ width: "40px" }} src={LeftArrow} />
          </Box>
          <Box className={`ScrollBtn${scrolEnd ? ' arrowDisabled' : ''}`}
            onClick={() => slide(+300)}
            onMouseEnter={(e) => anim(e)}
            onMouseLeave={(e) => anim2(e)}>
            <img style={{ width: "40px" }} src={RightArrow} />
          </Box>
        </Box>




      </Box>
    </>
  )
}
