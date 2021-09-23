import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const PrimaryButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#ff7777',
    '&:hover': {
        backgroundColor: '#4fa8fc',
    },
}));

export default function SignInForm(props) {

    const { handleRegister, handleChange, username, password, formData } = props;

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
                type="password"
                label="Password" 
                name="password"
                variant="outlined"
                value={password}
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
