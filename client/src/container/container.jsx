import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from 'react-router-dom'

import CreatePet from "../screens/pet/CreatePet"
import EditPet from "../screens/pet/EditPet"
// import Businesses from "../screens/nearby/Businesses";

import { getAppointment, getAppointments, postAppointment, getAllAppointments, putAppointment, deleteAppointment, getAllBoarding, getAllGroomers, getAllVets } from "../services/appointment";

import Schedule from "../screens/schedule/Schedule"
import Home from '../screens/home/Home';
import Services from '../screens/services/Services';
import UserAccount from '../screens/user/UserAccount';
import Appointments from '../screens/appointments/Appointments';
import { getPets, getPet, postPet, putPet, deletePet } from "../services/pet"


export default function Container(props) {
    const [pets, setPets] = useState([])
    const [pet, setPet] = useState("")
    const [appointments, setAppointments] = useState([])
    const [appointment, setAppointment] = useState("")
    const [grooming, setGrooming] = useState([])
    const [vet, setVets] = useState([])
    const [boarding, setBoarding] = useState([])
    const { currentUser, toggle, setToggle, service, setService } = props
    const history = useHistory()

    useEffect(() => {
        const fetchPets = async () => { 
            const fetchedPets = await getPets();
            console.log(fetchedPets)
            setPets(fetchedPets)
        }
        fetchPets();
    }, [])

    useEffect(() => {
        const fetchGrooming = async () => {
            const fetchedGrooming = await getAllGroomers();
            setGrooming(fetchedGrooming)
        }
        fetchGrooming();
    },[] )

    useEffect(() => {
        const fetchVet = async () => {
            const fetchedVet = await getAllVets();
            setVets(fetchedVet)
        }
        fetchVet();
    },[])

    useEffect(() => {
        const fetchBoarding = async () => {
            const fetchedBoarding = await getAllBoarding();
            setBoarding(fetchedBoarding)
        }
        fetchBoarding();
    },[])

    useEffect(() => {
        const fetchAppointments = async () => {
            const fetchedAppointments = await getAllAppointments()
            setAppointments(fetchedAppointments)
        }
        fetchAppointments();
    }, [])

    const addPet = async (newItem) => {
        const newPet = await postPet(newItem);
        setPets(prevPets => ([
            ...prevPets,
            newPet
        ]))
        history.push('/account')
    }

    const addAppointment = async (newItem) => {
        const newAppointment = await postAppointment(newItem)
        setAppointments(prevAppointments => ([
            ...prevAppointments,
            newAppointment
        ]))
    }

    const updatePet = async (updatedItem, pet_id) => {
        const updatedPet = await putPet(pet_id, updatedItem)
        setPets(prevPetData => prevPetData.map(pet => {
            return pet._id === pet_id ? updatedPet : pet
        }))
        history.push('/account')
    }

    const updateAppointment = async (updatedItem, appointment_id) => {
        const updatedAppointment = await putAppointment(updatedItem, appointment_id)
        setAppointments(prevAppointmentData => prevAppointmentData.map(appointment => {
            return appointment._id === appointment_id ? updatedAppointment : appointment
        }))
    }

    const removePet = async (pet_id) => {
        await deletePet(pet_id)
        setPets(prevPetData => prevPetData.filter(pet => pet._id !== pet_id))
    }
    const removeAppointment = async (appointment_id) => {
        await deleteAppointment(appointment_id)
        setAppointments(prevAppointmentData => prevAppointmentData.filter(appointment => appointment._id !== appointment_id))
    }

    return (
        <>
            <Switch>
                <Route path="/pet/edit/:pet_id">
                    <EditPet
                    updatePet={updatePet}
                    pets={pets}
                    />
                </Route>
                <Route path="/appointments"> 
                    <Appointments
                        currentUser={currentUser}
                        appointments={appointments}
                    />
                </Route>
                <Route path="/schedule">
                    <Schedule 
                        currentUser={currentUser}
                        service={service}
                    />
                </Route>
                <Route path="/services">
                    <Services 
                        currentUser={currentUser}
                        toggle={toggle}
                        service={service}
                    />
                </Route>
                <Route path="/account">
                    <UserAccount 
                    currentUser={currentUser}
                    toggle={toggle}
                    pets={pets}
                    />
                </Route>
                <Route path="/pets">
                    <CreatePet 
                        addPet={addPet}
                    />
                </Route>
                <Route path="/">
                    <Home 
                        currentUser={currentUser}
                        setToggle={setToggle}
                        toggle={toggle}
                        setService={setService}
                        service={service}
                    />
                </Route>
            </Switch>
        </>
    )


}