# fitForm AI (Smart AI Fitness Tracker)

A full-stack web application to help users track fitness goals, body measurements, calorie intake, and progress using AI-driven insights.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Tech Stack](#tech-stack)  
- [Folder Structure](#folder-structure)  
- [Setup and Installation](#setup-and-installation)  
  - [Prerequisites](#prerequisites)  
  - [Clone Repository](#clone-repository)  
  - [Backend Setup](#backend-setup)  
  - [Frontend Setup](#frontend-setup)  
  - [Database Setup](#database-setup)  
- [Running the Application](#running-the-application)  
- [Environment Variables](#environment-variables)  
- [Project Features](#project-features)  
- [API Endpoints](#api-endpoints)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)  

---

## Project Overview

Smart AI Fitness Tracker is a web application designed to help users manage their fitness journey. Users can register, log in, input body measurements (height, weight, location), set weight loss goals, track daily food intake with nutritional info fetched from external APIs, and monitor progress with charts. The backend uses AI models to calculate personalized calorie and macronutrient goals.

---

## Tech Stack

| Layer        | Technology                                 |
|--------------|--------------------------------------------|
| Frontend     | React, TypeScript, Vite                    |
| Backend      | Node.js, Express, TypeScript               |
| Database     | PostgreSQL                                 |
| ORM          | Prisma                                     |
| API Client   | Axios                                      |
| AI Integration | (To be integrated - e.g. OpenAI API)     |
| Deployment   | Vercel (frontend), Render/Railway (backend)|

---

## Folder Structure

fitForm AI/
├── client/ # React frontend
│ ├── src/
│ ├── package.json
│ └── vite.config.ts
│
├── server/ # Express backend
│ ├── src/
│ ├── package.json
│ └── prisma/
│ └── schema.prisma
│
├── .gitignore
├── README.md

---

## Setup and Installation
Setup_and_Installation:
  Prerequisites:
- Node.js v16 or higher (https://nodejs.org/)
    - npm (comes with Node.js)
    - PostgreSQL (local or remote) (https://www.postgresql.org/download/)
    - Git (https://git-scm.com/downloads)

  Clone_Repository:
    - Run: git clone https://github.com/yourusername/yourrepo.git
    - Navigate: cd yourrepo
    - Note: Replace 'yourusername' and 'yourrepo' accordingly

  Backend_Setup:
    - Navigate_to_server: cd server
    - Install_dependencies: npm install
    - Configure_env:
        File: server/.env
        Content: |
          DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public
          JWT_SECRET=your_jwt_secret_here
          PORT=3000
    - Run_migrations: npx prisma migrate dev --name init
    - Start_backend: npm run dev
    - Backend_URL: http://localhost:3000

  Frontend_Setup:
    - Navigate_to_client: cd client
    - Install_dependencies: npm install
    - Start_frontend: npm run dev
    - Frontend_URL: http://localhost:5173

  Database_Setup:
    - Ensure_postgresql_running: true
    - Create_database: fitness_tracker
    - Update_DATABASE_URL: 'Update DATABASE_URL in server/.env to connect database'
    - Prisma_manages_schema: true

  Access_Application:
    - Frontend: http://localhost:5173
    - Backend_API: http://localhost:3000