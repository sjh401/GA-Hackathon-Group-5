import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import ClearIcon from '@mui/icons-material/Clear';

import CardServices from '../../components/card/CardServices'

import "./Services.css"
import Hamburger from '../../components/card/Hamburger';

export default function Services(props) {
    const { currentUser, toggle, service } = props;
    const [ popup, setPopup ] = useState(false)
    const [ works, setWorks ] = useState([])

    console.log(service)

    // useEffect(() => {
    //     const getSome = async () => {
    //         const places = await getPlaces();
    //         setWorks(places)
    //     }
    //     getSome()
    // }, [])
    // // pull from api or state and use service prop to filter type of business
    
    
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
