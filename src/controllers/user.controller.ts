import type { Request, Response } from "express";
import mongoose from "mongoose";
import User from "../schemas/user.schema";

function escapeRegex(value: string): string {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export async function getUsers(req: Request, res: Response) {
    try {
        if (!req.query.id) {
            const users = await mongoose.connection?.db?.collection("users").find().toArray();
            res.status(200).json(users);
        } else {
            const user = await mongoose.connection?.db?.collection("users").findOne({ id: req.query.id });
            res.status(200).json(user);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getUserByName (req: Request, res: Response) {
    const query = req.query.name;
    console.log(query)
    try {
        const users = await mongoose.connection.db?.collection("users").find({
           $or: [ 
            {"personalInformation.firstName" : {$regex: query, $options: "i"}},
            {"personalInformation.lastName" : {$regex: query, $options: "i"}}
           ]}
        ).toArray();
        res.status(200).json(users)
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function editUser (req: Request, res: Response) {
    const {_id,...updateData} = req.body;
    try {
        const user = await User.findOneAndUpdate({_id: _id}, {$set: updateData}, {returnDocument: 'after'})
        return res.status(200).json(user)
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Internal server error" });
    }
}