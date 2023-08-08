import dotenv from "dotenv";
dotenv.config();
import Appointment from "../models/appointment.js";
import Pet from "../models/pet.js";
import User from "../models/user.js";
import axios from "axios";

export const getAppointments = async (req, res) => {
  try {
    let appointments = await Pet.findById(req.params.petID).populate(
      "appointments"
    );
    appointments = appointments.appointments;
    res.json(appointments);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

export const getAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findById(id);
    if (appointment) {
      res.json(appointment);
    } else {
      res.status(404).json({ error: "appointment not found." });
    }
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

export const postAppointment = async (req, res) => {
  try {
    let pet = await Pet.findById(req.body.appointment_holder);
    const appointment = new Appointment(req.body);
    pet.appointments.push(appointment._id);
    await appointment.save();
    await pet.save();
    res.status(201).json(appointment);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const putAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const appointment = await Appointment.findByIdAndUpdate(id, body, {
      new: true,
    });
    res.send(appointment);
  } catch (e) {
    res.status(424).json({ error: e.message });
  }
};

export const deleteAppointment = async (req, res) => {
  try {
    const { id, petID } = req.params;
    let pet = await Pet.findById(petID);
    pet.appointments = pet.appointments?.filter(
      (appointment) => appointment != id
    );
    const appointment = await Appointment.findByIdAndDelete(id);
    pet.save();
    res.send(appointment);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

export const findGroomer = async (req, res) => {
  try {
    const user = await User.findById(req.user);
    let config = {
      headers: {
        Authorization: `BEARER ${process.env.api_key}`,
      },
    };
    let url = `http://api.yelp.com/v3/businesses/search?term=pet_groomer&latitude=${user.location.latitude}4&longitude=${user.location.longitude}&api`;
    let results = await axios.get(url, config);
    res.send(results.data);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};
export const findVet = async (req, res) => {
  try {
    const user = await User.findById(req.user);
    let config = {
      headers: {
        Authorization: `BEARER ${process.env.api_key}`,
      },
    };
    let url = `http://api.yelp.com/v3/businesses/search?term=vet&latitude=${user.location.latitude}4&longitude=${user.location.longitude}&api`;
    let results = await axios.get(url, config);
    res.send(results.data);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};
export const findBoarding = async (req, res) => {
  try {
    const user = await User.findById(req.user);
    let config = {
      headers: {
        Authorization: `BEARER ${process.env.api_key}`,
      },
    };
    let url = `http://api.yelp.com/v3/businesses/search?term=pet_boarding&latitude=${user.location.latitude}4&longitude=${user.location.longitude}&api`;

    let results = await axios.get(url, config);
    res.send(results.data);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

export const getAllAppointments = async (req, res) => {
  try {
    let appointments = await Appointment.find();
    res.json(appointments);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};
