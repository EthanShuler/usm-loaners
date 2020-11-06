import React, { useState, useEffect } from 'react'
import loanerService from './services/loaner'

//components
import LoanerRow from './components/loanerRow'

const App = () => {
  const [devices, setDevices] = useState([])
  const [nameSearch, setNameSearch] = useState('')
  const [divisionSearch, setDivisionSearch] = useState('')

  useEffect(() => {
    loanerService.getAll()
      .then(initialLoaners => setDevices(initialLoaners))
  }, [])

  const handleNameSearchChange = (event) => setNameSearch(event.target.value)
  const handleDivisionSearchChange = (event) => setDivisionSearch(event.target.value)
  console.log(divisionSearch);

  const filtered = devices.filter(device => {
      return device.personBorrowing.toLowerCase().includes(nameSearch.toLowerCase() && (divisionSearch === '' || device.division === divisionSearch))
  })

  return (
    <div>

      <form onSubmit={e => e.preventDefault()}>
        <div>Filter by borrower name <input value={nameSearch} onChange={handleNameSearchChange} /></div>
        <div>Filter by division
          <select onChange={handleDivisionSearchChange}>
            <option value=""></option>
            <option value="LS">LS</option>
            <option value="MS">MS</option>
            <option value="US">US</option>
          </select>
        </div>
      </form>

      <table>
        <thead>
          <tr className='tableHeader'>
            <th>Device Name</th>
            <th>Device Type</th>
            <th>Is checked out</th>
            <th>Person Borrowing</th>
            <th>Date Checked Out</th>
            <th>Division</th>
            <th>Additional Details</th>
          </tr>
        </thead>
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
            /> )
      })}
      </table>
    </div>
  )
}

export default App;
