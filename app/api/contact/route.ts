require("dotenv").config();
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { firstName, address, email, phone, message } = await req.json();
  require("dotenv").config();
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
    to: "sykik09@gmail.com",
    subject: `You have a message from ${firstName} in the NLG website`,
    text: message + "| Sent from: " + email,
    html: `<div>
                ${message}
                </div><p>Sent from: ${email} <br />
                Sender's phone: ${phone} <br />
                Sender's address: ${address}
                `,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log("This is the error" + err);
        reject("This is the error" + err);
      } else {
        resolve(info);
        return NextResponse.json({ error: "All Done" }, { status: 20 });
      }
    });
  });
  return NextResponse.json({ error: "All Done" }, { status: 200 });
}
