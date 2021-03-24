const nodemailer = require('nodemailer');
const EmailTemplates = require('email-templates');
const path = require('path');

const { ROOT_EMAIL_PASSWORD, ROOT_EMAIL } = require('../configs/config');
const templatesInfo = require('../email-templates');

const templateParser = new EmailTemplates({
  views: {
    root: path.join(process.cwd(), 'email-templates')
  }
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: ROOT_EMAIL,
    pass: ROOT_EMAIL_PASSWORD
  }
});

const sendMail = async (userMail, action, context) => {
  try {
    const templateInfo = templatesInfo[action];

    if (!templateInfo) {
      throw new Error('Wrong mail action');
    }

    const html = await templateParser.render(templateInfo.templateName, context);

    return transporter.sendMail({
      from: ' NO REPLY',
      to: userMail,
      subject: templateInfo.subject,
      html
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  sendMail
};
