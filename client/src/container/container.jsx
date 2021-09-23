import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from 'react-router-dom'

import Home from "../screens/home/Home"
import SignIn from "../screens/user/SignIn"
import SignUp from "../screens/user/SignUp"

import { getAppointment, getAppointments, postAppointment, putAppointment, deleteAppointment } from "../../../controllers/appointments";
import { getPets, getPet, postPet, putPet, deletePet } from "../../../controllers/pet"

export default function Container(props) {
    const [ pets, setPets ] = useState([])
    const [ pet, setPet ] = useState("")
    const [ appointments, setAppointments ] = useState([])
    const [ appointment, setAppointment ] = useState("")
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
    }, [])

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

        </Switch>
        </>
    )
}