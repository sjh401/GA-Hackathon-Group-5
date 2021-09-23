import React from 'react'
import { Link } from 'react-router-dom'

export default function CardServices(props) {
    // const { currentUser, toggle } = props;

    return (
        <div className="div-column">
            <Link to="/schedule">
            <div className="hover">mapping</div>
            </Link>
            <div className="hover">through</div>
            <div className="hover">providers</div>
        </div>
    )
}
