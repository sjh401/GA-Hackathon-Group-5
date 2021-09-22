import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PetSchema = new Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    appointments: [],
  },
  { timestamps: true }
);

export default mongoose.model("Pet", PetSchema);
