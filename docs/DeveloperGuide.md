# Exam Schedule System

A full-stack **Exam Scheduling System** developed as part of the **VICTVS Technical Test**.  
The system displays and manages exam schedules worldwide, allowing users to view, and filter the exam sessions.

---

## Project Overview

The application consists of:

- **Backend:** Laravel RESTful API  
  - Stores schedule data in a relational database (MySQL/SQLite)
  - Imports data from a provided JSON file
  - Provides endpoints for fetching, and filtering  schedules

- **Frontend:** React (Create React App)  
  - Fetches data from the Laravel API
  - Displays schedules in a user-friendly table
  - Allows filtering (by candidate, country, date, and status)
  - Enables updating of exam schedule status (Pending → Started → Finished)

---

## Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React, Axios, TailwindCSS |
| **Backend** | Laravel 11, PHP 8+, Composer |
| **Database** | MySQL (or SQLite for local) |
| **Dev Tools** | Node.js, npm, Postman, Git |
| **Hosting (optional)** | Vercel (Frontend), Render (Backend) |

---

## Features

- View a list of all exam schedules  
- Filter and sort by candidate, country, date, or status  
- Update exam status step by step (Pending → Started → Finished)  
- Search schedules dynamically  
- Database seeding using provided JSON data  
- Responsive and clean user interface (TailwindCSS)  
- RESTful API endpoints for all operations  

---

## Further Improvements

- **Backend:** Laravel RESTful API 
    - Adding Unit Test
    - Authentication for users to update status

- **Frontend:** React (Create React App)  
    - Update Status: Progress through stages (pending → started → finished)
    - Sorting exam schedules


## Map API  
 - REACT_APP_GOOGLE_MAPS_API_KEY=AIzaSyBwAnEOtEkETAAsYVAb7k9b7PWWiUFbsjc


## 📁 Repository Structure

exam-schedule-system/
├── backend/ # Laravel API
│ ├── app/
│ ├── database/
│ │ ├── migrations/ # Schema for schedules & candidates tables
│ │ └── seeders/ # ScheduleSeeder to import JSON data
│ ├── routes/
│ │ └── api.php # API endpoints
│ ├── .env.example
│ ├── composer.json
│ └── README.md
│
├── frontend/ # React frontend
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── api/ # Axios instance for API calls
│ │ ├── App.js # Main app file
│ │ └── index.js
│ ├── public/
│ ├── package.json
│ └── tailwind.config.js
│
├── docs/ # Developer documentation (guide, API)
│ ├── DeveloperGuide.md # This file
│ └── API.md
│
├── exam-schedule-data.json # Provided data file
├── README.md 
└── .gitignore



## Installation & Setup

### Prerequisites

Make sure you have the following installed:

- [PHP 8.1+](https://www.php.net/downloads.php)
- [Composer](https://getcomposer.org/download/)
- [Node.js & npm](https://nodejs.org/)
- [MySQL](https://dev.mysql.com/downloads/mysql/) or SQLite

---

### Backend Setup (Laravel)

  -- Navigate to backend
  cd backend

  --- Install dependencies
  composer install

  --- Copy .env file and update DB credentials
  cp .env.example .env

  --- Generate application key
  php artisan key:generate

  --- Run migrations
  php artisan migrate

  --- Seed the database with JSON data
  php artisan db:seed --class=ScheduleSeeder

  --- Start the Laravel server
  php artisan serve



### Frontend Setup (React)

--- Navigate to frontend
cd frontend

--- Install dependencies
npm install

--- Run the app
npm start
