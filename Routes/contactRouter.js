const contact = require('../controller/contactController');
const {check, validationResult} = require('express-validator/check');
const router = require('express').Router();

// route for add function with Express validation
router.post('/addContact',[
    // ...some validations...
    check('firstName')
      .isLength({ min: 5 }).withMessage('must be at least 5 chars long')
      .isAlpha().withMessage('letters only'),
    check('lastName')
      .isLength({ min: 5 }).withMessage('must be at least 5 chars long')
      .isAlpha().withMessage('letters only'),
    check('email')
      .isLength({ min: 6 }).withMessage('email be at least 5 chars long')
      .isEmail().withMessage('Must be valid email syntax'),
    check('mobile')
      .isLength(11).withMessage('must be at least 11 numbers')
      .isNumeric().withMessage('must be only numbers')
      .matches('(01)[0125][0-9]{8}').withMessage('Only egyptian mobile numbers')

  ],contact.addNewContact);

// Route for get all contacts for the user
router.post('/getList', contact.findUserContacts);

// Route for get the recent 5 contacts that added by user
router.post('/getRecentList', contact.recentContacts);


module.exports = router;