import mongoose from "mongoose"
const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  started: {
    type: Date,
    default: Date.now(),
  },
  pets: [],
},
{timestamps: true});

export default mongoose.model("User", UserSchema)
