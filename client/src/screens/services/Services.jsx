import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import TuneIcon from '@mui/icons-material/Tune';
import ClearIcon from '@mui/icons-material/Clear';

import CardServices from '../../components/card/CardServices'

import "./Services.css"
import FilterServices from '../../components/card/FilterServices';
import Hamburger from '../../components/card/Hamburger';
export default function Services(props) {
    const { currentUser, toggle, service } = props;
    const [ popup, setPopup ] = useState(false)

    console.log(service)
    // pull from api or state and use service prop to filter type of business
    
    
    return (
        <div className="div-services">
            <div>location</div>
            <Link to='/users'>Change Location</Link>
            <div className="services-filter">
                <ClearIcon 
                    // onClick={}
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
