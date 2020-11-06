import React from 'react'

const LoanerRow = (props) => {
    console.log('props: ',props)
    return (
        <div>
            <h3>{props.deviceName}</h3>
            <p><strong>Device Type:</strong> {props.deviceType}</p>
            <p><strong>checked out:</strong> {props.isCheckedOut ? "True" : "False"}</p>
            <p><strong>Description:</strong> {props.description}</p>
            <p><strong>Date:</strong> {props.dateCheckedOut}</p>
            <p><strong>Person Borrowing:</strong> {props.personBorrowing}</p>
            <p><strong>Division:</strong> {props.division}</p>
        </div>
    )
}

export default LoanerRow