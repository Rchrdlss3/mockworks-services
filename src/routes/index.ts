import { Router } from "express";

import { editUser, getUserByName, getUsers } from "../controllers/user.controller";
export const router = Router();

router.get("/get-user", getUserByName);
router.put('/edit-user',editUser)
router.get("/user", getUsers);