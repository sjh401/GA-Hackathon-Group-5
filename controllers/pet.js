import Pet from "../models/pet.js";
import User from "../models/user.js";
export const postPet = async (req, res) => {
  try {

    const pet = new Pet(req.body);

    pet.owner = req.user;
    const user = await User.findById(req.user);

    await pet.save();

    user.pets.push(pet._id);
    await user.save();
    res.status(201).json(pet);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const putPet = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const pet = await Pet.findByIdAndUpdate(id, body, { new: true });
    res.send(pet);
  } catch (e) {
    res.status(424).json({ error: e.message });
  }
};

export const deletePet = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(req.user);
    const pet = await Pet.findByIdAndDelete(id);
    user.pets = user.pets.filter((pet) => pet != id);
    user.save();
    res.send(pet);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

export const getPet = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await Pet.findById(id);
    if (pet) {
      res.json(pet);
    } else {
      res.status(404).json({ error: "pet not found." });
    }
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

export const getPets = async (req, res) => {
  try {
    const pets = await Pet.find()
    res.json(pets);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};
