const nodemailer = require(`nodemailer`);
//Здесь храняться настройки nodemailer
const transporter = nodemailer.createTransport(
    {
        host: 'smtp.mail.ru',   // Почта с которой будут рассылаться письма будет mail 
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'vlad.v321@mail.ru',       // логин этой mail почты
            pass: '121019601Vlad'                // пароль
         }
    },
    {
        from: 'Feedback Support <vlad.v321@mail.ru>',    // адрес почты которая отсылает писбма
        to: 'vlad.v321@gmail.com'              // адрес почты на которую будет приходить письмо
    }
);

// Функция которая отсылает письмо на почту
// выводить в консоль либо ошибку, либо резултат
const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if(err) return console.log(err);
        console.log('Email sent: ', info);
    })
};

module.exports = mailer;