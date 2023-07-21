const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RegisterModel = require("./models/Register1");
const Razorpay = require("razorpay");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/registrationform", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

app.post("/register", (req, res) => {
  const formData = req.body;
  RegisterModel.create(formData)
    .then((register) => {
      res.status(201).json({
        registrationId: register._id, // Return the registration ID in the response
      });
    })
    .catch((err) => {
      console.error("Failed to create registration:", err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.post("/razorpay/payment", async (req, res) => {
  const { amount, registrationId } = req.body;

  try {
    // Fetch the registration from the database
    const registration = await RegisterModel.findById(registrationId);
    if (!registration) {
      return res.status(404).json({ error: "Registration not found" });
    }

    // Create a new instance of Razorpay with your Razorpay API credentials
    const razorpay = new Razorpay({
      key_id: "rzp_test_Sm2hQ0hpOd3Rss",
      key_secret: "uSPD7zzVa6tdp4PGR50esy0X",
    });

    // Prepare the payment data
    const paymentData = {
      amount: amount * 100, // Convert amount to paise (Razorpay accepts amount in paise)
      currency: "INR",
      receipt: "receipt_" + registration._id,
      payment_capture: 1,
      notes: {
        registrationId: registration._id,
      },
    };

    // Create the Razorpay order
    const order = await razorpay.orders.create(paymentData);

    res.status(200).json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error("Razorpay payment error:", error);
    res.status(500).json({ error: "Razorpay payment error" });
  }
});

app.post("/razorpay/payment/success", (req, res) => {
  // Handle the successful payment response
  const paymentData = req.body;
  // Process the payment data and perform any necessary actions

  res.status(200).json({ message: "Payment successful" });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
