import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#1d7dc2',
        margin: '2px',
        '&:hover': {
            backgroundColor: '#f8f7ff',
            color: '#1d7dc2'
        },
    }
}));

export default function SignInForm(props) {

    const { handleRegister, handleChange, username, password, formData } = props;
    const classes = useStyles();

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
                <Button 
                    variant="contained" 
                    color="primary" 
                    className={classes.button}
                    type="submit"
                >
                    Submit
                </Button>
            </div>
        </form>
    )
}
