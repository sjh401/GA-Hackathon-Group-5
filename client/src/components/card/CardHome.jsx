import React from 'react'
import { Link } from 'react-router-dom'

import "./Card.css"

export default function CardHome(props) {
    const { setService } = props;

    return (
        <div className="div-cardhome">
            <div>
                Location
                {/* {users.location} */}
            </div>
            <Link to='/users'>Change Location</Link>
            <div>
                <h3 className="h3-cardhome">Services</h3>
                <div className="div-row">
                    <Link to='/services'  className="row-inner hover-pink" onClick={(e)=>setService("Boarding")}>Boarding</Link>
                    <Link to='/services'  className="row-inner hover-pink" onClick={(e)=>setService("Grooming")}>Grooming</Link>
                    <Link to='/services'  className="row-inner hover-pink" onClick={(e)=>setService("Veterinarian")}>Veterinarian</Link>
                </div>
            </div>
            <div>
                <h3 className="h3-cardhome">Upcoming Appointments</h3>
                <div className="div-row">
                    {/* map through user appointments */}
                    <div className="row-inner border-pink">1</div>
                    <div className="row-inner border-pink">2</div>
                    <div className="row-inner border-pink">3</div>
                    <div className="row-inner border-pink">4</div>
                </div>
            </div>
        </div>
    )
}
