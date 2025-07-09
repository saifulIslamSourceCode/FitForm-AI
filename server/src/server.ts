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

import userRoutes from './routes/auth';

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
