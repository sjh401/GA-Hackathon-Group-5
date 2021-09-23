import React from 'react'

import "./Home.css"
import CardSign from '../../components/card/CardSign';
import CardHome from '../../components/card/CardHome';

export default function Home(props) {
    const { currentUser, setToggle, toggle, service, setService, appointments } = props;

    return (
        <div className="div-home">
            { !currentUser && toggle === false &&
                <CardSign 
                    setToggle={setToggle}
                />
            }
            { (currentUser || toggle === true) &&
                <CardHome 
                    setService={setService}
                    service={service}
                    appointments={appointments}
                    currentUser={currentUser}
                />
            }
        </div>
    )
}
