require("dotenv").config();

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SG_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "entlmale@gmail.com" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
