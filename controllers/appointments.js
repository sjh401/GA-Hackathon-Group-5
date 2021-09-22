import Appointment from "../models/appointment.js";
import Pet from "../models/pet.js";

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
    let pet = await Pet.findById(req.params.petID);
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
    console.log(pet);
    pet.appointments = pet.appointments.filter(
      (appointment) => appointment != id
    );
    const appointment = await Appointment.findByIdAndDelete(id);
    pet.save();
    res.send(appointment);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};
