const express = require('express')
const { addNote } = require('../controllers/noteController')
const router = express.Router({ mergeParams: true })
const { getNotes } = require('../controllers/noteController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getNotes).post(protect, addNote)

module.exports = router
