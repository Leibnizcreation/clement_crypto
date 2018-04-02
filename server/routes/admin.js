import express from 'express';
import uuidV1 from 'uuid/v1';
import Site from '../models/sites';
import Payout from '../models/payouts';
import History from '../models/history';
import formidable from "formidable"
import Blogpost from "../models/blogpost"
import path from "path"
import slugify from "slugify"
import User from '../models/user';
import authUserMiddleware from './middlewares/authUserMiddleware';
import fs from 'fs'
const router = express.Router();
import cloudinary from "cloudinary"
cloudinary.config({
  cloud_name: 'afrikal',
  api_key: '345824351715158',
  api_secret: '55TwfraW6ST15TGvq6tjHSF9NfA'
})
router.get('/', authUserMiddleware, (req, res) => {
  const { role } = req.authenticatedUser;
  if (role !== 1) {
    return res.status(401).send({
      message: 'You are not authorized to view this page'
    });
  }
  Payout.find().then((payouts) => {
    Site.find().then(sites => res.status(200).send({
      payouts,
      sites
    }));
  })
})
router.post('/blogpost', (req, res, next) => {
  var newform = new formidable.IncomingForm();
  newform.keepExtensions = true;
  var tmpdir, fileName, time, newdir, Uploadpost, dir2;
  
  newform.parse(req, (err, fields, files) => {
   
      cloudinary.uploader.upload(files.blogpost.path, function (result) {
        if (result.url) {
          let time = new Date();
          Uploadpost = new Blogpost({
            imgUrl: result.url,
            date: time,
            slug: slugify(fields.title),
            title: fields.title,
            category: fields.category,
            description: fields.description
          });
          Uploadpost.save().then().then((success) => { res.status(200).send({ url: result.url, success: "uploaded successfully" }) })
        } else {
          res.status(401).send({ error: "Error uploading file" }); console.log("error uploading to cloudinary")
        }
      });
  })

});

router.post('/confirm-payment', authUserMiddleware, (req, res) => {
  const { role } = req.authenticatedUser;
  if (role !== 1) {
    return res.status(401).send({
      message: 'You are not authorized to perform this operation'
    });
  }
  const { id } = req.body;
  Payout.findOne({ id }).then((payout) => {
    if (!payout) {
      return res.status(400)
        .send({ message: 'Cannot find a payout with that id' });
    }
    Payout.update({ id }, { status: 1 })
      .then(() => {
        History.update({ id }, { value: 1 }).then(() => res.status(200)
          .send({ message: 'Payment request confirmed successfully' }));
      });
  });
});

router.post('/confirm-site', authUserMiddleware, (req, res) => {
  const { role } = req.authenticatedUser;
  if (role !== 1) {
    return res.status(401).send({
      message: 'You are not authorized to perform this operation'
    });
  }
  const { id, status } = req.body;
  Site.findOne({ id }).then((site) => {
    if (!site) {
      return res.status(404)
        .send({ message: 'Unable to find that entry' });
    }
    Site.update({ id }, { status })
      .then(() => res.status(200)
        .send({ message: 'Status updated successfully' }));
  });
});

router.get('/user', authUserMiddleware, (req, res) => {
  const { role } = req.authenticatedUser;
  if (role !== 1) {
    return res.status(401).send({
      message: 'You are not authorized to perform this operation'
    });
  }
  User.find().then(users => res.status(200).send({ users }))
    .catch(err => res.status(400).send({ err }));
});

module.exports = router
