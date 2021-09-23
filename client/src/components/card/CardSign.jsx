import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

import "./Card.css"

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#f8f7ff',
        margin: '2px',
        '&:hover': {
            backgroundColor: '#f8f7ff',
            color: '#1d7dc2'
        },
    }
}));

export default function CardSign(props) {
    const { setToggle } = props;

    const classes = useStyles();

    return (
        <div className="div-sign">
            <div>
                <h1>Pamper Pups</h1>
                <div>Hub for all of your pet’s needs.</div>
            </div>
            <Link to="/sign-in" className="link-noformat"><Button className={classes.button}>Sign In</Button></Link>            
            <Link to="/sign-up" className="link-noformat"><Button className={classes.button}>Sign Up</Button></Link>
            <Button onClick={(e) => setToggle(prevToggle => !prevToggle)}>Continue as Guest</Button>
        </div>
    )
}
