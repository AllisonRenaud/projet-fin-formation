const db = require('../databases/postgres')
const sendEmail = require('./nodemail')
const newsLetterTemplate = require('../utils/email-templates/newsletter.Templatejs')



const mails = async () => {
  try {

    const {rows} = await db.query('SELECT "email" FROM "user"')
    const emails = rows.map(object => object.email)
    emails.forEach(async email => {
      const emailBody = newsLetterTemplate("jerome")
      
      await sendEmail("ochaleto@gmail.com", "newsletter", emailBody)
      
    })
  

  } catch (error) {
    console.log(error.message)
  }


}

mails()
