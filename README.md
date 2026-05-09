Team Task Manager 🚀

A full-stack Team Task Manager web application where users can create projects, assign tasks, and track progress with role-based access control.

🌐 Live Demo
Frontend

Live Frontend Demo

Backend

Live Backend API

📌 Features
User Authentication (Login / Signup)
Role-Based Access Control (Admin / Member)
Project Management
Task Creation & Assignment
Task Status Tracking
Dashboard with Task Summary
REST API Integration
MongoDB Database
Responsive UI
🛠️ Tech Stack
Frontend
React.js
Axios
React Router DOM
CSS
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
📂 Project Structure
TaskManger/
│
├── Backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── pages/
│   ├── api/
│   └── App.jsx
🚀 Installation & Setup
Clone Repository
git clone https://github.com/satyam23425/TaskManger.git
Backend Setup
cd Backend

npm install

npm run dev
Frontend Setup
cd frontend

npm install

npm run dev
🔑 Environment Variables

Create .env file inside Backend folder.

MONGO_URI=your_mongodb_url

JWT_SECRET=mysecretkey
📡 API Routes
Authentication
Method	Route	Description
POST	/api/auth/signup	Register User
POST	/api/auth/login	Login User
Tasks
Method	Route	Description
GET	/api/tasks	Get All Tasks
POST	/api/tasks	Create Task
PUT	/api/tasks/:id	Update Task
Projects
Method	Route	Description
GET	/api/projects	Get Projects
POST	/api/projects	Create Project
📊 Dashboard Features
Total Tasks
Completed Tasks
Pending Tasks
In Progress Tasks
🔐 Authentication

JWT-based authentication is used for secure login and protected routes.

🚀 Deployment
Frontend deployed on Vercel
Backend deployed on Vercel
👨‍💻 Author
Satyam Pandit

GitHub:
satyam23425 GitHub
