const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const path = require('path')
const PORT = process.env.PORT || 5000
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

//connect to DB
connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.status(200).json({ message: 'vandhutaaya! vandhutaaya!' })
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))
// serve front end
if (process.env.NODE_ENV === 'production') {
	//set build folder as static
	app.use(express.static(path.join(__dirname, '../frontend/build')))

	app.get('*', (req, res) =>
		res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html')
	)
} else {
	app.get('/', (req, res) => {
		res.status(200).json({ message: 'Welcome to the Support Desk API' })
	})
}
app.use(errorHandler)

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`)
})
