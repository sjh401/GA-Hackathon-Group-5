import { Router } from "express";
import { deleteAppointment, getAppointment, getAppointments, postAppointment, putAppointment } from "../controllers/appointments.js";

// import some type of restricted access?

const router = Router();

router.get("/appointment", getAppointments);
router.get("/appointment/:id", getAppointment)
router.post("/appointment", postAppointment);
router.put("/appointment/:id", putAppointment);
router.delete("/appointment", deleteAppointment);

export default router