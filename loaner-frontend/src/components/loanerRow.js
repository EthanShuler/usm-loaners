import React from 'react'

const LoanerRow = (props) => {
    console.log('props: ',props)
    return (
        <div>
            <p>Device Type: {props.deviceType}</p>
            {/* <p>checked out: {props.isCheckedOut ? "True" : "False"}</p> */}
            <p>Device Name: {props.deviceName}</p>
            <p>Description: {props.description}</p>
            <p>Date: {props.dateCheckedOut}</p>
            <p>Person Borrowing: {props.personBorrowing}</p>
            <p>Division: {props.division}</p>
        </div>
    )
}

export default LoanerRow