import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';


const PrimaryButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#ff7777',
    fontFamily: 'Poppins, sans-serif',
    width: '60vw',
    maxWidth: 194,
    marginTop: 10,
    '&:hover': {
        backgroundColor: '#4fa8fc',
    },
}));

const PrimaryTextField = styled(TextField)(({ theme }) => ({
    margin: 10,
}))

export default function SignUpForm(props) {
    const [ passwordConfirmation, setPasswordConfirmation ] = useState("")

    const handlePassVerification = (e) => {
        const { value } = e.target;
        setPasswordConfirmation(value)
    }
    const { handleRegister, handleChange, username, password, email, location, formData } = props;
    const regex = /^[0-9]*$/;
    return (
        <form 
            className="login-form"
            onSubmit={(e) => {
            e.preventDefault()
            handleRegister(formData)
            }}>
            <h2 className="login-register">Register</h2>
            <br/>
            <PrimaryTextField 
                required 
                error={(username && username.length < 9 )? true : false}
                id="outlined-basic"
                label="Username"
                name="username"
                variant="outlined"
                value={username}
                onChange={handleChange}/>
            <br/>
            <PrimaryTextField 
                required 
                error={(
                    email.length < 1 || (
                    email.includes("@") &&
                    email.includes(".")
                    ))? false : true}
                id="outlined-basic" 
                type="email"
                label="Email" 
                name="email"
                variant="outlined"
                value={email}
                onChange={handleChange} />
            <br/>
            <PrimaryTextField 
                required 
                error={(
                    (passwordConfirmation.length > 0 &&
                    password.length > 0) &&
                    (password.length < 6 ||
                    password !== passwordConfirmation)
                    )? true : false}
                id="outlined-basic" 
                type="password"
                label="Password" 
                name="password"
                variant="outlined"
                value={password}
                onChange={handleChange} />
            <br/>
            <PrimaryTextField 
                required 
                error={(
                    passwordConfirmation.length > 0 &&
                    password.length > 0 &&
                    password !== passwordConfirmation
                    )? true : false}
                id="outlined-basic" 
                type="password"
                label="Password Confirmation" 
                name="passwordConfirmation"
                variant="outlined"
                value={passwordConfirmation}
                onChange={handlePassVerification}/>
            <br/>
            <PrimaryTextField 
                required 
                error ={(
                    location &&
                    (location.length !== 5 ||
                    location.search(regex) < 0)
                    )? true: false}
                id="outlined-basic" 
                type="text"
                label="Location" 
                name="location"
                variant="outlined"
                value={location}
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
    )
}
