

export const getAppointments = async (req, res) => {
    try {
        const appointments = await appointment
        appointment.find();
        res.json(appointments);
    } catch (e) {
        res.status(404).json({ error: e.message });
    };
};

export const getAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const appointment = await appointment.findById(id);
        if(appointment) {
            res.json(appointment)
        } else {
            res.status(404).json({ error: 'appointment not found.' })
        }
        res.json(appointments);
    } catch (e) {
        res.status(404).json({ error: e.message });
    };
};

export const postAppointment = async (req, res) => {
    try {
        const appointment = new appointment(req.body);
        await appointment.save();
        res.status(201).json(appointment);
    } catch (e) {
        res.status(500).json({ error: e.message });
    };
};

export const putAppointment = async (req,res) => {
    try {
        const { id, body } = req.params;
        const appointment = await appointment.findByIdAndUpdate(id, body, {new: true});
        res.send(appointment);
    } catch (e) {
        res.status(424).json({ error: e.message });
    };
};

export const deleteAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const appointment = await appointment.findByIdAndDelete(id);
        res.send(appointment)
    } catch (e) {
        res.status(404).json({ error: e.message });
    };
};