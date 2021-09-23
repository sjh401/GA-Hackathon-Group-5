import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from 'react-router-dom'

import CreatePet from "../screens/pet/CreatePet"
import EditPet from "../screens/pet/EditPet"
import Schedule from "../screens/schedule"
import Businesses from "../screens/nearby/Businesses";
import Service from "../screens/services/Services"

import { getAppointment, getAppointments, postAppointment, putAppointment, deleteAppointment, findBoarding, findGroomer, findVet } from "../../../controllers/appointments";
import { getPets, getPet, postPet, putPet, deletePet } from "../../../controllers/pet"

export default function Container(props) {
    const [pets, setPets] = useState([])
    const [pet, setPet] = useState("")
    const [appointments, setAppointments] = useState([])
    const [appointment, setAppointment] = useState("")
    const [grooming, setGrooming] = useState([])
    const [vet, setVets] = useState([])
    const [boarding, setBoarding] = useState([])
    const { currentUser } = props
    const history = useHistory()

    useEffect(() => {
        const fetchPets = async () => { 
            const fetchedPets = await getPets();
            setPets(fetchedPets)
        }
        fetchPets();
    }, [])

    useEffect(() => {
        const fetchGrooming = async () => {
            const fetchedGrooming = await findGroomer();
            setGrooming(fetchedGrooming)
        }
        fetchGrooming();
    },[])

    useEffect(() => {
        const fetchVet = async () => {
            const fetchedVet = await findVet();
            setVets(fetchedVet)
        }
        fetchVet();
    },[])

    useEffect(() => {
        const fetchBoarding = async () => {
            const fetchedBoarding = await findBoarding();
            setBoarding(fetchedBoarding)
        }
        fetchBoarding();
    },[])

    useEffect(() => {
        const fetchAppointments = async () => {
            const fetchedAppointments = await getAppointments()
            setAppointments(fetchedAppointments)
        }
        fetchAppointments();
    }, [])

    useEffect(() => {
        const fetchAppointment = async () => {
            const fetchedAppointment = await getAppointment()
            setAppointment(fetchedAppointment)
        }
        fetchAppointment();
    }, [])

    useEffect(() => {
        const fetchPet = async () => {
            const fetchedPet = await getPet();
            setPet(fetchedPet)
        }
        fetchPet()
    }
    )
    const addPet = async (newItem) => {
        const newPet = await postPet(newItem)
        setAllPets(prevPets => {[
            ...prevPets,
            newItem
        ]})
    }

    const addAppointment = async (newItem) => {
        const newAppointment = await postAppointment(newItem)
        setAllAppointments(prevAppointments => {[
            ...prevAppointments,
            newItem
        ]})
    }

    const updatePet = async (updatedItem, pet_id) => {
        const updatedPet = await putPet(updatedItem, pet_id)
        setAllPets(prevPetData => prevPetData.map(pet => {
            return pet.id === Number(pet_id) ? updatedPet : pet
        }))
    }

    const updateAppointment = async (updatedItem, appointment_id) => {
        const updatedAppointment = await putAppointment(updatedItem, appointment_id)
        setAllAppointments(prevAppointmentData => prevAppointmentData.map(appointment => {
            return appointment.id === Number(appointment_id) ? updatedAppointment : appointment
        }))
    }

    const removePet = async (pet_id) => {
        await deletePet(pet_id)
        setAllPets(prevPetData => prevPetData.filter(pet => pet.id !== Number(pet_id)))
    }
    const removeAppointment = async (appointment_id) => {
        await deleteAppointment(appointment_id)
        setAllAppointments(prevAppointmentData => prevAppointmentData.filter(appointment => appointment.id !== Number(appointment_id)))
    }


    return (
        <>
            <Switch>
                <Route path="/appointments">
                    <Schedule 
                    appointments={appointments}
                    />
                </Route>
                <Route path="/pet/add">
                    <CreatePet
                    addPet={addPet} 
                    />
                </Route>
                <Route path="/pet/edit/:pet_id">
                    <EditPet
                    updatePet={updatePet}
                    />
                </Route>

            </Switch>
        </>
    )


}