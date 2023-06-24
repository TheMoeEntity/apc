require("dotenv").config();
// import { NextResponse } from 'next/server'
// export async function POST(req) {
//     const { firstName, lastName, email, phone, message } = await req.json();
//     const mailer = require('nodemailer')

//     const transporter = mailer.createTransport({
//         port:465,
//         host: "smtp.gmail.com",
//         auth: {
//             user: process.env.MAIL,
//             pass: process.env.PASS
//         },
//         secure: true
//     })

//     let mailData = {
//         from: 'Moe\'s Portfolio page',
//         to: 'mosesnwigberi@gmail.com',
//         subject: `You have a message from ${firstName} in your portfolio page`,
//         text: message + "| Sent from: " + email,
//         html: `<div>
//         ${message}
//         </div><p>Sent from: ${email} <br />
//         Sender's phone: ${phone}
//         `
//     }

//     await new Promise((resolve, reject) => {
//         // verify connection configuration
//         transporter.verify(function (error, success) {
//             if (error) {
//                 console.log(error);
//                 reject(error);
//             } else {
//                 console.log("Server is ready to take our messages");
//                 resolve(success);
//             }
//         });
//     });

//     await new Promise((resolve, reject) => {
//         // send mail
//         transporter.sendMail(mailData, (err, info) => {
//             if (err) {
//                 console.error(err);
//                 reject(err);

//             } else {
//                 resolve(info);
//                 return NextResponse.json({ error: "All Done" }, { status: 200 });
//             }
//         });
//     });
// }

export async function POST(req, res) {
  const { firstName, lastName, email, phone, message } = await req.json();
  //require("dotenv").config();
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL,
      pass: process.env.NEXT_PUBLIC_PASS,
    },
    secure: true,
  });
  let mailData = {
    from: "Mrs Nosrati Law Group",
    to: "mosesnwigberi@gmail.com",
    subject: `You have a message from ${firstName} NLG website`,
    text: message + "| Sent from: " + email,
    html: `<div>
                ${message}
                </div><p>Sent from: ${email} <br />
                Sender's phone: ${phone}
                `,
  };
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
        return NextResponse.json({ error: "All Done" }, { status: 200 });
      }
    });
  });
}
