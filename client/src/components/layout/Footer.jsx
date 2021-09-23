import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Link } from 'react-router-dom';

export default function Footer(props) {
    const { currentUser, toggle } = props;
    
    return (
        <footer style={{margin: (!currentUser && (toggle === false)) ? "0": "-10vh 0 0 0"}}>
            <Link to="/" className="link-noformat"><HomeIcon/>Home</Link>
            <Link to="/account" className="link-noformat"><AccountCircleIcon/>Account</Link>
            <Link to="/appointments" className="link-noformat"><CalendarTodayIcon/>Appointments</Link>
        </footer>
    )
}
