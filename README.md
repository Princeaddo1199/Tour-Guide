#Packages to install to test the app on your end
--npm packages to install
1. react native async storage
2. react navigation
3. react native onboarding swiper
4. expo vector icons


# 🧭 Tour Guide App - Backend

This is the backend of the Tour Guide application. It provides APIs for user authentication and tour data. Built with **Node.js**, **Express**, and **MongoDB**.

---

## 📁 Project Structure

```
backend/
├── config/
│   └── db.js           # MongoDB connection
├── controllers/
│   └── authController.js
├── middleware/
│   └── errorHandler.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── server.js           # App entry point
├── .env                # Environment variables
└── package.json
```

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Princeaddo1199/Tour-Guide.git
cd Tour-Guide/backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Create a `.env` file in the `backend` directory with the following:

```env
PORT=5000
MONGO_URI=mongodb://mongo:NThNtFEUKzbGcQBKXrifqjxPubPDCCan@yamanote.proxy.rlwy.net:22979/tourguide?authSource=admin# Secret key used to sign JWT tokens for user authentication
JWT_SECRET = supersecretjwtkey123
JWT_EXPIRES_IN=1d
```

Replace `your_mongodb_connection_string` with the Railway MongoDB URL, and `your_jwt_secret` with any random secure string (e.g., `mysecretkey123`).

---

### 4. Run the server

```bash
npm run dev
```

Or:

```bash
node server.js
```

---

## 🔌 API Endpoints

| Method | Route               | Description              |
|--------|---------------------|--------------------------|
| POST   | `/api/auth/register` | Register a new user      |
| POST   | `/api/auth/login`    | Login user and return token |
| POST   | `/api/auth/forgot-password` | Reset password (WIP)  |

---

## 🔗 Connecting to the Frontend

- Ensure the backend is running on `http://localhost:5000`
- In the frontend React Native app, update API URLs to match the backend base URL.
- Example:  
  ```js
  const BASE_URL = "http://localhost:5000/api/auth";
  ```

If testing on mobile device or emulator, replace `localhost` with your **computer’s local IP address**.

---

## 🧑‍💻 Contributors

- TygerHub: Auth & Middleware Lead
- Stephen: Tours & API Integrations

---

## ✅ To Do

- [x] User Authentication
- [ ] Password Reset
- [ ] Tour APIs
- [ ] Admin Features
