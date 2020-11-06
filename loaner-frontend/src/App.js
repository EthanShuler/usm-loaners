import React, { useState, useEffect } from 'react'
import loanerService from './services/loaner'

//components
import LoanerRow from './components/loanerRow'

const App = () => {
  const [devices, setDevices] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    loanerService.getAll()
      .then(initialLoaners => setDevices(initialLoaners))
  }, [])

  const handleSearchChange = (event) => setSearchTerm(event.target.value)

  const filtered = devices.filter(device => {
      return device.personBorrowing.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <div>Filter by borrower name <input value={searchTerm} onChange={handleSearchChange} /></div>
      </form>
      {filtered.map(device => {
        return (
          <LoanerRow
            key={device.id}
            deviceType={device.deviceType}
            isCheckedOut={device.isCheckedOut}
            deviceName={device.deviceName}
            description={device.description}
            dateCheckedOut={device.dateCheckedOut}
            personBorrowing={device.personBorrowing}
            division={device.division}
          />)
      })}

    </div>
  )
}

export default App;
