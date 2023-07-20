import React, { useState } from "react";
import LearningBoxCoverPhoto from "../../Assets/images/student-online-cute-young-guy-studying-computer-glasses-green-shirt-smiling-pointing 1.png";
import { Box, Typography } from "@mui/material";
import Polygon from "../../Assets/images/Polygon 1.svg";
import WhatsAppImage from "../../Assets/images/WhatsApp Image 2023-06-29 at 5.13 1.png";
import LiveSessions from "../../Assets/images/Live Session.png";
import PracticeInterviews from "../../Assets/images/Practice Interview.png";
import DoubtSolving from "../../Assets/images/Doubt Solving.png";
import PlacementPortal from "../../Assets/images/Placement Portal.png";

import "./style.css";

export const handleResourcesBoxScroll = () => {
  const videosBox = document.getElementById('ResourcesBox');
  videosBox.scrollIntoView({ behavior: 'smooth' });
};


export default function LearningBox() {
  const [selectedTab, setSelectedTab] = useState(0);

  const mediaImages = [
    WhatsAppImage,
    LiveSessions,
    PracticeInterviews,
    DoubtSolving,
    PlacementPortal,
  ];
  const mediaText = [
    {
      text: "Comprehensive Learning Platform for an Enhanced Learning Experience",
      subText:
        "Our learning portal provides a wide range of resources, materials, assessments, and practice problems, ensuring the best learning experience.",
    },
    {
      text: "Amplify Your Knowledge with Expert-Led Live Classes",
      subText:
        "Engage in weekly live sessions led by our experts to unlock your learning potential. Benefit from direct interaction with our instructors for an unparalleled and enriching learning experience.",
    },
    {
      text: "Unlimited 1-on-1 Mock Interviews with Mentors from Top Tech Companies.",
      subText:
        "Get set for success with endless support! Mentorship sessions, Resume/Project reviews, Mock HR interviews, and Job Readiness sessions all available to you.",
    },
    {
      text: "Instant Query Resolution with Live Doubt Assistance.",
      subText:
        "Receive immediate answers to your queries through our live doubt assistance. Our mentors are available via chat and video, ensuring that you never get stuck and can effectively manage your time.",
    },
    {
      text: "Streamline Job Applications with our Comprehensive Placement Portal.",
      subText:
        "Easily manage your job applications through our placement portal. Keep track of companies, positions, ongoing tests, technical and HR interviews, and secure your dream job in no time. Additionally, gain exclusive access to our partner companies for more opportunities.",
    },
  ];

  const handleTabClick = (e, index) => {
    setSelectedTab(index);
  };

  const tab = (text, index) => {
    const className =
      selectedTab === index ? "contentTabItemOnHover" : "contentTabItem";
    const polygonClass = selectedTab === index ? "polygon" : "polygonBlock";
    const contentText =
      selectedTab === index
        ? "contentTabText poppinsBold"
        : "contentText poppinsBold";
    return (
      <Box
        className={className}
        id="ResourcesBox"
        onClick={(e) => handleTabClick(e, index)}
        sx={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        }}
      >
        <Typography
          className={contentText}
          sx={{
            fontWeight: "600",
            fontSize: "18px",
            fontFamily: "Poppins-Bold",
          }}
        >
          {text}
        </Typography>
        <img className={polygonClass} src={Polygon} />
      </Box>
    );
  };

  return (
    <Box className="learningBox">
      <Typography
        className="poppinsBold"
        sx={{
          fontWeight: "700",
          textAlign: "center",
          color: "#DEB511",
          fontSize: "23px",
        }}
      >
        ONE-STOP LEARNING PLATFORM
      </Typography>
      <Typography
        className="poppinsBold"
        sx={{
          fontWeight: "700",
          textAlign: "center",
          fontSize: "42px",
        }}
        variant="h5"
      >
        Everything you need to crack
        <br /> your Dream Job
      </Typography>

      <Box className="contentBox">
        <Box className="contentTab">
          {tab("Learning Portal", 0)}
          {tab("Live Sessions", 1)}
          {tab("Practice Interviews", 2)}
          {tab("Doubt Solving", 3)}
          {tab("Placement Portal", 4)}
        </Box>

        <Box className="mediaBox">
          <Box className="mediaCover">
            <Box className="media">
              <img className="mediaImage" src={mediaImages[selectedTab]} />
            </Box>
          </Box>
          <Box className="media_Text">
            <Typography
              className="poppinsBold"
              sx={{ fontWeight: "700", fontSize: "35px" }}
              variant="h5"
            >
              {mediaText[selectedTab].text}
            </Typography>
            <Typography
              className="mediaParagraph"
              mt={3}
              sx={{
                fontWeight: "400",
                fontSize: "23px",
                fontFamily: "Satoshi",
              }}
            >
              {mediaText[selectedTab].subText}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
