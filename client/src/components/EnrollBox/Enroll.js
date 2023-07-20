import React, { useState } from "react";
import { RedButton, YellowButton } from "../AppButton";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

import "../../Pages/Home/style.css";
import "./style.css";
import cross from "../../Assets/images/PopupBoxLogos/cross-svgrepo-com.svg";

import MediaImage from "../../Assets/images/MediaGirlImage.png";
import redPlayBtn from "../../Assets/images/redPlay btn.png";
import VectorLog from "../../Assets/images/Vector.png";
import EmailLog from "../../Assets/images/Vector (1).png";
import CallLog from "../../Assets/images/Vector (2).png";
import VectorG from "../../Assets/images/VectorG.svg";
import VectorD from "../../Assets/images/VectorD.svg";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function Enroll({ enrollBox, setEnrollBox }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    collegeName: "",
    years: "",
    program: "",
  });

  console.log(value);
  console.log(phoneNumber);

  const GaduationYears = ["2023", "2024", "2025", "2026", "2027", "2028"];
  const program = [
    "Full Stack Development",
    "Data Science & ML/AI",
    "Electric Vehicles",
    "CAE Design",
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const submit = () => {
    const isAnyValueEmpty = Object.values(value).some((val) => val === "");

    if (!phoneNumber) {
      console.log("phoneNumber is empty");
      return;
    }

    if (isAnyValueEmpty) {
      // At least one value is empty
      console.log("Some values are empty");
      return;
    } else {
    }
  };

  const handelClose = () => {
    setEnrollBox(false);
  };
  return (
    <>
      <Box sx={{ display: enrollBox ? "flex" : "none" }} className="graBox">
        <Box className="inputBox homeBox homePopupBox">
          <Box className="contactBox">
            <Box sx={{ textAlign: "center" }} className="contactBoxItem">
              <Typography
                className="inputBoxHeader poppinsBold"
                sx={{ fontWeight: "700" }}
                variant="h4"
              >
                Start your Journey to Become
                <br /> NaukriSaksham
              </Typography>
            </Box>
            <Box className="contactBoxItem">
              <Typography
                className="contactBoxItemSubHeader"
                sx={{ fontSize: "16px", textAlign: "center" }}
              >
                Skills First, Job Next, Fees Last
              </Typography>
              <img
                onClick={handelClose}
                className="cross enrollCrossBtn"
                style={{ width: "42px" }}
                src={cross}
              />
            </Box>
            <Box mb={1} className="contactBoxItem nameInputFieldBox">
              <Box className="inputField">
                <TextField
                  name="firstName"
                  className="inputF"
                  sx={{ width: "100%" }}
                  placeholder="First Name"
                  InputProps={{
                    style: {
                      borderRadius: "23px",
                      height: "45px",
                      // width: "225px",
                    },
                  }}
                  value={value.firstName}
                  onChange={handleChange}
                />
                <img className="firstNameLog" src={VectorLog} alt="" />
              </Box>
              <Box className="inputField">
                <TextField
                  name="lastName"
                  sx={{ width: "100%" }}
                  placeholder="Last Name"
                  InputProps={{
                    style: {
                      borderRadius: "23px",
                      height: "45px",
                      // width: "100%",
                    },
                  }}
                  value={value.lastName}
                  onChange={handleChange}
                />
                <img className="lastNameLog" src={VectorLog} alt="" />
              </Box>
            </Box>

            <Box mb={1} className="contactBoxItem home_card_input">
              <PhoneInput
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                defaultCountry="IN" // Set the default country code (e.g., "US" for United States)
                // Any additional props you want to pass to the PhoneInput component
              />
              <img className="flagLog" src={CallLog} alt="" />
            </Box>
            <Box mb={1} className="contactBoxItem home_card_input">
              <TextField
                name="email"
                sx={{ width: "100%" }}
                type="text"
                placeholder="Email"
                InputProps={{
                  style: {
                    borderRadius: "23px",
                    height: "45px",
                    // width: "470px",
                  },
                }}
                value={value.email}
                onChange={handleChange}
              />
              <img
                className="emailLog"
                style={{ width: "15px" }}
                src={EmailLog}
                alt=""
              />
            </Box>
            <Box mb={1} className="contactBoxItem home_card_input">
              <TextField
                name="collegeName"
                sx={{ width: "100%" }}
                type="text"
                placeholder="College Name"
                InputProps={{
                  style: {
                    borderRadius: "23px",
                    height: "45px",
                  },
                }}
                value={value.collegeName}
                onChange={handleChange}
              />
              <img
                className="emailLog"
                style={{ width: "15px" }}
                src={VectorG}
                alt=""
              />
            </Box>
            <FormControl fullWidth style={{ marginBottom: "8px" }}>
              <InputLabel id="demo-simple-select-label" style={{ top: "-5px" }}>
                Graduation year
              </InputLabel>
              <Select
                name="years"
                style={{
                  height: "45px",
                  borderRadius: "24px",
                  marginBottom: "9px",
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value.years}
                onChange={handleChange}
              >
                {GaduationYears.map((el) => (
                  <MenuItem key={el} value={el}>
                    {el}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth style={{ marginBottom: "8px" }}>
              <InputLabel id="demo-simple-select-label" style={{ top: "-5px" }}>
                Program
              </InputLabel>
              <Select
                name="program"
                style={{ height: "45px", borderRadius: "24px" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value.program}
                onChange={handleChange}
              >
                {program.map((el) => (
                  <MenuItem key={el} value={el}>
                    {el}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Box id="EnrollBtnBox" className="contactBoxItem">
              <RedButton
                onClick={submit}
                BtnText="Enroll Now"
                width="100%"
                textClass="poppinsBold"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
