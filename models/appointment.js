import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      require: true,
    },
    location: {
      type: Array,
      require: true,
    },
    service: {
      type: String
    },
    appointment_holder: { type: Schema.Types.ObjectId, ref: "Pet" },
  },
  { timestamps: true }
);

export default mongoose.model("Appointment", AppointmentSchema);
