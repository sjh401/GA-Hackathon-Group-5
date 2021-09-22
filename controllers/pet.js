export const postPet = async (req, res) => {
  try {
    const pet = new pet(req.body);
    await pet.save();
    res.status(201).json(pet);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const putPet = async (req, res) => {
  try {
    const { id, body } = req.params;
    const pet = await pet.findByIdAndUpdate(id, body, { new: true });
    res.send(pet);
  } catch (e) {
    res.status(424).json({ error: e.message });
  }
};

export const deletePet = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await pet.findByIdAndDelete(id);
    res.send(pet);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

export const getPet = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await pet.findById(id);
    if (pet) {
      res.json(pet);
    } else {
      res.status(404).json({ error: "pet not found." });
    }
    res.json(pets);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

export const getPets = async (req, res) => {
  try {
    const pets = await pet;
    pet.find();
    res.json(pets);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};
