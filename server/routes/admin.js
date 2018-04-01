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
    var tmpdir,fileName,time,newdir,Uploadpost,dir2;
    newform.parse(req, (err, fields, files) => {
       tmpdir = files.blogpost.path
       fileName = files.blogpost.name;
       time = new Date();
      newdir = path.join(__dirname, `../public/images`)
      newdir = path.join(__dirname, `../build/images`)
      dir2 = path.join(__dirname, `../public`)
       console.log(newdir)
       Uploadpost = new Blogpost({
        imgUrl: fileName,
        date: time,
        slug: slugify(fields.title),
        title: fields.title,
        category: fields.category,
        description: fields.description
      });
    })
    newform.on("end", function () {
      
      fs.rename(tmpdir, newdir, function () {
        fs.rename(tmpdir, dir2, function () {
        });
        Uploadpost.save().then().then((success) => { res.json({ success: "uploaded successfully" }) })
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
