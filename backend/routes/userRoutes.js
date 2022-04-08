const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
const {
	registerUser,
	loginUser,
	getMe,
} = require('../controllers/userControllers')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router
