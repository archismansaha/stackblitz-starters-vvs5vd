const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/shout', (req, res) => {
  let name = req.query.name;
  let upperCaseName = name.toUpperCase();
  res.send(upperCaseName);
});
app.get('/fullname', (req, res) => {
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;

  const fullName = `${firstName} ${lastName}`;

  res.send(fullName);
});
app.get('/date', (req, res) => {
  const month = req.query.month;
  const year = req.query.year;

  const formattedDate = `${month}, ${year}`;

  res.send(formattedDate);
});
app.get('/greet', (req, res) => {
  const name = req.query.name;

  const greeting = `Namaste, ${name}!`;

  res.send(greeting);
});
app.get('/address', (req, res) => {
  const street = req.query.street;
  const city = req.query.city;
  const state = req.query.state;
  const address = `${street}, ${city}, ${state}`;
  res.send(address);
});
app.get('/email', (req, res) => {
  const username = req.query.username;
  const domain = req.query.domain;
  const email = `${username}@${domain}`;

  res.send(email);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
