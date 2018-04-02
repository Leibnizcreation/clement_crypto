import express from 'express';
import uuidV1 from 'uuid/v1';
import Blogpost from '../models/blogpost';
import authUserMiddleware from './middlewares/authUserMiddleware';

const router = express.Router();

router.get('/', (req, res) => {
    Blogpost.find().sort({ _id: -1 }).then(posts => res.status(200).send({
        success: posts
    }))
        .catch(err => res.status(500).send({ err }));
})
router.get('/recent', (req, res) => {
    Blogpost.find().sort({_id:-1}).limit(4).then(posts => res.status(200).send({
        success: posts
    }))
        .catch(err => res.status(500).send({ err }));
})
    .get("/search", (req, res, next) => {
        if (req.query.title) {
            var searchText = ` ${req.query.title} `;
            Blogpost.find({ $text: { $search: searchText } }).sort({ views: -1 }).then((data) => { if (data) res.status(200).send({ result: data }); else res.status(401).send({ result: "empty" }) })
        }

    })
    .get("/postById", (req, res, next) => {

        Blogpost.findOne({ slug: req.query.slug }).then((post) => {
            if (post) {
                res.status(200).send({ success: post })
            } else (res.status(401).send({ empty: "There are no blog post available" }))

        })
    })

export default router