import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import './Schedule.css'

const PrimaryButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#ff7777',
    '&:hover': {
        backgroundColor: '#4fa8fc',
    },
}));

export default function Schedule(props) {
    const [ toggle, setToggle ] = useState(false);
    

    return (
        <>
            <div 
                className="div-schedule"
                style={{display: (toggle === false) ? "flex": "none"}}
            >
                <div>
                    <h3>Grooming Services Available</h3>
                    <div className="services-inputs">
                        <div>Nail Trim</div>
                        <div>Teeth Cleaning</div>
                        <div>Spa Bath</div>
                        <div>Brush Out</div>
                        <div>Ear Cleaning</div>
                        <div>Dematting</div>
                        <div>Flea/Tick Bath</div>
                    </div>
                </div>
                <div>
                    <div className="services-inputs">
                        <h3>Date</h3>  
                        <select>Select Month
                            <option>
                                months
                            </option>
                        </select>
                    </div>
                    <div className="services-inputs">
                        <div>9</div>
                        <div>10</div>
                        <div>11</div>
                        <div>12</div>
                        <div>13</div>
                        <div>14</div>
                        <div>15</div>
                        <div>16</div>
                    </div>
                </div>
                <div>
                    <h3>Time</h3>  
                    <div className="services-inputs">
                        <div>9</div>
                        <div>10</div>
                        <div>11</div>
                        <div>12</div>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </div>
                </div>
                <PrimaryButton 
                    type="submit"
                    onClick={(e)=> setToggle(prevToggle => !prevToggle)}
                >
                    Book Appointment
                </PrimaryButton>
            </div>
            <div 
                className={(toggle === false) ? "none": "div-schedule-hidden"}
            >
                <div>
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
