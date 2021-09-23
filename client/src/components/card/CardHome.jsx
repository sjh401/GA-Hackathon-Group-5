import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import "./Card.css"

export default function CardHome(props) {
    const { setService, appointments, currentUser, pets } = props;
    const [ userAppointments, setUserAppointments ] = useState([]);

    const zipcodes = require('zipcodes');
    const location = zipcodes.lookupByCoords(currentUser?.location.latitude, currentUser?.location.longitude);

    useEffect(() =>{
        setUserAppointments(pets?.filter(pet => pet.owner === currentUser?.userId))
    },[currentUser, pets]);


    return (
        <div className="div-cardhome">
            <div>
                Find services in: {location.zip}
            </div>
            <Link to='/users/location'>Change Location</Link>
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
                    {userAppointments ? userAppointments.map(appointment => {
                        return (
                            <div 
                                className="row-inner border-pink appointment"
                                key={appointment._id}
                            >
                                <div>
                                    {appointment.name}
                                </div>
                                <div>
                                    {appointment.date}
                                </div>
                                <div>
                                    {appointment.service}
                                </div>
                            </div>
                        )
                    }): <></>}
                </div>
            </div>
        </div>
    )
}
