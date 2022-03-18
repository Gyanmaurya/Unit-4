const nodemailer = require("nodemailer");

module.exports=nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, 
    auth: {
      user: "079da9c440064d", // generated ethereal user
      pass: "a48762323334d1", // generated ethereal password
    },
  });