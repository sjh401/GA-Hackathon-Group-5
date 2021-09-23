import React from 'react'
import { Link } from 'react-router-dom'

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import "./Card.css"

const PrimaryButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#ff7777',
    fontFamily: 'Poppins, sans-serif',
    width: '60vw',
    maxWidth: 250,
    '&:hover': {
        backgroundColor: '#4fa8fc',
    },
}));
const SecondaryButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#4fa8fc',
    fontFamily: 'Poppins, sans-serif',
    width: '60vw',
    maxWidth: 250,
    '&:hover': {
        backgroundColor: '#ff7777',
    },
}));

export default function CardSign(props) {
    const { setToggle } = props;

    return (
        <div className="div-sign">
            <div>
                <h1>Pamper Pups</h1>
                <div>Hub for all of your pet’s needs.</div>
            </div>
            <Link to="/sign-in" className="link-sign"><PrimaryButton>Sign In</PrimaryButton></Link>            
            <Link to="/sign-up" className="link-sign"><SecondaryButton>Sign Up</SecondaryButton></Link>
            <Button onClick={(e) => setToggle(prevToggle => !prevToggle)}>Continue as Guest</Button>
        </div>
    )
}
