# Clique 🛍️

![Clique](https://i.ibb.co/F6cBpTx/Screenshot-2024-11-26-140002.png)
**Clique** is a modern fashion e-commerce platform built with the **MERN stack**, featuring secure user authentication, a responsive cart and checkout system, Stripe payments, and an admin dashboard for managing products and sales.

---

## 🌟 Features

- 🔒 **Secure Authentication**

  - Implements JWT-based authentication with refresh and access tokens.
  - Protects user sessions with enhanced security.

- 🛒 **Responsive Cart & Checkout**

  - Add, update, and remove items seamlessly.
  - Supports coupon codes for discounts.

- 💳 **Stripe Payment Integration**

  - Provides smooth payment handling via Stripe.
  - Supports multiple payment methods.

- 📈 **Admin Dashboard**

  - Manage products, inventory, and sales data efficiently.
  - Access insightful sales analytics for informed decision-making.

- 📱 **Fully Responsive Design**
  - Optimized for all devices, ensuring a seamless shopping experience.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Gateway**: Stripe
- **Authentication**: JWT (Refresh and Access Tokens)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tamal78/clique.git

   ```

2. Navigate to the project directory:

   ```bash
   cd clique
   ```

3. Install dependencies:

   ```bash
   npm install
   cd frontend && npm install
   cd ../backend && npm install

   ```

4. Set up environment variables:  
    Create a `.env` file in the root directory and configure the required variables, e.g.:

   ```env
   PORT=...
   MONGODB_URI=...
   JWT_SECRET=....
   STRIPE_SECRET_KEY=...
   NODE_ENV=...
   ```

5. Start the development server:

   ```bash
   cd backend && npm run dev
   ```

6. Open the app in your browser:

   ```bash
   cd frontend && npm run dev
   ```

---

## 📸 Admin Dashboard

![Beatify Admin Dashboard](https://i.ibb.co/wy4FwV1/Screenshot-2024-11-26-140052.png)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for suggestions and improvements.

---

### 🌐 Live Demo

Check out the live demo [here](https://clique-tu8ux.ondigitalocean.app/)
