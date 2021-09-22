import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@mui/material/Button';

import "./Home.css"

export default function Home(props) {
    const { currentUser, setToggle, toggle } = props;
    return (
        <div className="home-div">
            { !currentUser && toggle === false &&
                <div className="div-sign">
                    <div>App Name Goes Here</div>
                    <div>App description</div>
                    <Link to="/sign-in" className="link-noformat"><Button>Sign In</Button></Link>            
                    <Link to="/sign-up" className="link-noformat"><Button>Sign Up</Button></Link>
                    <Button onClick={(e) => setToggle(prevToggle => !prevToggle)}>Continue as Guest</Button>
                </div>
            }
        </div>
    )
}
