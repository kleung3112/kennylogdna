const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Testing GET requests to /user endpoint'
  });
});

router.post('/message', (req, res, next) => {
  const reqMsg = req.body.message;
  console.log('Request Body: ' + reqMsg);
  res.status(200).json({
    requestBody: reqMsg,
    serverResponse: 'Request successfully received.',
    responseStatus: 200
  });
});

module.exports = router;
