import { Router } from "express";
import appointmentRoutes from "./appointment.js";
import userRoutes from "./user.js";
import petRoutes from "./pet.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root"));

router.use("/", userRoutes);
router.use("/", appointmentRoutes);
router.use("/", petRoutes);

export default router;
