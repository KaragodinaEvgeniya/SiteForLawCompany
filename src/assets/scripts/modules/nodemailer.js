const nodemailer = require('nodemailer');
    
    let testEmailAccount = await nodemailer.createTestAccount();
    
    let transporter = nodemailer.createTransport({
      host: 'ck41548@vh222.timeweb.ru',
      port: 465,
      secure: false,
      auth: {
        user: 'information@yuriskonsult.info',
        pass: 'assa2019'
      }
    });
    
    let result = await transporter.sendMail({
      from: '"Node js" <information@yuriskonsult.info>',
      to: "info@yuriskonsult.info",
      subject: "Обратная связь",
      text: "Свяжитесь со мной пожалуйста",
      html: "This <i>message</i> was sent from <strong>Node js</strong> server."
    });
    
    console.log(result);