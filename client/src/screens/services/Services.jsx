import React from 'react'
import { Link } from 'react-router-dom'

import TuneIcon from '@mui/icons-material/Tune';
import ClearIcon from '@mui/icons-material/Clear';
// import FilterListIcon from '@mui/icons-material/FilterList';

import CardServices from '../../components/card/CardServices'

import "./Services.css"
export default function Services(props) {
    const { currentUser, toggle } = props;
    return (
        <div className="div-services">
            <div>location</div>
            <Link to='/users'>Change Location</Link>
            <div>
                <ClearIcon />
                <TuneIcon />
            </div>
            <CardServices
                currentUser={currentUser}
                toggle={toggle}
            />
        </div>
    )
}
