import React from 'react'
import { Link } from 'react-router-dom'

import ClearIcon from '@mui/icons-material/Clear';

import CardServices from '../../components/card/CardServices'

import "./Services.css"
import Hamburger from '../../components/card/Hamburger';
import Groomers from '../nearby/Groomers';
import Vets from '../nearby/Vets';
import Boarding from '../nearby/Boarding';

export default function Services(props) {
    const { currentUser, toggle, service, boarding, vet, grooming  } = props;
    console.log("PROPS", props)

    console.log(service)

    // useEffect(() => {
    //     const getSome = async () => {
    //         const places = await getPlaces();
    //         setWorks(places)
    //     }
    //     getSome()
    // }, [])
    // pull from api or state and use service prop to filter type of business
    let showComponent = ""
    if (service === "Grooming") {
        showComponent =  <Groomers groomers = {grooming}/>
    }
    if (service === "Veterinarian") {
        showComponent =  <Vets vets = {vet}/>
    }
    if (service === "Boarding") {
        showComponent =  <Boarding boarding = {boarding}/>
    }
    
    return (
        <div className="div-services">
            <div>location</div>
            <Link to='/users'>Change Location</Link>
            <div className="services-filter">
                <ClearIcon 
                    onClick={(e) => console.log('clicked')}
                />
                <Hamburger 

                />
            </div>
            <CardServices
                currentUser={currentUser}
                toggle={toggle}
            />
            {showComponent}
        </div>
    )
}
