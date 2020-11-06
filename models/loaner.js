const mongoose = require('mongoose')

const loanerSchema = new mongoose.Schema({
    deviceType: {
        type: String,
        required: true,
        enum: ['laptop', 'older laptop charger', 'usb-c charger', 'iPad', 'lightning charger']
    },
    isCheckedOut: {
        type: Boolean,
        default: false
    },
    deviceName: {
        type: String
    },
    description: {
        type: String
    },
    dateCheckedOut: {
        type: String
    },
    personBorrowing: {
        type: String,
        default: ''
    },
    division: {
        type: String,
        enum: ['LS', 'MS', 'US'],
        default: 'US'
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