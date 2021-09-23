import React from 'react'

export default function UserAccount(props) {
    return (
        <div className="div-user">
            <h3>username</h3>
            <div>Location</div>
            {/* map through pets */}
            <div>
                <h5>pets name</h5>
                <div>appointments for said pet</div>
            </div>
        </div>
    )
}
