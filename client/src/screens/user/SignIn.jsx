import React, { useState } from 'react'
import SignInForm from '../../components/sign/SignInForm';

export default function SignIn(props) {
    const [ formData, setFormData ] = useState({
        username: '',
        password: ''
    })

    const { username, password } = formData
    const { handleLogin } = props;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    return (
        <div>
            <SignInForm
                handleRegister={handleLogin}
                handleChange={handleChange}
                username={username}
                password={password}
                formData={formData}
            />
        </div>
    )
}
