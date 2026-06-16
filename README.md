#  Car_Rental_Platform

A modern full-stack Car Rental Platform built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The application allows users to browse available vehicles, check availability, book cars online, and enables vehicle owners to manage listings, bookings, and revenue through a dedicated dashboard.

---

## 🌐 Live Demo

**Frontend:** https://your-frontend-link.vercel.app

**Backend API:** https://your-backend-link.onrender.com

---

## 📸 Screenshots

### Home Page

(Add Screenshot Here)

### Cars Listing Page

(Add Screenshot Here)

### Car Details & Booking

(Add Screenshot Here)

### Owner Dashboard

(Add Screenshot Here)

### My Bookings

(Add Screenshot Here)

---

# ✨ Features

## 👤 User Features

### Authentication & Authorization

* JWT-based Authentication
* Secure Login & Registration
* Protected Routes
* Persistent User Sessions

### Car Browsing

* View all available cars
* Search cars by location
* Filter available vehicles
* View detailed car information

### Booking System

* Select pickup and return dates
* Real-time availability checking
* Instant booking creation
* View booking history
* Track booking status

### User Profile

* Update profile image
* View account information
* Manage bookings

---

## 🚘 Owner Features

### Owner Registration

* Upgrade user account to Owner
* Owner-specific dashboard access

### Car Management

* Add new cars
* Upload car images using ImageKit
* Manage vehicle details
* Set daily rental pricing
* Control vehicle availability

### Booking Management

* View all bookings
* Confirm bookings
* Cancel bookings
* Track booking status

### Analytics Dashboard

* Total Cars
* Total Bookings
* Pending Bookings
* Confirmed Bookings
* Monthly Revenue
* Recent Booking Activity

---

## 📊 Dashboard Analytics

Owners can monitor:

* Total Cars Listed
* Total Bookings
* Pending Reservations
* Confirmed Reservations
* Recent Bookings
* Monthly Revenue Statistics

---

# 🛠️ Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS
* React Hot Toast
* Context API

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer
* ImageKit

## Database

* MongoDB Atlas

## Media Storage

* ImageKit CDN

---

# 📁 Project Structure

Car_Rental_Platform

├── Client

│ ├── src

│ ├── components

│ ├── pages

│ ├── context

│ ├── assets

│ └── App.jsx

│

├── Server

│ ├── controllers

│ ├── models

│ ├── routes

│ ├── middleware

│ ├── configs

│ └── server.js

│

└── README.md

---

# 🔐 Security Features

* Password Hashing using bcrypt
* JWT Authentication
* Protected API Routes
* Owner Authorization Middleware
* Secure Environment Variables

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/sathwik123677/Car_Rental_platfrom.git

cd Car_Rental_platfrom
```

## Backend Setup

```bash
cd Server

npm install
```

Create a `.env` file:

```env
MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

IMAGEKIT_PUBLIC_KEY=your_public_key

IMAGEKIT_PRIVATE_KEY=your_private_key

IMAGEKIT_URL_ENDPOINT=your_url_endpoint

PORT=5000
```

Run backend:

```bash
npm run server
```

---

## Frontend Setup

```bash
cd Client

npm install
```

Create a `.env` file:

```env
VITE_BASE_URL=http://localhost:5000

VITE_CURRENCY=$
```

Run frontend:

```bash
npm run dev
```

---

# 📌 API Endpoints

## User

```http
POST /api/user/register
POST /api/user/login
GET  /api/user/data
GET  /api/user/cars
```

## Owner

```http
POST /api/owner/change-role
POST /api/owner/add-car
GET  /api/owner/dashboard
GET  /api/owner/cars
```

## Bookings

```http
POST /api/bookings/check-availability
POST /api/bookings/create
GET  /api/bookings/user
GET  /api/bookings/owner
POST /api/bookings/change-status
```

---

# 🎯 Future Enhancements

* Online Payment Integration (Stripe/Razorpay)
* Google Maps Location Search
* Car Reviews & Ratings
* Email Notifications
* Advanced Search Filters
* Admin Panel
* Wishlist Functionality
* Booking Cancellation Policy

---

# 👨‍💻 Developer

**Sathwik**

GitHub:
https://github.com/sathwik123677

---

# ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.
