import express, { Request, Response } from 'express';
import cors from 'cors'; //  Import CORS
import { PrismaClient } from '@prisma/client';
import authRoutes from "./routes/auth";

const prisma = new PrismaClient();

const app = express();

app.use(cors());          //  Enable CORS
app.use(express.json());
app.use("/api", authRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));