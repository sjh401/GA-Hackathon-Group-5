import React from 'react'

import "./Home.css"
import CardSign from '../../components/card/CardSign';
import CardHome from '../../components/card/CardHome';

export default function Home(props) {
    const { currentUser, setToggle, toggle } = props;
    console.log(toggle)
    return (
        <div className="home-div">
            { !currentUser && toggle === false &&
                <CardSign 
                    setToggle={setToggle}
                />
            }
            { (currentUser || toggle === true) &&
                <CardHome />
            }
        </div>
    )
}
