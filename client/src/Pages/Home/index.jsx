import React, { useState } from "react";
import { Box, Typography, TextField, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import axios from 'axios';
import { RedButton, YellowButton } from "../../components/AppButton";
import MediaImage from "../../Assets/images/MediaGirlImage.png";
import redPlayBtn from "../../Assets/images/redPlay btn.png"
import VectorLog from "../../Assets/images/Vector.png";
import EmailLog from "../../Assets/images/Vector (1).png";
import CallLog from "../../Assets/images/Vector (2).png";
import VectorG from "../../Assets/images/icons8-graduation-cap-50.png";
import VectorD from "../../Assets/images/VectorD.svg";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { handleVideoBoxScroll } from "../MediaBox"
import { loadScript } from 'react-razorpay';
import "./style.css";

export const handleHomeBoxScroll = () => {
  const videosBox = document.getElementById('HomeBox');
  videosBox.scrollIntoView({ behavior: 'smooth' });
};

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    collegeName: "",
    years: "",
    program: ""
  })

  console.log(value);
  console.log(phoneNumber);

  const GaduationYears = ["2023", "2024", "2025", "2026", "2027", "2028"];
  const program = ["Full Stack Development", "Data Science & ML/AI", "Electric Vehicles", "CAE Design"]

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      firstName: value.firstName,
      lastName: value.lastName,
      phoneNumber: phoneNumber,
      email: value.email,
      graduation: value.years,
      college: value.collegeName,
      program: value.program
    };

    try {
      // Create the order on the server
      const registrationResponse = await axios.post('http://localhost:8080/register', formData);
      const registrationId = registrationResponse.data.registrationId;

      const orderResponse = await axios.post('http://localhost:8080/razorpay/payment', {
        amount: 300, // Replace with the actual amount
        registrationId: registrationId, // Use the obtained registration ID
      });

      const order = orderResponse.data;

      // Load Razorpay script
      if (typeof loadScript !== 'undefined') {

      await loadScript('https://checkout.razorpay.com/v1/checkout.js');
      
      // Create a new instance of Razorpay
      const razorpay = new window.Razorpay({
        key: 'rzp_test_Sm2hQ0hpOd3Rss', // Replace with your actual Razorpay API key
        currency: 'INR',
      });
    
      // Handle the payment success
      const handlePaymentSuccess = (response) => {
        const paymentData = {
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        };

        // Send payment response to the server for verification and processing
        axios.post('http://localhost:8080/razorpay/payment/success', paymentData)
          .then(response => {
            console.log('Payment success:', response.data);
            // Additional logic or handling after successful payment
          })
          .catch(error => {
            console.error('Payment failed:', error);
            // Additional error handling logic
          });
      };

      // Open the Razorpay checkout dialog
      razorpay.on('payment.success', handlePaymentSuccess);
      razorpay.on('payment.cancel', () => {
        console.log('Payment cancelled');
      });
    
      razorpay.createPayment({
        order_id: order.order_id,
        amount: order.amount,
        companyname: 'Your Company Name',
        description: 'Payment for enrollment',
        name: `${value.firstName} ${value.lastName}`,
        email: value.email,
        contact: phoneNumber,

        // prefill: {
        //   name: `${value.firstName} ${value.lastName}`,
        //   email: value.email,
        //   contact: phoneNumber,
        // },
      });
    }
      // Clear the form fields
      setValue({
        firstName: '',
        lastName: '',
        email: '',
        collegeName: '',
        years: '',
        program: '',
      });
      setPhoneNumber('');
    } catch (error) {
      console.error('Razorpay payment error:', error);
      // Additional error handling logic
    }
  };



  return (
    <Box className="HContainer" id="HomeBox">
      <Box className="homeContainer">
        <Box className="aboutBox homeBox">
          <Box className="textBox">
            <Typography
              variant="h4"
            >
              NaukriSaksham
            </Typography>
            <Box mb={2} className="paragraphText">
              <Box className="firstLine">
                <Typography className="g" variant="h4" sx={{ margin: "0px 3px" }}>Skill</Typography>
                <Typography className="poppins v" sx={{ fontSize: "40px", margin: "0px 3px" }}>first,</Typography>
                <Typography className="g" variant="h4" sx={{ margin: "0px 3px" }}> Job</Typography>
                <Typography className="poppins v" sx={{ fontSize: "40px", margin: "0px 3px" }}>next,</Typography>
                <Typography className="g" variant="h4" sx={{ margin: "0px 3px" }}>Fees</Typography>
                <Typography className="poppins v" sx={{ fontSize: "40px", margin: "0px 3px" }}>last</Typography>
              </Box>
              <Box className="secondLine">
                <Typography className="secondLineText poppinsBold" variant="h4" sx={{ color: "rgb(255, 204, 0)}" }}>Our path to success!</Typography>
              </Box>
              <Box className="forthLine">
                <Typography className="poppins forthLineText" variant="h6">Be Naukrisaksham through</Typography>
                <Typography className="poppins forthLineText" variant="h6">Full stack | Data Science/ML/AI | Electric Vehicles</Typography>
              </Box>

            </Box>
            <Box className="btnMediaBox">
              {/* <Box className="mediaBtn">
                <RedButton onClick={handleCertificateBoxScroll} BtnText="View Certifications" width="200px" />
              </Box> */}
              <Box onClick={handleVideoBoxScroll} className="watchVideoMediaBox">
                <img className="mediaGirlImage" src={MediaImage} />
                <img className="redPlayBtn" src={redPlayBtn} />
                <Typography sx={{ minWidth: "123.19px", display: "flex", alignItems: "center", position: "relative", right: "38px" }}>Watch Our Video</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* //Enroll */}
        <Box className="inputBox homeBox">
          <Box className="contactBox">
            <Box sx={{ textAlign: "center" }} className="contactBoxItem">
              <Typography
                className="inputBoxHeader poppinsBold"
                sx={{ fontWeight: "700" }}
                variant="h4"
              >
                Start your Journey to Become<br /> NaukriSaksham
              </Typography>
            </Box>
            <Box mb={3} className="contactBoxItem">
              <Typography className="contactBoxItemSubHeader" sx={{ fontSize: "16px", textAlign: "center" }}>Skills First, Job Next, Fees Last</Typography>

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
              <img className="emailLog" style={{ width: "15px" }} src={EmailLog} alt="" />
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
              <img className="emailLog" style={{ width: "15px" }} src={VectorG} alt="" />
            </Box>
            <FormControl fullWidth style={{ marginBottom: "8px" }}>
              <InputLabel id="demo-simple-select-label" style={{ top: "-5px" }}>Graduation year</InputLabel>
              <Select
                name="years"
                style={{ height: '45px', borderRadius: '24px', marginBottom: "9px" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value.years}
                onChange={handleChange}
              >
                {
                  GaduationYears.map(el => (
                    <MenuItem key={el} value={el}>{el}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
            <FormControl fullWidth style={{ marginBottom: "8px" }}>
              <InputLabel id="demo-simple-select-label" style={{ top: "-5px" }}>Program</InputLabel>
              <Select
                name="program"
                style={{ height: '45px', borderRadius: '24px' }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value.program}
                onChange={handleChange}
              >
                {program.map(el => (
                  <MenuItem key={el} value={el}>{el}</MenuItem>
                ))
                }
              </Select>
            </FormControl>

            <Box id="EnrollBtnBox" className="contactBoxItem">
              <RedButton onClick={handleSubmit} BtnText="Enroll Now" width="100%" textClass="poppinsBold" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
