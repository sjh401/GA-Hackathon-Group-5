import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import './Schedule.css'
import ScheduleGroomers from '../../components/schedule/ScheduleGroomers';
import ScheduleVets from '../../components/schedule/ScheduleVets';
import ScheduleBoarding from '../../components/schedule/ScheduleBoarding';

const PrimaryButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#ff7777',
    fontFamily: 'Poppins, sans-serif',
    width: '60vw',
    maxWidth: 194,
    '&:hover': {
        backgroundColor: '#4fa8fc',
    },
}));

const useStyles = makeStyles((theme) => ({
    text: {
        width: '60vw',
        maxWidth: 194,
        textDecoration: 'none',
        margin: 5,
    },
}));

export default function Schedule(props) {
    const { service, currentUser, pets, addAppointment } = props;
    const zipcodes = require('zipcodes');
    const userLocation = zipcodes.lookupByCoords(currentUser?.location.latitude, currentUser?.location.longitude);

    const [ toggle, setToggle ] = useState(false);
    const [ userPets, setUserPets ] = useState();
    const [ formData, setFormData ] = useState({
        name: '',
        date: '',
        location: userLocation.zip,
        appointment_holder: '',
        service: ''
    });

    console.log(formData)
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    
    useEffect(() =>{
        setUserPets(pets?.filter(pet => pet.owner === currentUser?.userId))
    },[currentUser, pets]);

    const { name, date, appointment_holder } = formData

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    let showComponent = ""
    if (service === "Grooming") {
        showComponent =  <ScheduleGroomers />
    }
    if (service === "Veterinarian") {
        showComponent =  <ScheduleVets />
    }
    if (service === "Boarding") {
        showComponent =  <ScheduleBoarding />
    }
    const time = new Date().getTime()
    console.log(time)
    return (
        <>
            <div 
                className="div-schedule"
                style={{display: (toggle === false) ? "flex": "none"}}
            >
                <div>
                    {showComponent}
                </div>
                <form 
            className="pet-create"
            onSubmit={(e) => {
            e.preventDefault()
            addAppointment(formData)
            }}>
            <h2 className="pet-create">Add a pet</h2>
            <br/>
            <TextField 
                required 
                id="outlined-basic" 
                label="Name"
                name="name"
                variant="outlined" 
                value={name}
                onChange={handleChange}/>
            <br/>
                <TextField 
                required 
                id="outlined-basic" 
                type="datetime-local"
                label="Date" 
                name="date"
                variant="outlined"
                value={date}
                onChange={handleChange} />
            <br/>
            <Select
                className={classes.text}
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                name="appointment_holder"
                value={appointment_holder}
                onChange={handleChange}
            >
                <MenuItem id="All" ><em>Cuisine</em></MenuItem>
                {userPets ? userPets.map(pet => {
                    return (<MenuItem value={`${pet._id}`} key={pet._id}><em>{pet.name}</em></MenuItem>)
                }): ""}
            </Select>
            <br/>
            <TextField 
                required 
                id="outlined-basic" 
                label="Service"
                name="service"
                variant="outlined" 
                value={formData.service}
                onChange={handleChange}/>
            <br/>
            <div>
                <PrimaryButton 
                    type="submit"
                    onClick={(e)=> setToggle(prevToggle => !prevToggle)}
                >
                    Book Appointment
                </PrimaryButton>
            </div>
        </form>
            </div>
            <div 
                className={(toggle === false) ? "none": "div-schedule-hidden"}
            >
                <div>
                    <img src="https://i.imgur.com/pFuc46U.png" className="confirmed-image"/>
                    <h3>Your appointment is confirmed!!</h3>  
                    <div>
                        The appointment has been added to your calendar.
                    </div>
                </div>
                <Link to='/' className="link-noformated">
                    <PrimaryButton 
                        type="submit"
                        onClick={(e)=> setToggle(prevToggle => !prevToggle)}
                    >
                        Return Home
                    </PrimaryButton>
                </Link>
            </div>
        </>
    )
}
