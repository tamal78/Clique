import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "../routes/auth.route.js";
import productRoutes from "../routes/product.route.js";
import cartRoutes from "../routes/cart.route.js";
import couponRoutes from "../routes/coupon.route.js";
import paymentRoutes from "../routes/payment.route.js";
import analyticsRoutes from "../routes/analytics.route.js";

import { connectDB } from "../lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: process.env.CLIENT_URL, // Your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  credentials: true, // This allows cookies and other credentials to be sent
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

// Define routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

// Start the server
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
  connectDB();
});
