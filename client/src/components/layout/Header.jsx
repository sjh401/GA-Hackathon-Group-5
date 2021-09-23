import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export default function Header(props) {
    const { handleLogout, currentUser } = props;
    const PrimaryButton = styled(Button)(({ theme }) => ({
        color: '#fff',
        backgroundColor: '#ff7777',
        margin: 10,
        fontFamily: 'Poppins, sans-serif',
        '&:hover': {
            backgroundColor: '#4fa8fc',
        },
    }));
    return (
        <header>
            { currentUser &&
            <PrimaryButton 
                onClick={handleLogout}
                className="logout"
            >Logout</PrimaryButton>
            }
        </header>
    )
}
