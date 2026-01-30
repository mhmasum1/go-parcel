import React from 'react'
import { Link } from 'react-router'

const PaymentCancel = () => {
    return (
        <div>
            <h2>Payment Cancelled </h2>
            <Link to="/dashboard/my-parcels">
                <button className='btn btn-secondary'>Try again</button></Link>
        </div>
    )
}

export default PaymentCancel