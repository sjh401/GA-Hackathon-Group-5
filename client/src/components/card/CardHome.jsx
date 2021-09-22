import React from 'react'
import { Link } from 'react-router-dom'

export default function CardHome(props) {
    const { service, setService } = props;
    
    return (
        <div>
            <div>location</div>
            <Link to='/users'>Change Location</Link>
            <div>
                <h3>Services</h3>
                <div>
                    {/* map through services? */}
                    <Link to='/services' onClick={(e)=>setService("Boarding")}><div>Boarding</div></Link>
                    <Link to='/services' onClick={(e)=>setService("Grooming")}><div>Grooming</div></Link>
                    <Link to='/services' onClick={(e)=>setService("Veterinarian")}><div>Veterinarian</div></Link>
                </div>
            </div>
            <div>
                <h3>Upcoming Appointments</h3>
                <div>
                    {/* map through appointments */}
                    <div>Boarding</div>
                    <div>Grooming</div>
                    <div>Veterinarian</div>
                </div>
            </div>
        </div>
    )
}
