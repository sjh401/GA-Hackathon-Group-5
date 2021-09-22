import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Link } from 'react-router-dom';

export default function Footer(props) {
    const { currentUser, toggle } = props;
    console.log(toggle)
    return (
        <footer style={{margin: (!currentUser && (toggle === false)) ? "0": "-10vh 0 0 0"}}>
            <Link to="/" className="link-noformat"><HomeIcon/></Link>
            <Link to="/" className="link-noformat"><AccountCircleIcon/></Link>
            <Link to="/" className="link-noformat"><CalendarTodayIcon/></Link>
        </footer>
    )
}
