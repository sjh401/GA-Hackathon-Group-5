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
router.get("/pet", restrict, getPet);
router.get("/pets", restrict, getPets);
router.put("/updatepet/:id", restrict, putPet);
router.delete("/deletePet/:id", restrict, deletePet);

export default router;
