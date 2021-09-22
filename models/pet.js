import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PetSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    appointments: [{ type: Schema.Types.ObjectId, ref: "Appointment" }],
    owner: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("Pet", PetSchema);
