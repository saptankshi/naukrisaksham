import React from "react";
import { Box, Typography } from "@mui/material";
import "./popup.css";

//software logos
import python from "../../Assets/images/PopupBoxLogos/python 1.png";
import java from "../../Assets/images/PopupBoxLogos/java-logo-transparent-free-png 1.png";
import html from "../../Assets/images/PopupBoxLogos/HTML5_logo_and_wordmark 2.png";
import react from "../../Assets/images/PopupBoxLogos/React_logo_wordmark 1.png";
import express from "../../Assets/images/PopupBoxLogos/express-5-logo-png-transparent 1.png";
import css from "../../Assets/images/PopupBoxLogos/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9 1.png";
import amazon from "../../Assets/images/PopupBoxLogos/1024px-Amazon_Web_Services_Logo 1.png";
import mongodb from "../../Assets/images/PopupBoxLogos/58481021cef1014c0b5e494b 1.png";
import heroku from "../../Assets/images/PopupBoxLogos/kisspng-logo-node-js-heroku-scalable-vector-graphics-font-mode-analytics-status-change-notifications-5b80db52036928 1.png";
import node from "../../Assets/images/PopupBoxLogos/nodejs-logo-vector 1.svg";

import sql from "../../Assets/images/PopupBoxLogos/Sql_data_base_with_logo 1.png";
import jupyter from "../../Assets/images/PopupBoxLogos/532-5326567_there-is-a-tool-for-load-testing-the 1.png";
import pythons from "../../Assets/images/PopupBoxLogos/python 1s.png";

import matlab from "../../Assets/images/PopupBoxLogos/Matlab.png";
import creo from "../../Assets/images/PopupBoxLogos/Creo_logo 1.png";
import Simcenter from "../../Assets/images/PopupBoxLogos/Simcenter_MS_Final_c 1.png";
import psim from "../../Assets/images/PopupBoxLogos/PSIM_logo 1.png";
import simea from "../../Assets/images/PopupBoxLogos/simea.png";

//project logo
import amazonp from "../../Assets/images/PopupBoxLogos/Amazon_logo 2.png";
import twitter from "../../Assets/images/PopupBoxLogos/twitter-company-png-logo-5 1.png";
import linkedin from "../../Assets/images/PopupBoxLogos/Linkedin-Logo-2011 1.png";
import www from "../../Assets/images/PopupBoxLogos/pngegg 1.png";
import microsoftTem from "../../Assets/images/PopupBoxLogos/Microsoft-Teams-Emblem 1.png";
import spotify from "../../Assets/images/PopupBoxLogos/Spotify_Logo_CMYK_Green 1.png";

import solidworks from "../../Assets/images/PopupBoxLogos/6011d13a2a08e9000490aba1 1.png";
import engineering from "../../Assets/images/PopupBoxLogos/image 107.png";
import ansys from "../../Assets/images/PopupBoxLogos/ANSYS_logo 1.png";
import hypermesh from "../../Assets/images/PopupBoxLogos/hypermesh.png";
import siemensnx from "../../Assets/images/PopupBoxLogos/1840834 1.png";
import catia from "../../Assets/images/PopupBoxLogos/image 108.png";

import tataSafari from "../../Assets/images/PopupBoxLogos/output-onlinepngtools-3.png";
import mercedes from "../../Assets/images/PopupBoxLogos/Mercedes-Benz_Logo_2010 1.png";
import ps5 from "../../Assets/images/PopupBoxLogos/pngwing 1.png";
import toyota from "../../Assets/images/PopupBoxLogos/toyota-logos-brands-logotypes-0 1.png";
import volvo from "../../Assets/images/PopupBoxLogos/volvo-3-logo-png-transparent 1.png";
import hyundai from "../../Assets/images/PopupBoxLogos/Hyundai-Logo 2.png";

import ather from "../../Assets/images/PopupBoxLogos/ather.png";
import ultraviolette from "../../Assets/images/PopupBoxLogos/ultraviolette.png";
import nexon from "../../Assets/images/PopupBoxLogos/nexon.png";
import tesla from "../../Assets/images/PopupBoxLogos/tesla.png";
import hyundai2 from "../../Assets/images/PopupBoxLogos/hyundai.png";

//avatar
import avatar1 from "../../Assets/images/PopupBoxLogos/avatar/image 115.png";
import avatar2 from "../../Assets/images/PopupBoxLogos/avatar/image 115 (1).png";
import avatar3 from "../../Assets/images/PopupBoxLogos/avatar/image 129.png";
import avatar4 from "../../Assets/images/PopupBoxLogos/avatar/image 129 (1).png";
import avatar5 from "../../Assets/images/PopupBoxLogos/avatar/image 13de1.png";
import avatar6 from "../../Assets/images/PopupBoxLogos/avatar/image 131.png";
import avatar7 from "../../Assets/images/PopupBoxLogos/avatar/image 137.png";
import avatar8 from "../../Assets/images/PopupBoxLogos/avatar/image 137 (1).png";

import capabl from "../../Assets/images/PopupBoxLogos/capabl.png";
import Hundas from "../../Assets/images/PopupBoxLogos/himage 114.png";
import MWr from "../../Assets/images/PopupBoxLogos/mScreenshot 2023-07-11 161204.png";
import MW from "../../Assets/images/PopupBoxLogos/mpngwing 2.png";
import ALogo from "../../Assets/images/PopupBoxLogos/aimage 133.png";
import gLogo from "../../Assets/images/PopupBoxLogos/gimage 134.png";
import bostos from "../../Assets/images/PopupBoxLogos/bostos.png";
import avl from "../../Assets/images/PopupBoxLogos/avl.png";

import DownArrow from "../../Assets/images/PopupBoxLogos/Vector.svg";
import leftArrow from "../../Assets/images/PopupBoxLogos/Vector (1).svg";
import cross from "../../Assets/images/PopupBoxLogos/cross-svgrepo-com.svg";

const projectCard = (logo, text, imageWidth = "100%") => {
  return (
    <Box className="projectItem">
      <Typography className="poppinsBold" sx={{ textAlign: "center" }}>
        {text}
      </Typography>
      <img style={{ width: imageWidth }} src={logo} />
    </Box>
  );
};

const expertCardLogo = (logo, logoWidth = "100%") => {
  return (
    <Box className="expertCardLogoBox">
      <img style={{ width: logoWidth }} src={logo} />
    </Box>
  );
};

const expertCard = (
  avatar,
  name,
  subtext,
  mCardLogo,
  footerText1,
  footerText2,
  logoWidth
) => {
  return (
    <Box className="expertCard">
      <Box className="expertCardAvatarBox">
        <img src={avatar} />
      </Box>
      <Box className="expertCardM">
        <Typography className="poppinsBold">{name}</Typography>
        <Typography className="poppins">{subtext}</Typography>
        <img src={DownArrow} />
        {expertCardLogo(mCardLogo, logoWidth)}
      </Box>

      <Box className="expertCardFooter">
        <Box className="CardFooterText">
          <Box>
            <img style={{ marginRight: "8px" }} src={leftArrow} />
          </Box>
          <Typography>{footerText1}</Typography>
        </Box>
        <Box className="CardFooterText">
          <Box>
            <img style={{ marginRight: "8px" }} src={leftArrow} />
          </Box>
          <Typography>{footerText2}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export const FullStackDevelopment = (handelClose) => {
  return (
    <>
      <Box className="grayBackground">
        <Box className="popupBox">
          <Box className="popupBoxHeader">
            <Typography variant="h5" className="poppinsBold">
              Full Stack Development
            </Typography>
            <img
              onClick={handelClose}
              className="cross crossFllStack"
              style={{ width: "42px" }}
              src={cross}
            />
          </Box>
          <Box className="content_Box">
            <Box className="MajorModules">
              <Typography ml={2} className="poppinsBold">
                Major Modules
              </Typography>
              <Box className="MajorModulesItems">
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    1. Python Programming
                  </Typography>
                  <Typography>
                    Learning the depths of most versatile and popular
                    programming language
                  </Typography>
                </Box>
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    2. Fundamentals of Programming in JAVA
                  </Typography>
                  <Typography>
                    Exploring the knowledge well of the most widely-used
                    object-oriented programming language.
                  </Typography>
                </Box>
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    3. Data Structures and Algorithms - JAVA
                  </Typography>
                  <Typography>
                    Acquiring essential knowledge for efficient problem-solving
                    in programming.
                  </Typography>
                </Box>
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    4. Web development fundamentals (frontend)
                  </Typography>
                  <Typography>
                    Creating interactive and user-friendly interfaces for web
                    applications.
                  </Typography>
                </Box>
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    5. React Fundamentals
                  </Typography>
                  <Typography>
                    Mastering the popular JavaScript library for building
                    interactive user interfaces.
                  </Typography>
                </Box>
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    6. Web development fundamentals (backend)
                  </Typography>
                  <Typography>
                    Creating and managing server-side applications and databases
                    for web development.
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="SoftwareLearnBox">
              <Typography mb={2} ml={2} variant="h5" className="poppinsBold">
                Software Learn
              </Typography>
              <Box className="SoftwareLearn">
                <Box className="Logos l1">
                  <img src={python} />
                </Box>
                <Box className="Logos l1">
                  {/* <img style={{ width: "74%" }} src={engineering} /> */}
                  <img src={java} />
                </Box>
                <Box className="Logos l1">
                  <img src={html} />
                </Box>
                <Box className="Logos l1">
                  <img src={react} />
                </Box>
                <Box className="Logos l1">
                  <img src={express} />
                </Box>
                <Box className="Logos l1">
                  <img src={css} />
                </Box>
                <Box className="Logos l1">
                  <img src={amazon} />
                </Box>
                <Box className="Logos l1">
                  <img src={mongodb} />
                </Box>
                <Box className="Logos l1">
                  <img src={heroku} />
                </Box>
                <Box className="Logos l1">
                  <img src={node} />
                </Box>
              </Box>
            </Box>

            <Box className="PopupProjectBox">
              <Typography
                ml={2}
                py={2}
                pb={4}
                variant="h5"
                className="poppinsBold"
              >
                Projects
              </Typography>
              <Box className="projectItems">
                {projectCard(amazonp, "Amazon shopping app development", "55%")}
                {projectCard(
                  twitter,
                  "Twitter Social Media Development",
                  "29%"
                )}
                {projectCard(
                  linkedin,
                  "LinkedIn Professionals portfolio ",
                  "56%"
                )}
                {projectCard(www, "Website development", "26%")}
                {projectCard(
                  microsoftTem,
                  "Microsoft team task management tool development",
                  "64%"
                )}
                {projectCard(
                  spotify,
                  "Microsoft team task management tool development",
                  "50%"
                )}
              </Box>
            </Box>

            <Box className="ExpertProfile">
              <Typography ml={2} mb={2} variant="h5" className="poppinsBold">
                Expert Profile
              </Typography>
              <Box className="expertItems">
                {expertCard(
                  avatar3,
                  "Jitendra Singh Sankhla",
                  "Engineering Manager",
                  MWr,
                  "14+ years Exp in API, NCP, DARTs Development ",
                  "Engineering Manager at Microsoft, Ex director of engineering at Nano heal",
                  "90%"
                )}
                {expertCard(
                  avatar4,
                  "Shubham Lal",
                  "Software Developer",
                  MW,
                  "8+ years Exp. in backend and react development",
                  "Software Development at Microsoft",
                  "74%"
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export const DataScienceBox = (handelClose) => {
  return (
    <>
      <Box className="grayBackground">
        <Box className="popupBox">
          <Box className="popupBoxHeader">
            <Typography variant="h5" className="poppinsBold">
              Data Science WithAI/ML/Python
            </Typography>
            <img
              className="cross crossDataSc"
              onClick={handelClose}
              style={{ width: "42px" }}
              src={cross}
            />
          </Box>
          <Box className="content_Box">
            <Box className="MajorModules">
              <Typography ml={2} className="poppinsBold">
                Major Modules
              </Typography>
              <Box className="MajorModulesItems">
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    1. Python Programming
                  </Typography>
                  <Typography>
                    Learning the depths of most versatile and popular
                    programming language
                  </Typography>
                </Box>
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    2. Data Analysis and Visualization
                  </Typography>
                  <Typography>
                    Extracting insights and presenting data in a meaningful way.
                  </Typography>
                </Box>
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    3. Web Scrapping
                  </Typography>
                  <Typography>
                    Extracting data from websites using automated scripts or
                    tools.
                  </Typography>
                </Box>
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    4.Machine Learning
                  </Typography>
                  <Typography>
                    Developing algorithms that enable computers to learn and
                    predict from data.
                  </Typography>
                </Box>
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    5. Deep Learning
                  </Typography>
                  <Typography>
                    Training neural networks to make very complex, data-driven
                    predictions.
                  </Typography>
                </Box>
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    6. Image Processing & Computer Vision
                  </Typography>
                  <Typography>
                    Analyzing and interpreting visual images using algorithms
                    and techniques.
                  </Typography>
                </Box>
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    6. Natural Language Processing
                  </Typography>
                  <Typography>
                    Analyzing and understanding human language using
                    computational techniques.
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="SoftwareLearnBox">
              <Typography mb={2} ml={2} variant="h5" className="poppinsBold">
                Software Learn
              </Typography>
              <Box className="SoftwareLearn">
                <Box className="Logos l2">
                  <img src={sql} />
                </Box>
                <Box className="Logos l2">
                  <img src={jupyter} />
                </Box>
                <Box className="Logos l2">
                  <img src={pythons} />
                </Box>
              </Box>
            </Box>

            <Box className="PopupProjectBox">
              <Typography
                ml={2}
                py={2}
                pb={4}
                variant="h5"
                className="poppinsBold"
              >
                Projects
              </Typography>
              <Box className="projectItems">
                {projectCard(amazonp, "Amazon shopping app development", "55%")}
                {projectCard(
                  twitter,
                  "Twitter Social Media Development",
                  "29%"
                )}
                {projectCard(
                  linkedin,
                  "LinkedIn Professionals portfolio ",
                  "56%"
                )}
                {projectCard(www, "Website development", "26%")}
                {projectCard(
                  microsoftTem,
                  "Microsoft team task management tool development",
                  "64%"
                )}
                {projectCard(
                  spotify,
                  "Microsoft team task management tool development",
                  "50%"
                )}
              </Box>
            </Box>

            <Box className="ExpertProfile">
              <Typography ml={2} mb={2} variant="h5" className="poppinsBold">
                Expert Profile
              </Typography>
              <Box className="expertItems">
                {expertCard(
                  avatar5,
                  "Saahil Agrawal",
                  "Machine Learning Engineer",
                  ALogo,
                  "Alumni of IIT Madras & Standford University",
                  "Currently working with Abnormal Security.",
                  "54px"
                )}
                {expertCard(
                  avatar6,
                  "Sundar Iyer",
                  "Founder and CEO",
                  gLogo,
                  "8+ years in Design domain",
                  "With over 4.5 years in automotive product development cycle & Crash test designing.",
                  "72px"
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export const ElectricVehicleBox = (handelClose) => {
  return (
    <>
      <Box className="grayBackground">
        <Box className="popupBox">
          <Box className="popupBoxHeader">
            <Typography variant="h5" className="poppinsBold">
              Electric Vehicle & Design
            </Typography>
            <img
              className="cross crossElectric"
              onClick={handelClose}
              style={{ width: "42px" }}
              src={cross}
            />
          </Box>
          <Box className="content_Box">
            <Box className="MajorModules">
              <Typography ml={2} className="poppinsBold">
                Major Modules
              </Typography>
              <Box className="MajorModulesItems">
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    1. Vehicle Dynamics
                  </Typography>
                  <Typography>
                    Studying and analyzing the motion and behavior of vehicles.
                  </Typography>
                </Box>
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    2. Plastic Product Designing
                  </Typography>
                  <Typography>
                    Creating innovative and functional designs for plastic
                    products.
                  </Typography>
                </Box>
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    3. Sheet Metal Product Designing
                  </Typography>
                  <Typography>
                    Developing efficient and precise designs for Sheet
                    metal-based products.
                  </Typography>
                </Box>
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    4. BIW Parts & Fixture Design
                  </Typography>
                  <Typography>
                    Creating robust designs for automotive Body-in-White parts
                    and fixtures.
                  </Typography>
                </Box>
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    5. FEA & Design Optimization
                  </Typography>
                  <Typography>
                    Analyzing and improving product designs through
                    Computational Analysis.
                  </Typography>
                </Box>
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    6. CFD & Thermal Analysis
                  </Typography>
                  <Typography>
                    Simulating fluid flow and heat transfer for accurate
                    engineering assessments.
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="SoftwareLearnBox">
              <Typography mb={2} ml={2} variant="h5" className="poppinsBold">
                Software Learn
              </Typography>
              <Box className="SoftwareLearn">
                <Box className="Logos l3">
                  <img src={solidworks} />
                </Box>
                <Box className="Logos l3">
                  <img style={{ width: "74%" }} src={engineering} />
                </Box>
                <Box className="Logos l3">
                  <img src={ansys} />
                </Box>
                <Box className="Logos l3">
                  <img src={catia} />
                </Box>
                <Box className="Logos l3">
                  <img src={siemensnx} />
                </Box>
                <Box className="Logos l3">
                  <img src={hypermesh} />
                </Box>
              </Box>
            </Box>

            <Box className="PopupProjectBox">
              <Typography
                ml={2}
                py={2}
                pb={4}
                variant="h5"
                className="poppinsBold"
              >
                Projects
              </Typography>
              <Box className="projectItems">
                {projectCard(tataSafari, "Hood Design of TATA Safari", "80%")}
                {projectCard(volvo, "Hood Design of TATA Safari", "60%")}
                {projectCard(mercedes, "Hood Design of TATA Safari", "56%")}
                {projectCard(toyota, "Hood Design of TATA Safari", "28%")}
                {projectCard(ps5, "Hood Design of TATA Safari", "45%")}
                {projectCard(hyundai, "Hood Design of TATA Safari", "68%")}
              </Box>
            </Box>

            <Box className="ExpertProfile">
              <Typography ml={2} mb={2} variant="h5" className="poppinsBold">
                Expert Profile
              </Typography>
              <Box className="expertItems">
                {expertCard(
                  avatar1,
                  "Arbaz Shaikh",
                  "Senior Research Associate",
                  capabl,
                  "7+ years in Vehicle Dynamics domain",
                  "CAD, FEA, CAE and CFD analysis with Hands-on experience of working with 15000+ students for training in",
                  "74%"
                )}
                {expertCard(
                  avatar2,
                  "Sundar Iyer",
                  "Founder and CEO",
                  Hundas,
                  "8+ years in Design domain",
                  "With over 4.5 years in automotive product development cycle & Crash test designing.",
                  "74%"
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export const AdvanceCarBox = (handelClose) => {
  return (
    <>
      <Box className="grayBackground">
        <Box className="popupBox">
          <Box className="popupBoxHeader">
            <Typography variant="h5" className="poppinsBold">
              Advice Care & Design
            </Typography>
            <img
              className="cross crossAdvance"
              onClick={handelClose}
              style={{ width: "42px" }}
              src={cross}
            />
          </Box>
          <Box className="content_Box">
            <Box className="MajorModules">
              <Typography ml={2} className="poppinsBold">
                Major Modules
              </Typography>
              <Box className="MajorModulesItems">
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    1. EV Fundamentals
                  </Typography>
                  <Typography>
                    Understanding the working od Electric Vehicles and how they
                    are different from ICE Vehicle
                  </Typography>
                </Box>
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    2. E/E Architecture
                  </Typography>
                  <Typography>
                    Learning the combination of Electrical systems to power an
                    EV
                  </Typography>
                </Box>
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    3. Li-ion cell and BMS technology
                  </Typography>
                  <Typography>
                    Modeling Li-ion battery and battery Management System for
                    efficient performanceof EV.
                  </Typography>
                </Box>
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    4. Battery pack design
                  </Typography>
                  <Typography>
                    Designing battery packs for optimal performance and energy
                    storage efficiency.
                  </Typography>
                </Box>
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    5. Motor Technology
                  </Typography>
                  <Typography>
                    Selecting and designing motors to meet performance
                    requirements for Electric Vehicles.
                  </Typography>
                </Box>
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    6. Power Electronics
                  </Typography>
                  <Typography>
                    Choosing and designing power electronics for efficient
                    energy conversion in EVs.
                  </Typography>
                </Box>
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    7. CAN Protocols
                  </Typography>
                  <Typography>
                    Understanding the fundamentals of automotive communication
                    networks.
                  </Typography>
                </Box>
                <Box className="MajorItem">
                  <Typography className="poppinsBold">
                    {" "}
                    8. Wiring harness
                  </Typography>
                  <Typography>
                    Understanding the electrical connections and layout in
                    Electric Vehicles.
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="SoftwareLearnBox">
              <Typography mb={2} ml={2} variant="h5" className="poppinsBold">
                Software Learn
              </Typography>
              <Box className="SoftwareLearn">
                <Box className="Logos l4">
                  <img src={matlab} />
                </Box>
                <Box className="Logos l4">
                  <img src={creo} />
                </Box>
                <Box className="Logos l4">
                  <img style={{ width: "41%" }} src={Simcenter} />
                </Box>
                <Box className="Logos l4">
                  <img style={{ width: "83%" }} src={psim} />
                </Box>
                <Box className="Logos l4">
                  <img style={{ width: "117%" }} src={simea} />
                </Box>
              </Box>
            </Box>

            <Box className="PopupProjectBox">
              <Typography
                ml={2}
                py={2}
                pb={4}
                variant="h5"
                className="poppinsBold"
              >
                Projects
              </Typography>
              <Box className="projectItems">
                {projectCard(
                  ather,
                  "Aether Powertrain Sizing in MATLAB Simulink",
                  "50%"
                )}
                {projectCard(
                  ultraviolette,
                  "Designing 6kW battery pack for a Ultraviolet S77",
                  "55%"
                )}
                {projectCard(
                  nexon,
                  "Design of Buck/Boost converter for TATA Nexon",
                  "50%"
                )}
                {projectCard(tesla, "Modeling a BMS for Tesla Model S", "50%")}
                {projectCard(
                  hyundai2,
                  "Wiring Harness schematics of Hyundai Kona",
                  "63%"
                )}
              </Box>
            </Box>

            <Box className="ExpertProfile">
              <Typography ml={2} mb={2} variant="h5" className="poppinsBold">
                Expert Profile
              </Typography>
              <Box className="expertItems">
                {expertCard(
                  avatar7,
                  "Allwin Vijay Joseph Jayaraju",
                  "Senior Architect",
                  bostos,
                  "14+ years Exp in embedded systems",
                  "Senior Architect Engineering at Bosch Global Software Technologies",
                  "67%"
                )}
                {expertCard(
                  avatar8,
                  "Aayush Shukla",
                  "Senior Architect",
                  avl,
                  "6+ years Exp. - EV Benchmarking",
                  "Expertise : EV/HEV Architecture, Vehicle Benchmarking",
                  "37%"
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
