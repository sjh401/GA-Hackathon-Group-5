import React from 'react'
import Footer from './Footer'
import Header from './Header'
import './Layout.css'

export default function Layout(props) {
    const { handleLogout, currentUser, toggle } = props;
    return (
        <>
            <Header
                handleLogout={handleLogout}
            />
            <main className="main">
                {props.children}
            </main>
            <Footer
                currentUser={currentUser}
                toggle={toggle}
            />
        </>
    )
}
