import React from 'react'

const LoanerRow = (props) => {
    const colorClass = props.isCheckedOut ? 'checkedOut' : 'notCheckedOut'

    return (
        <tbody className={colorClass}>
            <tr>
                <td>{props.deviceName}</td>
                <td>{props.deviceType}</td>
                <td>{props.isCheckedOut ? "True" : "False"}</td>
                <td>{props.personBorrowing}</td>
                <td>{props.dateCheckedOut}</td>
                <td>{props.division}</td>
                <td>{props.description}</td>
            </tr>
        </tbody>
    )
}

export default LoanerRow