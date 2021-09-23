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

export default function SignUpForm(props) {

    const { handleRegister, handleChange, username, password, email, location, formData } = props;

    return (
        <form 
            className="login-form"
            onSubmit={(e) => {
            e.preventDefault()
            handleRegister(formData)
            }}>
            <h2 className="login-register">Register</h2>
            <br/>
            <TextField 
                required 
                id="outlined-basic" 
                label="Username"
                name="username"
                variant="outlined" 
                value={username}
                onChange={handleChange}/>
            <br/>
            <TextField 
                required 
                id="outlined-basic" 
                type="email"
                label="Email" 
                name="email"
                variant="outlined"
                value={email}
                onChange={handleChange} />
            <br/>
            <TextField 
                required 
                id="outlined-basic" 
                type="password"
                label="Password" 
                name="password"
                variant="outlined"
                value={password}
                onChange={handleChange} />
            <br/>
            <TextField 
                required 
                id="outlined-basic" 
                type="location"
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
