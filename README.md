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
  - [Access_Application](#access_application)
- [Running the Application](#running-the-application)   
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

fitForm_AI:
  client:
    - src/
    - package.json
    - vite.config.ts

  - server:
    - src/
    - package.json
    - prisma:
      - schema.prisma
    
  - README.md
---

## Setup and Installation
Setup_and_Installation:
  - # Prerequisites:
    - Node.js v16 or higher (https://nodejs.org/)
    - npm (comes with Node.js)
    - PostgreSQL (local or remote) (https://www.postgresql.org/download/)
    - Git (https://git-scm.com/downloads)

  - # Clone_Repository:
    - Run: git clone https://github.com/saifulIslamSourceCode/FitForm-AI.git
    - Navigate: cd FitForm-AI
    - Note: Replace 'yourusername' and 'yourrepo' accordingly

  - # Backend_Setup:
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

  - # Frontend_Setup:
    - Navigate_to_client: cd client
    - Install_dependencies: npm install
    - Start_frontend: npm run dev
    - Frontend_URL: http://localhost:5173

  - # Database_Setup:
    - Ensure_postgresql_running: true
    - Create_database: fitness_tracker
    - Update_DATABASE_URL: 'Update DATABASE_URL in server/.env to connect database'
    - Prisma_manages_schema: true

  - # Access_Application:
    - Frontend: http://localhost:5173
    - Backend_API: http://localhost:3000

---

## Running the Application
- Start_backend:
    - Description: "Navigate to the server folder and run the backend server"
    - Command: "npm run dev"
    - URL: "http://localhost:3000"
- Start_frontend:
    - Description: "Navigate to the client folder and run the frontend dev server"
    - Command: "npm run dev"
    - URL: "http://localhost:5173"
- Access_application:
    - Description: "Open your browser and visit the frontend URL"
    - URL: "http://localhost:5173"

---

## Project Features
  - "User registration and secure login with JWT authentication"
  - "User profile management including height, weight, and location"
  - "Set personalized weight loss goals with target durations"
  - "AI-powered daily calorie and macronutrient recommendations"
  - "Food search and calorie tracking via external nutrition API"
  - "Visual progress charts comparing goals vs actual intake"
  - "Secure logout and session handling"

---

## API Endpoints
  - Method: POST
    Endpoint: "/register"
    Description: "Register a new user"
  - Method: POST
    Endpoint: "/login"
    Description: "Authenticate user and get token"
  - Method: GET
    Endpoint: "/profile"
    Description: "Retrieve current user profile"
  - Method: POST
    Endpoint: "/profile"
    Description: "Update user profile"
  - Method: POST
    Endpoint: "/goal"
    Description: "Set or update weight loss goal"
  - Method: GET
    Endpoint: "/goal"
    Description: "Get current weight loss goal"
  - Method: POST
    Endpoint: "/food"
    Description: "Add food entry to daily log"
  - Method: GET
    Endpoint: "/food"
    Description: "Get daily food entries"

---

## License
"MIT License"

---

## Contact
Developer: "Saiful Islam"
-  GitHub: "https://github.com/saifulIslamSourceCode"
-  LinkedIn: "https://www.linkedin.com/in/saifulislamsourcecode"
-  Website: https://saiful-islam-dev.vercel.app/
-  Email: "saifulislam.developer@gmail.com"
