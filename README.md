# CRUD Backend API

A backend CRUD REST API built with **Node.js**, **Express**, and **PostgreSQL**, following a clean **MVC architecture**.  
The project includes a **Dockerized PostgreSQL setup**, service-based data access, and centralized error handling.

---

## 🚀 Features

- RESTful CRUD APIs for users
- Node.js + Express backend
- PostgreSQL database
- Clean MVC + Service architecture
- Centralized error handling middleware
- Docker-based PostgreSQL setup
- Environment-based configuration using dotenv
- Consistent API response format

---

## 🧱 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** PostgreSQL  
- **Containerization:** Docker  
- **Environment Management:** dotenv  
- **API Testing:** Postman  

---

## 📁 Project Structure

CRUD_APP
├── src
│ ├── config
│ │ └── db.js
│ ├── controllers
│ │ └── userController.js
│ ├── data
│ │ └── createUserTable.js
│ ├── middlewares
│ │ └── errorHandler.js
│ ├── models
│ │ └── userModel.js
│ ├── routes
│ │ └── userRoutes.js
│ └── index.js
├── .env
├── package.json
└── package-lock.json

Docker Compose for full stack

Unit & integration tests

⭐ Final Note
This project is built to demonstrate backend fundamentals, clean architecture, and real-world best practices.
