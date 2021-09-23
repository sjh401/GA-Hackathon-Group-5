import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import "./User.css"

export default function UserAccount(props) {
    const [ userPets, setUserPets ] = useState();


    const zipcodes = require('zipcodes');


    const { pets, currentUser } = props;
    useEffect(() =>{
        setUserPets(pets?.filter(pet => pet.owner === currentUser?.userId))
    },[currentUser, pets]);
    const location = zipcodes.lookupByCoords(currentUser.location.latitude, currentUser.location.longitude);

    return (
        <div className="div-user">
            <h3>{currentUser.username}</h3>
            <div>{location.zip}</div>
            <Link to="/pets">
                Add a pet
            </Link>

            {userPets && userPets.map(pet => (
                <Link to={`/pet/edit/${pet._id}`} className="pets-map" key={pet._id}>
                <div className="pets-map">
                    <h5>{pet.name}</h5>
                </div>
                </Link>
            ))}
        </div>
    )
}
