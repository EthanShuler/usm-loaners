const mongoose = require('mongoose')

const loanerSchema = new mongoose.Schema({
    deviceType: {
        type: String,
        required: true,
        enum: ['laptop', 'older laptop charger', 'usb-c charger', 'iPad', 'lightning charger']
    },
    isCheckedOut: {
        type: Boolean,
        required: true
    },
    deviceName: {
        type: String
    },
    description: {
        type: String
    },
    dateCheckedOut: {
        type: Date
    },
    personBorrowing: {
        type: String
    },
    division: {
        type: String,
        required: true,
        enum: ['LS', 'MS', 'US']
    }
})

loanerSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Loaner', loanerSchema)