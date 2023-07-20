import React, { useState, useRef } from 'react';
import "./style.css";
import "../../Pages/ForthBox/style.css"
import { Box, Typography } from "@mui/material";
import avatar1 from "../../Assets/images/y1unsplash_wK8zm2vkKXA.png"
import avatar2 from "../../Assets/images/y2unsplash_0Zx1bDv5BNY.png"
import avatar3 from "../../Assets/images/y3unsplash_Uhn_u8UfiRw.png"
import avatar4 from "../../Assets/images/y4unsplash_eJ0UGX8da2c.png"
import avatar5 from "../../Assets/images/y5unsplash_h5cd51KXmRQ.png"
import avatar6 from "../../Assets/images/y6unsplash_6anudmpILw4.png"
import YouTubeLogo from "../../Assets/images/YouTubeLogo.png"

import featureLogo1 from "../../Assets/images/Group 21316.svg"
import featureLogo2 from "../../Assets/images/Group 21317.svg"
import featureLogo3 from "../../Assets/images/Group 21318.svg"
import featureLogo4 from "../../Assets/images/Group 21319.svg"
import featureLogo5 from "../../Assets/images/Group 21320.svg"
import featureLogo6 from "../../Assets/images/Group 21370.svg"
import featureLogo7 from "../../Assets/images/Group 21369.svg"
import gsap from "gsap";

import RightArrow from "../../Assets/images/arrow.png"
import LeftArrow from "../../Assets/images/arrow - Copy.png"


export const handleVideoBoxScroll = () => {
  const videosBox = document.getElementById('videosBox');
  videosBox.scrollIntoView({ behavior: 'smooth' });
};

export default function MediaBox() {
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
    <Box className="mediaContainer" id="videosBox">

      <Box className="videoItem gridItem1  videoItemText">
        <Typography mb={2} className="boldFont poppinsBold"
          sx={{ fontWeight: "700", textAlign: "center", fontSize: "42px" }}
          variant="h5"
        >Students Defining Our Success
        </Typography>
        <Typography
          sx={{ textAlign: "center", fontSize: "22px", fontWeight: "400", fontFamily: "Satoshi" }}>
          Witness the transformation & Experience the Power of Our Program in Shaping Your Career Path
        </Typography>
      </Box>
      <Box className="videoBox">

        <Box className="YouTubeContent" ref={scrl} onScroll={scrollCheck}>
          <Box className="videoItem gridItem2">
            <img className='avatarImage' src={avatar1} />
            <img className='YouTubeLogo' src={YouTubeLogo} />
            <Typography className='YouTubeCoverText poppins'>Watch Fresher to Engineering <br /> Data Author Video</Typography>
            <Box className="grayBox"></Box>
          </Box>
          <Box className="videoItem gridItem3">
            <img className='avatarImage' src={avatar2} />
            <img className='YouTubeLogo' src={YouTubeLogo} />
            <Typography className='YouTubeCoverText poppins'>Watch Fresher to Engineering <br /> Data Author Video</Typography>
            <Box className="grayBox"></Box>
          </Box>
          <Box className="videoItem gridItem4">
            <img className='avatarImage' src={avatar3} />
            <img className='YouTubeLogo' src={YouTubeLogo} />
            <Typography className='YouTubeCoverText poppins'>Watch Fresher to Engineering <br /> Data Author Video</Typography>
            <Box className="grayBox"></Box>
          </Box>
          <Box className="videoItem gridItem5">
            <img className='avatarImage' src={avatar4} />
            <img className='YouTubeLogo' src={YouTubeLogo} />
            <Typography className='YouTubeCoverText poppins'>Watch Fresher to Engineering <br /> Data Author Video</Typography>
            <Box className="grayBox"></Box>
          </Box>
          <Box className="videoItem gridItem6">
            <img className='avatarImage' src={avatar5} />
            <img className='YouTubeLogo' src={YouTubeLogo} />
            <Typography className='YouTubeCoverText poppins'>Watch Fresher to Engineering <br /> Data Author Video</Typography>
            <Box className="grayBox"></Box>
          </Box>
          <Box className="videoItem gridItem7">
            <img className='avatarImage' src={avatar6} />
            <img className='YouTubeLogo' src={YouTubeLogo} />
            <Typography className='YouTubeCoverText poppins'>Watch Fresher to Engineering <br /> Data Author Video</Typography>
            <Box className="grayBox"></Box>
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

      <Box className="MediaTextBox">
        <Box className="textArea">
          <Typography mb={2} className="poppinsBold"
            sx={{ fontWeight: "700", textAlign: "center", fontSize: "42px" }} variant="h5">
            Program Features
          </Typography>
          <Typography sx={{ textAlign: "center", fontSize: "22px", fontWeight: "400", fontFamily: "Satoshi" }}>
            We've Got You Fully Covered, Every Step of the Way From Technical Skills to Placements!
          </Typography>
          <Box className="featuresBox">

            <Box className="featuresCard">
              <Typography className='poppinsBold featuresCardHeader' variant='h6' sx={{ fontWeight: "700", textAlign: "center", fontSize: "30px" }}>Learning Features</Typography>

              <Box className="featureItem">
                <img src={featureLogo1} />
                <Typography className='featureCardItemText'>6 Month of Learning journey</Typography>
              </Box>
              <Box className="featureItem">
                <img src={featureLogo2} />
                <Typography className='featureCardItemText'>250+ hours of learning</Typography>
              </Box>
              <Box className="featureItem">
                <img src={featureLogo3} />
                <Typography className='featureCardItemText'>20+ Real Time Projects</Typography>
              </Box>
              <Box className="featureItem">
                <img src={featureLogo4} />
                <Typography className='featureCardItemText'>Weekly Live Sessions with top experts</Typography>
              </Box>
              <Box className="featureItem">
                <img src={featureLogo5} />
                <Typography className='featureCardItemText'>1-2 Month of Industrial Internship</Typography>
              </Box>
              <Box className="featureItem">
                <img src={featureLogo6} />
                <Typography className='featureCardItemText' >Lifetime access to capabl Community</Typography>
              </Box>
              <Box className="featureItem">
                <img src={featureLogo7} />
                <Typography className='featureCardItemText'>Live Doubt Support</Typography>
              </Box>

            </Box>


            <Box className="featuresCard card2">
              <Typography className='poppinsBold featuresCardHeader' variant='h6' sx={{ fontWeight: "700", textAlign: "center", fontSize: "30px" }}>Placement Support</Typography>

              <Box className="featureItem card2featureItem">
                <img src={featureLogo1} />
                <Typography className='featureCardItemText'>Aptitude Training</Typography>
              </Box>
              <Box className="featureItem card2featureItem">
                <img src={featureLogo2} />
                <Typography className='featureCardItemText'>Soft Skills Training</Typography>
              </Box>
              <Box className="featureItem card2featureItem">
                <img src={featureLogo3} />
                <Typography className='featureCardItemText'>Resume Preparation</Typography>
              </Box>
              <Box className="featureItem card2featureItem">
                <img src={featureLogo4} />
                <Typography className='featureCardItemText'>Mock Interviews by Tech and
                  HR Panels</Typography>
              </Box>
              <Box className="featureItem card2featureItem">
                <img src={featureLogo5} />
                <Typography className='featureCardItemText'>Negotiation with companies for
                  higher salaries</Typography>
              </Box>
              <Box className="featureItem card2featureItem">
                <img src={featureLogo6} />
                <Typography className='featureCardItemText'>Access to Placement Portal</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
