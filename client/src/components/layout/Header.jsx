export default function Header(props) {
    const { handleLogout } = props;

    return (
        <header>
            <button onClick={handleLogout}>Logout</button>
        </header>
    )
}
