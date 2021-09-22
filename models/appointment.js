
import mongoose from "mongoose"
const Schema = mongoose.Schema

const AppointmentSchema = new Schema({
    name: {
    type: String,
    required: true,
    },
    pet_name: {
    type: String,
    required: true,
    },
    location: {
    type: String,
    require: true,
    }
},
{timestamps: true}
);

export default mongoose.model("Appointment", AppointmentSchema)    