const mongoose = require('mongoose')
const ticketSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		product: {
			type: String,
			required: [true, 'Please select a product'],
			enum: ['iPhone', 'iPad', 'Macbook', 'iMac'],
		},
		description: {
			type: String,
			required: [true, 'Please enter the description of the issue'],
		},
		status: {
			type: String,
			enum: ['new', 'open', 'closed'],
			required: true,
			default: 'new',
		},
	},
	{
		timestamps: true,
	}
)
module.exports = mongoose.model('Ticket', ticketSchema)
