import { useEffect, useState } from 'react';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router';


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

export default function EditPet(props) {
    const [ formData, setFormData ] = useState({
        name: '',
        sex: '',
        weight: '',
        color: ''
    });

    const { pet_id } = useParams();
    const { updatePet, pets } = props;

    const { name, sex, weight, color, animalType } = formData

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    useEffect(() => {
        const prefillFormData = () => {
            const onepet = pets?.find(pet => pet._id === pet_id);
            setFormData({ 
                name: onepet?.name,
                weight: onepet?.weight,
                sex: onepet?.sex,
                color: onepet?.color
            });
        }
        if(pets.length) {
            prefillFormData();
        }
    }, [pets, pet_id])

    return (
        <div>
            <form 
            className="pet-create"
            onSubmit={(e) => {
            e.preventDefault()
            updatePet(formData, pet_id)
            }}>
            <h2 className="pet-create">Edit your pet</h2>
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
                label="Name"
                name="name"
                variant="outlined" 
                value={animalType}
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
