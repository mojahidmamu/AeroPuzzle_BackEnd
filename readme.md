# 🚀 AeroPuzzle Backend

This repository contains the backend API for AeroPuzzle.

Built using Node.js, Express.js, and MongoDB, it provides REST APIs for authentication, leaderboard management, game scores, and future multiplayer support.

---

## 🚀 Features

- RESTful API
- MongoDB Database
- User Authentication
- Leaderboard APIs
- Score Management
- CORS Support
- Environment Variables
- Error Handling
- Modular Architecture

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|----------|
| Node.js | Runtime |
| Express.js | Web Framework |
| MongoDB | Database |
| Mongoose | ODM |
| dotenv | Environment Variables |
| Cors | Cross-Origin Requests |
| Nodemon | Development |

---


## ⚙️ Installation

Clone repository

```bash
git clone <repository-url>
```

Move into backend

```bash
cd backend
```

Install packages

```bash
npm install
```

---


## ▶️ Start Development Server

```bash
npm run dev
```

or

```bash
node server.js
```

---

## 📡 API Endpoints

### Authentication

```
POST /api/auth/register
```

Register user

---

```
POST /api/auth/login
```

Login

---

### Leaderboard

```
GET /api/scores/leaderboard
```

Fetch leaderboard

---

```
POST /api/scores
```

Submit score

---

### Health Check

```
GET /
```

Returns server status.

---

## 📊 Database

MongoDB stores

- Users
- Scores
- Game History

---

## 🔒 Security

- Environment Variables
- CORS
- Input Validation
- MongoDB Sanitization
- Password Hashing (Future)
- JWT Authentication (Future)

---

## 📜 Available Scripts

```bash
npm run dev
```

Development

```bash
npm start
```

Production

---

## 🚀 Deployment

Recommended platforms

- Render
- Railway 


Database
MongoDB Atlas

---

## 🤝 Contributing

1. Fork repository

2. Create feature branch

```bash
git checkout -b feature-name
```

3. Commit

```bash
git commit -m "Added feature"
```

4. Push

```bash
git push origin feature-name
```

5. Create Pull Request

---

## 👨‍💻 Author

**Abdullah Al Mojahid**

Computer Science & Technology Student

MERN Stack Developer

GitHub

https://github.com/mojahidmamu

LinkedIn

https://www.linkedin.com/in/abdullah-all-mojahid-a8a57b329/

---
 