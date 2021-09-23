import { useState } from 'react';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const PrimaryButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#ff7777',
    fontFamily: 'Poppins, sans-serif',
    '&:hover': {
        backgroundColor: '#4fa8fc',
    },
}));

export default function CreatePet(props) {
    const [ formData, setFormData ] = useState({
        name: '',
        sex: '',
        weight: '',
        color: ''
    });

    const { addPet } = props;

    const { name, sex, weight, color } = formData

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    return (
        <div>
            <form 
            className="pet-create"
            onSubmit={(e) => {
            e.preventDefault()
            addPet(formData)
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
                type="text"
                label="Sex" 
                name="sex"
                variant="outlined"
                value={sex}
                onChange={handleChange} />
            <br/>
            <TextField 
                required 
                id="outlined-basic" 
                type="text"
                label="Color" 
                name="color"
                variant="outlined"
                value={color}
                onChange={handleChange} />
            <br/>
            <TextField 
                required 
                id="outlined-basic" 
                type="text"
                label="Weight" 
                name="weight"
                variant="outlined"
                value={weight}
                onChange={handleChange} />
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
