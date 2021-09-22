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


router.post("/pets", restrict, postPet);
router.get("/pets/:id", restrict, getPet);
router.get("/pets", restrict, getPets);
router.put("/pets/:id", restrict, putPet);
router.delete("/pets/:id", restrict, deletePet);

export default router;
