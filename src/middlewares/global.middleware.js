const express = require('express');
const cors = require('cors');

const applyGlobalMiddleware = (app) => {
  app.use(cors());
  app.use(express.json());
};

module.exports = applyGlobalMiddleware;
