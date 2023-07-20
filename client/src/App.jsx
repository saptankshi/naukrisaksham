import React, { useState } from "react";

//Components
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import FeatureCards from "./Pages/FeatureCards"
import SecondBox from "./Pages/SecondBox";
import WorkFlow from "./Pages/WorkFlow";
import ForthBox from "./Pages/ForthBox";
import ForthBoxCard from "./Pages/ForthBox/ForthBoxCards";
import CompanyLogoBox from "./Pages/ForthBox/CompanyLogoBox"
import LearningBox from "./Pages/LearningBox";
import MediaBox from "./Pages/MediaBox";
import Onboarding from "./Pages/Onboarding"
import { CertificateBox } from "./Pages/CertificateBox";
import About from "./Pages/AboutBox/Achievement";
import LastCompanyLogoBox from "./Pages/AboutBox/LastCompanyLogoBox"
import Footer from "./Pages/Footer"
import { ScrollToTopButton } from "./components/ScrollToTop"
import Call from "./components/MakeCall/Call";
import "./style.css";
import Enroll from "./components/EnrollBox/Enroll"

export default function App() {
  const [enrollBox, setEnrollBox] = useState(false);
  return (
    <>
      <NavBar setEnrollBox={setEnrollBox} />
      <Home />
      <FeatureCards />
      <WorkFlow setEnrollBox={setEnrollBox} />
      <ForthBox />
      <CompanyLogoBox />
      <ForthBoxCard />
      <LearningBox />
      <MediaBox />
      <Onboarding />
      <CertificateBox />
      <About />
      <LastCompanyLogoBox />
      <Footer />
      <ScrollToTopButton />
      <Call />
      <Enroll enrollBox={enrollBox} setEnrollBox={setEnrollBox} />
    </>
  );
}
