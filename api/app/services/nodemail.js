const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport({
  service: 'gmail',
  tls: {rejectUnauthorized: false},
  ignoreTLS: true,
  auth: {
    user: 'ochaleto@gmail.com',
    pass: 'Cpj5fAehfLbeeygx47MQ79wSP885ZASeL5mengwy'
  }
});



module.exports = (to, subject, text) => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: 'ochaleto@gmail.com',
      to,
      subject,
      html: `<h1 style="color:red">${text}</h1>`
    };
  
    transporter.sendMail(mailOptions, function(error, info){
      if (error) reject(error)

      if(info.response) resolve(info.response) 
       
    });
  })

}


