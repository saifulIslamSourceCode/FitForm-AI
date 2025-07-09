import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

//register new user
router.post("/register", async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    //checking the email in the database
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
        res.status(400).json({ error: "User already exists" });
        return;
    }

    // Creating new user in the database
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: { email, password: hashedPassword },
    });

    res.status(201).json({ message: "User registered successfully" });
});

//login user
router.post("/login", async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        res.status(401).json({ error: "Invalid credentials" });
        return;
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
        expiresIn: "1d",
    });

    res.json({ token });
});

export default router;