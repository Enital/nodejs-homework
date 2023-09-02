require("dotenv").config();

const sgMail = require("@sendgrid/mail");
const { SG_API_KEY } = process.env;

sgMail.setApiKey(SG_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "entlmale@gmail.com" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
