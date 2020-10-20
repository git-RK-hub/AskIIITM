const router = require('express').Router();
const ansController = require('../Controllers/ansController');
const authController = require('../Controllers/authController');

router
  .route('/answer/:questionId')
  .post(authController.protect, ansController.addAnswer);

router
  .route('/answer/getAnswerForQues/:questionId')
  .get(ansController.getAnswerForQues);

router
  .route('/answer/getUserAnswers')
  .get(authController.protect, ansController.getUserAnswers);

router
  .route('/answer/getMostUpvotedAnswers/:questionId')
  .get(ansController.getUserAnswers);

module.exports = router;
