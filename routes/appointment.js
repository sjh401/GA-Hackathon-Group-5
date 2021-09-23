import { Router } from "express";
import {
  deleteAppointment,
  getAppointment,
  getAppointments,
  postAppointment,
  putAppointment,
  findGroomer,
  findVet,
  findBoarding,
} from "../controllers/appointments.js";
import restrict from "../helpers/restrict.js";

// import some type of restricted access?

const router = Router();

router.get("/appointments/:petID", getAppointments);
router.get("/appointment/:id", getAppointment);
router.post("/appointment/:petID", postAppointment);
router.put("/appointment/:id", restrict, putAppointment);
router.delete("/appointment/:id/:petID", restrict, deleteAppointment);
router.get("/findgroomer", restrict, findGroomer);
router.get("/findvet", restrict, findVet);
router.get("/findboarding", restrict, findBoarding);

export default router;
