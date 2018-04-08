import express from 'express';
import bcrypt from 'bcrypt-nodejs';
import generator from 'generate-password';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import uuidV1 from 'uuid/v1';
import Earning from '../models/earnings';
import Site from '../models/sites';
import History from '../models/history';
import User from '../models/user';
import config from './config/config';
import authUserMiddleware from './middlewares/authUserMiddleware';

dotenv.config();

const helper = require('sendgrid').mail;

const SENDGRID_API_KEY = "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";
const sg = require('sendgrid')(SENDGRID_API_KEY);

const router = express.Router();

router.post('/', (req, res) => {
  const password = generator.generate({
    length: 10,
    numbers: true
  });
  const uuid = uuidV1();
  const hashedPassword = bcrypt.hashSync(password);
  const { email } = req.body;
  if (!password || !email) {
    return res.status(400).send({
      message: 'Please fill all fields'
    });
  }
  User.findOne({
    email
  }).then((user) => {
    if (user) {
      return res.status(400).send({
        message: 'user already exists'
      });
    }
    User.create({ email, password: hashedPassword, uuid })
      .then((newUser) => {
        const message = `<h4>Hi there</h4>
            <p>Welcome to BTC Grinders.</p>
            <p>Here is your password for future reference: ${password}.</p>
            <p>Thank you!</p>
          `;
        const fromEmail = new helper.Email('no-reply@btcgrinders.com');
        const toEmail = new helper.Email(email);
        const subject = 'Welcome to BTC Grinders';
        const content = new helper.Content('text/html', message);
        const mail = new helper.Mail(fromEmail, subject, toEmail, content);
        const request = sg.emptyRequest({
          method: 'POST',
          path: '/v3/mail/send',
          body: mail.toJSON()
        });

        sg.API(request, (error) => {
          if (error) {
            return res.status(400).send({
              error
            });
          }

          const token = jwt.sign(
            {
              uuid: newUser.uuid,
              roleId: newUser.role,
              email: newUser.email
            },
            config.jwtSecret
          );

          return res.status(200).send({
            message: 'Registration successful',
            token
          });
        });
      })
      .catch(err => res.status(400).send(err));
  });
});

router.get('/dashboard', authUserMiddleware, (req, res) => {
  const { email } = req.authenticatedUser;
  Earning.find({ email }).then((earnings) => {
    Site.find({ email }).then((sites) => {
      History.find({ email }).then((histories) => {
        const balances = {
          usd: 0,
          btc: 0,
          ltc: 0,
          eth: 0,
          bch: 0,
          dash: 0
        };
        earnings.forEach((earning) => {
          balances[earning.type] = earning.amount;
        });
        return res.status(200).send({
          user: req.authenticatedUser,
          earnings: balances,
          sites,
          histories
        });
      });
    });
  });
});

router.post('/site', authUserMiddleware, (req, res) => {
  const {
    email, username, siteName, siteType
  } = req.body;
  const id = uuidV1();
  Site.findOne({
    email,
    username,
    site_name: siteName,
    site_type: siteType
  }).then((site) => {
    if (!site) {
      User.findOne({ email }).then((user) => {
        if (!user) {
          const password = generator.generate({
            length: 10,
            numbers: true
          });
          const hashedPassword = bcrypt.hashSync(password);
          User.create({
            email,
            password: hashedPassword
          }).then((newUser) => {
            Site.create({
              id,
              email,
              username,
              site_type: siteType,
              site_name: siteName
            }).then(() => {
              const message = `<h4>Hi there</h4>
                      <p>Welcome to BTC Grinders.</p>
                      <p>Here is your password for future reference: ${password}.</p>
                      <p>Thank you!</p>
                    `;
              const fromEmail = new helper.Email('no-reply@btcgrinders.com');
              const toEmail = new helper.Email(email);
              const subject = 'Welcome to BTC Grinders';
              const content = new helper.Content('text/html', message);
              const mail = new helper.Mail(
                fromEmail,
                subject,
                toEmail,
                content
              );
              const request = sg.emptyRequest({
                method: 'POST',
                path: '/v3/mail/send',
                body: mail.toJSON()
              });

              sg.API(request, (error) => {
                if (error) {
                  return res.status(400).send({
                    error
                  });
                }
                const token = jwt.sign(
                  {
                    uuid: newUser.uuid,
                    roleId: newUser.role,
                    email: newUser.email
                  },
                  config.jwtSecret
                );

                return res.status(200).send({
                  message: 'User added successfully',
                  token,
                  type: 'new'
                });
              });
            });
          });
        } else {
          Site.create({
            id,
            email,
            username,
            site_type: siteType,
            site_name: siteName
          }).then(() =>
            res.status(200).send({
              message: 'Site registered successfully',
              type: 'old'
            }));
        }
      });
    } else {
      return res.status(400).send({
        message: 'You have already registered this site on our website'
      });
    }
  });
});

router.get('/search', (req, res) => {
  const { q } = req.query;
  User.find({ $or: [{ username: { $regex: `^${q}`, $options: 'i' } }, { email: { $regex: `^${q}`, $options: 'i' } }] })
    .then(users => res.status(200).send({ users }));
});

router.get('/sites/user', (req, res) => {
  const { email } = req.query;
  Site.find({ email }).then(sites => res.status(200).send(sites));
});
router.post('/contact', (req, res) => {
  const { email, message, subject } = req.body;
  const nodemailer = require('nodemailer');
  let transporter = nodemailer.createTransport({
    tls: {
      rejectUnauthorized: false
    },
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "btcgrindshare@gmail.com", // generated ethereal user
      pass: "JJJaaaaagrind123$" // generated ethereal password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: `${email}`, // sender address
    to: `support@btcgrinders.com`, // list of receivers
    subject: `${subject}`, // Subject line
    text: `${message}`, // plain text body
    // html: ' <body style="background:#f7f7f7"><div style="width:90%; background:#fff; margin:10px auto 20px;font-family:Verdana, Geneva, Tahoma, sans-serif"><div style="background:#F4EEE2; padding:10px;color:rgb(248, 150, 166)"><center><h3>Tamtamtools</h3></center></div><div style="padding:30px"><center><p style="font-family:Verdana, Geneva, Tahoma, sans-serif"><small>Congratulations! your tamtamtools account has successfully been created</small></p><h2>Verify Your Email</h2><p style="font-family:Verdana, Geneva, Tahoma, sans-serif"><small>Please click on this button below to login.</small></p><p style="margin: 30px"> <a href="https://tamtamtools.herokuapp.com/verify/' + token + '" style="font-size:0.9em;text-decoration:none;color:#000;border:1px solid #777;background:transparent;padding:10px 50px;font-family:Verdana"> Login</a></p></center></div><div style="background:#eee;height:2px;margin:10px 0px"></div><div style="padding:40px 20px;font-size:0.7em;color:#bbb"><center>Questions? Get your answers here: <a href="" style="color:blue">Help Center</a></a>.</center></div></div><div style="font-size:0.7em;text-align:center;color:#bbb;width:35%;margin:auto">Atavist | Brooklyn, New York, 11201 | Copyright © 2015 | All rights reserved</div></body>' // html body
  };


  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Message sent: %s', info.messageId);
      res.status(401).send({ "error": " failed" })
    } else{
      console.log(info)
      res.status(200).send({ "success": "Contact form was sent Successfully" })
    }
    // Preview only available when sending through an Ethereal account

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });

});
router.post('/resetPassword', (req, res) => {
  const { email} = req.body;

  User.findOne({ email }).then((user) => {
    if (user) {
      const password = generator.generate({
        length: 10,
        numbers: true
      });
      const hashedPassword = bcrypt.hashSync(password);
      const nodemailer = require('nodemailer');
      let transporter = nodemailer.createTransport({
        tls: {
          rejectUnauthorized: false
        },
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "btcgrindshare@gmail.com", // generated ethereal user
          pass: "JJJaaaaagrind123$" // generated ethereal password
        }
      });
      // setup email data with unicode symbols
      const message = `<h4>Hi there</h4>
            <p>You have successfully reset your password. Here is your new password for future reference: ${password}.</p>
            <p>Thank you!</p>
          `;
      const mailOptions = {
        from: `support@btcgrinders.com`, // sender address
        to: `${email}`, // list of receivers
        subject: `Password Reset`, // Subject line
        // text: `${message}`, // plain text body
        html: ' <body style="background:#f7f7f7"><div style="width:90%; background:#fff; margin:10px auto 20px;font-family:Verdana, Geneva, Tahoma, sans-serif"><div style="background:#F4EEE2; padding:10px;color:rgb(248, 150, 166)"><center><h3>ClementCrypto</h3></center></div><div style="padding:30px"><center><p style="font-family:Verdana, Geneva, Tahoma, sans-serif"><small>You have successfully reset your password. Here is your new password for future reference</small></p><h2>' + password + '</h2><p style="font-family:Verdana, Geneva, Tahoma, sans-serif"><small>Please click on this button below to login.</small></p><p style="margin: 30px"> <a href="http://144.217.241.177' + '" style="font-size:0.9em;text-decoration:none;color:#000;border:1px solid #777;background:transparent;padding:10px 50px;font-family:Verdana"> Login</a></p></center></div><div style="background:#eee;height:2px;margin:10px 0px"></div><div style="padding:40px 20px;font-size:0.7em;color:#bbb"><center>Questions? Get your answers here: <a href="http://144.217.241.177" style="color:blue">Help Center</a></a>.</center></div></div><div style="font-size:0.7em;text-align:center;color:#bbb;width:35%;margin:auto"> All rights reserved</div></body>' // html body
        // html body

      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Message sent: %s', info.messageId);
          res.status(401).send({ "error": " failed" })
        }else{
          User.findOneAndUpdate({ email }, { password: hashedPassword }).then((pass) => {
            if (pass) {
              console.log(info)
              res.status(200).send({ "success": "true" })
            }
          })
        }
        // Preview only available when sending through an Ethereal account
        
      })
    } else res.status(401).send({ error: true })
  }

  );
})
export default router;
