import { useEffect, useState } from 'react';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router';

import { updateUser } from '../../services/auth';


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

export default function UpdateUser(props) {
    const [location, setLocation] = useState("")
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocation(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }
    console.log(props)
    return (
        <div>
            <form 
            className="pet-create"
            onSubmit={(e) => {
            e.preventDefault()
            updateUser(location, 'user_id')
            }}>
            <h2 className="pet-create">Update Location</h2>
            <br/>
            <TextField 
                required 
                id="outlined-basic" 
                label="Location"
                name="location"
                variant="outlined" 
                value={location}
                onChange={handleChange}/>
            <br/>
            <div>
                <PrimaryButton 
                    type="submit"
                >
                    Submit
                </PrimaryButton>
            </div>
        </form>
        </div>
    )
}
