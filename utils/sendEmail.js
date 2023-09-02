require("dotenv").config;

const sgMail = require("@sendgrid/mail");

const message = {
  to: "uJY9s@example.com",
  from: "uJY9s@example.com",
  subject: "Sending with Twilio SendGrid is Fun",
  html: "<h1>node.js homework template</h1>",
  text: "node.js homework template",
};

sgMail
  .send(message)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
