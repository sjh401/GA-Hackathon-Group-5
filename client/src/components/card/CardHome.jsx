import React from 'react'
import { Link } from 'react-router-dom'

import "./Card.css"

export default function CardHome(props) {
    const { setService } = props;

    return (
        <div className="div-cardhome">
            <div>Location</div>
            <Link to='/users'>Change Location</Link>
            <div>
                <h3 className="h3-cardhome">Services</h3>
                <div className="div-row">
                    <Link to='/services'  className="row-inner" onClick={(e)=>setService("Boarding")}>Boarding</Link>
                    <Link to='/services'  className="row-inner" onClick={(e)=>setService("Grooming")}>Grooming</Link>
                    <Link to='/services'  className="row-inner" onClick={(e)=>setService("Veterinarian")}>Veterinarian</Link>
                </div>
            </div>
            <div>
                <h3 className="h3-cardhome">Upcoming Appointments</h3>
                <div className="div-row">
                    {/* map through user appointments */}
                    <div className="row-inner">1</div>
                    <div className="row-inner">2</div>
                    <div className="row-inner">3</div>
                    <div className="row-inner">4</div>
                </div>
            </div>
        </div>
    )
}
