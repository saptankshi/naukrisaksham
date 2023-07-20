import React, { useState, useRef } from 'react';
import gsap from "gsap";
import { Box, Typography } from "@mui/material";
import "./style.css";
import avatar1 from "../../Assets/images/image 106.png"
import avatar2 from "../../Assets/images/image 112.png"
import avatar3 from "../../Assets/images/image 105.png"
import avatar4 from "../../Assets/images/NewImages/image 128.png"
import avatar5 from "../../Assets/images/NewImages/image 128 (1).png"
import avatar6 from "../../Assets/images/NewImages/image 128 (2).png"

import Boeing from "../../Assets/images/Boning.png"
import Mercedes from "../../Assets/images/Mercedes.png"
import Bosch from "../../Assets/images/BoschLogo.png"
import Infomerica from "../../Assets/images/Infomericainc.png"
import Amazon from "../../Assets/images/amazonFooter.svg"
import Intel from "../../Assets/images/intel.png"

import googleLogo from "../../Assets/images/RatingLogos/ANSYS.png"
import ambitionBox from "../../Assets/images/RatingLogos/2TaM9vv4FScR0ragiBoxUJPsPYQ1617288791562_200x200 1.png"
import studocu from "../../Assets/images/RatingLogos/image 146.png";
import facebook from "../../Assets/images/RatingLogos/Facebook-Logo 1.png";
import starts from "../../Assets/images/RatingLogos/starts.svg";

import RightArrow from "../../Assets/images/arrow.png"
import LeftArrow from "../../Assets/images/arrow - Copy.png"
import WhiteArrow from "../../Assets/images/White Arrow.svg"


export default function ForthBoxCards() {
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


  const card = (avatar, name, subtitle, cardText, cardSubText, footerSubText1, footerSubText2, footerLogo) => {
    return (
      <Box className="ForthBoxCard">
        <img className='whiteArrow' src={WhiteArrow} />

        <Box className="profileBox">
          <Box className="profilePhoto">
            <img src={avatar} alt="" />
          </Box>
          <Box className="profileInfo">
            <Typography className='poppins' sx={{ textAlign: "left", fontWeight: "600", fontSize: "24px" }} variant='h5'>{name}</Typography>
            <Typography className='poppins' variant='caption' sx={{ fontWeight: "400", fontSize: "14px" }}>{subtitle}</Typography>
          </Box>
        </Box>

        <Box className="TextBox">
          <Typography mb={1} sx={{ fontWeight: "700", textAlign: "left", color: "#13488b", fontSize: "18px", fontFamily: "Satoshi" }}>{cardText}</Typography>
          <Typography className='poppins' variant='subtitle1' sx={{ fontWeight: "400", color: "#5A5A5A;", textAlign: "left", fontSize: "18px", fontFamily: "Satoshi" }}>{cardSubText}</Typography>
        </Box>

        <Box className="cardFooter">
          <Box className="footerInrBox footerInrBoxBgLight">
            <Typography className='poppinsBold' sx={{ textAlign: "left", fontWeight: "bolder" }}>Before</Typography>
            <Typography className="FooterSubText poppins" variant="caption">{footerSubText1}</Typography>
          </Box>
          <Box className="footerInrBox footerInrBoxBgDark">
            <Typography className='poppinsBold' sx={{ textAlign: "left", fontWeight: "bolder" }}>After</Typography>
            <Typography className="FooterSubText poppins" variant="caption" sx={{ height: "40px" }}>{footerSubText2}</Typography>
            <img className="footerCompanyLogo" src={footerLogo} alt="" />
          </Box>
        </Box>
      </Box>
    )
  }

  const RatingCard = (logo, rating) => {
    return (
      <Box className="ratingItem">
        <Box mb={2} className="ratingItemLogo">
          <img src={logo} />
        </Box>
        <Box className="ratingStars">
          <img src={starts} />
          <Typography ml={1}>Rating: {rating}</Typography>
        </Box>
      </Box>
    )
  }

  return (
    <Box my={3} className="ForthBoxCardContainer">
      <Box className="header">
        <Typography mb={2} mt={5} className='poppinsBold' sx={{ fontWeight: "700", textAlign: "center", fontSize: "42px" }} variant='h5'>Make Your Parents Proud!</Typography>
        <Typography mb={3} variant="subtitle2" sx={{ textAlign: "center", fontFamily: "Satoshi", fontSize: "22px", fontWeight: "400" }}>What can be more satisfactory than securing a job with the highest CTC in top companies and become financially independent</Typography>
      </Box>
      <Box className="scrollContainer">
        <Box className="cardBox" ref={scrl} onScroll={scrollCheck}>
          {card(
            avatar4,
            "Kumar Charan M",
            "Infomerica Inc Associate Software Engineer",
            "From Fresher to Associate Software Engineer",
            "At Capable, my learning curve skyrocketed. Now, I can do everything from development to deployment. Capable is one of the best decisions and investments I have made in my life.",
            "Anurag Group of Institutions (Batch 2019-2023)",
            "Associate Software Engineer",
            Infomerica
          )}
          {card(
            avatar5,
            "Vidhi Sethiya",
            "Amazon ML Summer School Amazon - Apprenticeship",
            "From Fresher to Apprenticeship",
            "I learned how to build real project in a simple & understandable way. I know that is a kind of work I should be doing early in my career. I got the right guidance & support here to achieve that.",
            "Acropolis Institutions (Batch 2019-2023)",
            "Amazon Apprenticeship",
            Amazon
          )}
          {card(
            avatar6,
            "Aditi Tripathi",
            "Software Development Engineer Intern Intel",
            "From Fresher to Software Development Engineer",
            "I learned how to write code that was clean, precise, and modular. I learned how to deploy projects. Every time I appeared fro interviews, I felt confident I would be selected.",
            "GL Bajaj Institute of Technology and Management (Batch 2019-2023)",
            "Software Development Engineer",
            Intel
          )}
          {card(
            avatar1,
            "Balaji Elumalai",
            "Engineering Data Author Boeing",
            "From Fresher to Engineering Data Author",
            "By doing all the real world projects at Capabl, you gain a lot of confidence about solving real world problems. If you work on Capabl projects, you’ll be able to crack interviews.",
            "Rajllakshmi College of engineering(Batch 2018 - 2022)",
            "Engineering Data Author",
            Boeing
          )}
          {card(
            avatar2,
            "Gaurav Jiwanani",
            "CAE Analyst Mercedes-Beng",
            "From SDE to CAE Analyst",
            "Capabl program was a game changer, We learned from industry experts who taught through hands on industry projects. As a result, i was able to secure my dream job. I highly recommend this Program!",
            "Senior Design Engineer",
            "CAE Analyst",
            Mercedes
          )}
          {card(
            avatar3,
            "Tejas Hegde",
            "Associate Software Engineer Bosch Global Software Technology",
            "From Intern to Associate Software Engineer",
            "The modules and tasks were similar to what we would do in a real job. Apart from a great resume, my problem-solving skills improved a lot too.",
            "Research Intern",
            "Associate Software Engineer",
            Bosch
          )}

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
      <Box className="ratingBox">
        <Typography mb={2} className="poppinsBold" sx={{ fontWeight: "700", textAlign: "center", color: "#DEB511", fontSize: "23px", }}>Our Ratings</Typography>
        <Typography mb={3} className="poppinsBold" sx={{ fontWeight: "700", textAlign: "center", fontSize: "42px" }} variant="h5">The Voice of Our Success</Typography>
        <Box className="ratingItemBox">
          {RatingCard(googleLogo, "4.8/5")}
          {RatingCard(ambitionBox, "4.4/5")}
          {RatingCard(studocu, "4.4/5")}
          {RatingCard(facebook, "4.8/5")}
        </Box>
      </Box>
    </Box>
  )
}
