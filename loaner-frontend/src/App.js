import React, { useState, useEffect } from 'react'
import dummyData from './dummyData'

//components
import LoanerRow from './components/loanerRow'

const App = () => {
  const x = dummyData[0]
  return (
    <div>
      <LoanerRow
        deviceType={x.deviceType}
        isCheckedOut={x.isCheckedOut}
        deviceName={x.deviceName}
        description={x.description}
        dateCheckedOut={x.dateCheckedOut.toString()}
        personBorrowing={x.personBorrowing}
        division={x.division}
      />

    </div>
  )
}

export default App;
