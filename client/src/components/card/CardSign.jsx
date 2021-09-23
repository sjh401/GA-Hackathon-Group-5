import React from 'react'
import { Link } from 'react-router-dom'

// import { makeStyles } from '@mui/styles';
// import Button from '@mui/material/Button';

import "./Card.css"

// const useStyles = makeStyles((theme) => ({
//     primary: {
//         backgroundColor: '#ff7777',
//         margin: '2px',
//         '&:hover': {
//             backgroundColor: '#ff7777',
//             color: '#1d7dc2'
//         },
//     },
//     secondary: {
//         backgroundColor: '#f8f7ff',
//         margin: '2px',
//         '&:hover': {
//             backgroundColor: '#f8f7ff',
//             color: '#1d7dc2'
//         },
//     root: {
//         color: '#fff'
//     }
//     }
// }));

export default function CardSign(props) {
    const { setToggle } = props;

    // const classes = useStyles();

    return (
        <div className="div-sign">
            <div>
                <h1>Pamper Pups</h1>
                <div>Hub for all of your pet’s needs.</div>
            </div>
            <Link to="/sign-in" className="link-sign primary"><button className='primary'>Sign In</button></Link>            
            <Link to="/sign-up" className="link-sign secondary"><button>Sign Up</button></Link>
            <button onClick={(e) => setToggle(prevToggle => !prevToggle)}>Continue as Guest</button>
        </div>
    )
}
