import { Router } from "express";
import restrict from "../helpers/restrict.js";
import {
  getPet,
  getPets,
  postPet,
  putPet,
  deletePet,
} from "../controllers/pet.js";
const router = Router();

router.post("/addpet", restrict, postPet);
router.post("/pet", restrict, getPet);
router.post("/pets", restrict, getPets);
router.post("/updatepet", restrict, putPet);
router.post("/deletePet", restrict, deletePet);

export default router;
