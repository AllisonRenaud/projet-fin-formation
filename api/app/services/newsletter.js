const db = require('../databases/postgres')
const sendEmail = require('./nodemail')
const newsLetterTemplate = require('../utils/email-templates/newsletter.Templatejs')
const cron = require('node-cron');


const sendNewsLetter = async () => {
  try {

    const {rows} = await db.query('SELECT "email" FROM "user"')
    const emails = rows.map(object => object.email)
    emails.forEach(async email => {
      const emailBody = newsLetterTemplate("jerome")
      
      // await sendEmail("ochaleto@gmail.com", "newsletter", emailBody)
      console.log(emailBody)
      
    })
  

  } catch (error) {
    console.log(error.message)
  }


}

cron.schedule('0,15,30,45 * * * * *', sendNewsLetter)


