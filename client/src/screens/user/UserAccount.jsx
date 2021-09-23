import React from 'react'
import { Link } from 'react-router-dom'

export default function UserAccount(props) {
    return (
        <div className="div-user">
            <h3>username</h3>
            <div>Location</div>
            <Link to="/pets">
                Add a pet
            </Link>

            {/* map through pets */}
            <div>
                <h5>pets name</h5>
                <div>appointments for said pet</div>
            </div>
        </div>
    )
}
