const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
// const bodyParser = require('bodyParser');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '/public')));

app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});

app.get('/', (req, res) => {
  res.render('home', { title: 'Home Page', fileName: 'home'});
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Page', fileName: 'about', content: "Let's be Friend!"});
});

app.get('/privacy-polity', (req, res) => {
  res.render('privacy-polity', { title: 'Privacy Polity Page', fileName: 'privacy-polity'});
});

app.get('/credit', (req, res) => {
  res.render('credit', { title: 'Credit Page', fileName: 'credit'});
});

app.get('/portfolio', (req, res) => {
  res.render('portfolio', { title: 'Portfolio Page', fileName: 'portfolio'});
  res.sendFile(__dirname + '/views/partials/form.ejs');
});

app.get('/portfolio/education', (req, res) => {
  res.render('education', { title: 'Education History Page', fileName: 'education', content: 'I Think it Enough'});
});

app.get('/portfolio/certificates', (req, res) => {
  res.render('certificates', { title: 'Certificates Page', fileName: 'certificates', content: "That's My Certificates"});
});

app.get('/portfolio/projects', (req, res) => {
  res.render('projects', { title: 'Projects Page', fileName: 'projects', content: 'Have Any Interesting Project Idea?'});
});

app.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'process.env.GMAIL_USER',
    pass: 'process.env.GMAIL_PASS'
  }
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'process.env.GMAIL_USER',
    subject: name,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      // res.send('Check ur email or try again for a second.');
      return res.status(500).send('Check ur email or try again for a second.');
    } else {
      console.log('Email Sended: ' + info.response);
      res.send('Email Successful Sended.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on host http://localhost:${PORT}`);
});