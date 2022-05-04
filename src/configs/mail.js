const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "8346b8cfcf1e63", // generated ethereal user
    pass: "9c698951a56ab5", // generated ethereal password
  },
});
