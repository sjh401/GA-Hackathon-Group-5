import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import TuneIcon from '@mui/icons-material/Tune';
import ClearIcon from '@mui/icons-material/Clear';
// import FilterListIcon from '@mui/icons-material/FilterList';

import CardServices from '../../components/card/CardServices'

import "./Services.css"
import FilterServices from '../../components/card/FilterServices';
export default function Services(props) {
    const { currentUser, toggle, service } = props;
    const [ popup, setPopup ] = useState(false)
    
    return (
        <div className="div-services">
            <div>location</div>
            <Link to='/users'>Change Location</Link>
            <div>
                <ClearIcon />
                <TuneIcon onClick={(e)=> setPopup(prevPopup => !prevPopup)}/>
                <div style={{visibility: (popup === false) ? "hidden": "visible"}}>
                    <FilterServices 
                        setPopup={setPopup}
                    />
                </div>
            </div>
            <CardServices
                currentUser={currentUser}
                toggle={toggle}
            />
        </div>
    )
}
