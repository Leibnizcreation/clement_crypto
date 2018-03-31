import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from "./routes/config/mongoose"
import users from './routes/users';
import admin from './routes/admin';
import auth from './routes/auth';
import finance from './routes/finance';
import blog from './routes/blog';
dotenv.config();

const { MONGO_URL } = process.env;
// use nodemon starter.js to start the server
// mongoose.connect(MONGO_URL);

mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

const PORT = process.env.PORT || 5000;

const publicPath = path.join(__dirname, '../build');
console.log(publicPath)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use('/', express.static(publicPath));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin,Authorization, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/api/users', users);
app.use('/api/finance', finance);
app.use('/api/auth', auth);
app.use('/api/blog', blog);
app.use('/api/admin', admin);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// app.get('/americas-cardroom', (req, res) => {
//   const currentPage = req.session.currentPage;
//   const user = req.session.user;
//   res.render('pages/americas-cardroom', { page: 'americas-cardroom', currentPage, user });
// });

// app.get('/betonline', (req, res) => {
//   console.log(req.session);
//   const currentPage = req.session.currentPage;
//   const user = req.session.user;
//   res.render('pages/betonline', { page: 'betonline', currentPage, user });
// });

// app.get('/blackchip-poker', (req, res) => {
//   const currentPage = req.session.currentPage;
//   const user = req.session.user;
//   res.render('pages/blackchip-poker', { page: 'blackchip-poker', currentPage, user });
// });

// app.get('/blog', (req, res) => {
//   const currentPage = req.session.currentPage;
//   const user = req.session.user;
//   res.render('pages/blog', { page: 'blog', currentPage, user });
// });

// app.get('/contact', (req, res) => {
//   const currentPage = req.session.currentPage;
//   const user = req.session.user;
//   res.render('pages/contact', { page: 'contact', currentPage, user });
// });

// app.get('/faq', (req, res) => {
//   const currentPage = req.session.currentPage;
//   const user = req.session.user;
//   res.render('pages/faq', { page: 'faq', currentPage, user });
// });

// app.get('/forgot-pas', (req, res) => {
//   const currentPage = req.session.currentPage;
//   const user = req.session.user;
//   res.render('pages/forgot-pas', { page: 'forgot-pas', currentPage, user });
// });

// app.get('/intertoops', (req, res) => {
//   const currentPage = req.session.currentPage;
//   const user = req.session.user;
//   res.render('pages/intertoops', { page: 'intertoops', currentPage, user });
// });

// app.get('/login', (req, res) => {
//   const currentPage = req.session.currentPage;
//   const user = req.session.user;
//   res.render('pages/login', { page: 'login', currentPage, user });
// });

// app.get('/nitrogensports', (req, res) => {
//   const currentPage = req.session.currentPage;
//   const user = req.session.user;
//   res.render('pages/nitrogensports', { page: 'nitrogensports', currentPage, user });
// });

// app.get('/register', (req, res) => {
//   const currentPage = req.session.currentPage;
//   const user = req.session.user;
//   res.render('pages/register', { page: 'register', currentPage, user });
// });

// app.get('/single', (req, res) => {
//   const currentPage = req.session.currentPage;
//   const user = req.session.user;
//   res.render('pages/single', { page: 'single', currentPage, user });
// });

// app.get('/sports', (req, res) => {
//   req.session.currentPage = 'sports';
//   const user = req.session.user;
//   res.render('pages/sports', { page: 'sports', currentPage: 'sports', user });
// });

// app.get('/swc', (req, res) => {
//   const currentPage = req.session.currentPage;
//   const user = req.session.user;
//   res.render('pages/swc', { page: 'swc', currentPage, user });
// });

// app.get('/tos', (req, res) => {
//   const currentPage = req.session.currentPage;
//   const user = req.session.user;
//   res.render('pages/tos', { page: 'tos', currentPage, user });
// });

// app.get('/tools', (req, res) => {
//   req.session.currentPage = 'tools';
//   const user = req.session.user;
//   res.render('pages/tools', { page: 'tools', currentPage: 'tools', user });
// });

// app.get('/trading', (req, res) => {
//   req.session.currentPage = 'trading';
//   const user = req.session.user;
//   res.render('pages/trading', { page: 'trading', currentPage: 'trading', user });
// });

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
