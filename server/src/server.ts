import express, { Request, Response } from 'express';
import cors from 'cors'; // ✅ 1. Import CORS
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();
const PORT = 3000;

app.use(cors());          // ✅ 2. Enable CORS
app.use(express.json());  // (Optional but good practice)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

// Add this route to fetch all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Your existing server start code


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


// server.ts
app.post('/api/users', async (req, res) => {
  try {
    const { email, password, height, weight, location } = req.body;
    const user = await prisma.user.create({
      data: { email, password, height, weight, location },
    });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: 'Could not create user' });
  }
});
