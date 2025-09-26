// Import express
import express from "express";

// Import auth controller
import { register, login } from "../controllers/authControllers.js";

// Import VerifyToken
import verifyToken from "../middlewares/authMiddleware.js";

// Create a new router
const router = express.Router();

// Register a new user
router.post("/register", register);

// Login user
router.post("/login", login);

// Logout user
// router.delete("/logoutAccount", verifyToken, logoutAccount); // Removido: Função 'logoutAccount' não exportada

// Protected Route
// router.get("/home", verifyToken, home); // Removido: Rota 'home' não exportada

export default router;
