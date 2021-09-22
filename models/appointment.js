import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema(
  {
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
    },
    appointment_holder: { type: Schema.Types.ObjectId, ref: "Pet" },
  },
  { timestamps: true }
);

export default mongoose.model("Appointment", AppointmentSchema);
