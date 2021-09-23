import React, { useState } from 'react'
import SignUpForm from '../../components/sign/SignUpForm';

export default function SignUp(props) {
    const [ formData, setFormData ] = useState({
        username: '',
        email: '',
        password: '',
        location: ''
    })

    const { username, password, email, location } = formData
    const { handleRegister} = props;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    return (
        <div>
            <SignUpForm 
                handleRegister={handleRegister}
                handleChange={handleChange}
                username={username}
                password={password}
                email={email}
                location={location}
                formData={formData}
            />
        </div>
    )
}
