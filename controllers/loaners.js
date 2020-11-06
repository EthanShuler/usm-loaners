const loanersRouter = require('express').Router()
const Loaner = require('../models/loaner')

loanersRouter.get('/', (request, response) => {
    Loaner.find({}).then(loaners => {
        response.json(loaners)
    })
})

loanersRouter.get('/:id', (request, response, next) => {
    Loaner.findById(request.params.id)
      .then(loaner => {
          if (loaner) {
            response.json(loaner)
          } else {
            response.status(404).end()
          }
      })
      .catch(error => next(error))
})

loanersRouter.post('/', (request, response, next) => {
    const body = request.body
    const loaner = new Loaner({
        deviceType: body.deviceType,
        isCheckedOut: body.isCheckedOut,
        deviceName: body.deviceName,
        description: body.description,
        dateCheckedOut: new Date(),
        personBorrowing: body.personBorrowing,
        division: body.division
    })

    loaner.save()
      .then(savedLoaner => {
        response.json(savedLoaner)
      })
      .catch(error => next(error))
})

loanersRouter.delete('/:id', (request, response, next) => {
    Loaner.findByIdAndDelete(request.params.id)
      .then(() => {
          response.status(204).end()
      })
      .catch(error => next(error))
})

loanersRouter.put('/:id', (request, response, next) => {
    const body = request.body
    const loaner = {
        deviceType: body.deviceType,
        isCheckedOut: body.isCheckedOut,
        deviceName: body.deviceName,
        description: body.description,
        dateCheckedOut: new Date(),
        personBorrowing: body.personBorrowing,
        division: body.division
    }
    Loaner.findByIdAndUpdate(request.params.id, loaner, { new: true })
      .then(updatedLoaner => {
          response.json(updatedLoaner)
      })
      .catch(error => next(error))
})

module.exports = loanersRouter