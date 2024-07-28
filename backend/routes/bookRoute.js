const { Router } = require('express');
const { getAllBooks } = require('../controllers/booksController.js');

const router = Router();

router.route('/all').get(getAllBooks);

module.exports = router;
