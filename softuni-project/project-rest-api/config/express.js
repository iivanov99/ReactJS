const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

module.exports = (app) => {
  app.use(cors());

  app.use(bodyParser.urlencoded({
    extended: false
  }));

  app.use(express.json());

  app.use(cookieParser());
};