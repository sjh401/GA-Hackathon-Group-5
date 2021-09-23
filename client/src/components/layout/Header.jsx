export default function Header(props) {
    const { handleLogout, currentUser } = props;

    return (
        <header>
            { currentUser &&
            <button 
                onClick={handleLogout}
                className="logout"
            >Logout</button>
            }
        </header>
    )
}
