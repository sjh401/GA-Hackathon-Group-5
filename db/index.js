import mongoose from "mongoose"

const MONGODB_URI = process.env.PROD_MONGODB || "https://pamper-pups.herokuapp.com/api/users"

// toggle off if not debugging
mongoose.set("debug", false)

// mongoose.set("useCreateIndex", true)

mongoose.set("returnOriginal", true)

mongoose
  .connect(MONGODB_URI,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    .catch(e => {
        console.error('Connection error:', e.message)
    })


const db = mongoose.connection

db.on("error", (e) => console.error(`MongoDB connection error: ${e.message}`));
db.on("connected", () => console.log("MongoDB connected!"));
db.on("disconnected", () => console.log("MongoDB disconnected."));

export default db