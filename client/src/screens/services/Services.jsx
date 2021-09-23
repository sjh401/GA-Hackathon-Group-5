import React from 'react'
import { Link } from 'react-router-dom'

import ClearIcon from '@mui/icons-material/Clear';

import CardServices from '../../components/card/CardServices'

import "./Services.css"
import Hamburger from '../../components/card/Hamburger';

export default function Services(props) {
    const { currentUser, toggle, service } = props;

    console.log(service)
    
    return (
        <div className="div-services">
            <div>location</div>
            <Link to='/users'>Change Location</Link>
            <div className="services-filter">
                <ClearIcon 
                    onClick={(e) => console.log('clicked')}
                />
                <Hamburger 

                />
            </div>
            <CardServices
                currentUser={currentUser}
                toggle={toggle}
            />
        </div>
    )
}
