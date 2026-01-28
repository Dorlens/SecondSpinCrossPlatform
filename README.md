# SecondSpin Cross-Platform

A modern, full-stack cross-platform marketplace for buying and selling vintage and second-hand clothes. SecondSpin connects buyers and sellers in a sustainable e-commerce platform that promotes the reuse of items and reduces waste.

### For Buyers
-  **Browse Marketplace** - Explore a wide variety of second-hand items
-  **Advanced Search** - Filter products by category, price, condition, and more
-  **Shopping Cart** - Add items to cart for easy checkout
-  **Secure Checkout** - Safe payment processing
- **Product Reviews** - Read and write reviews from other buyers
-  **Messaging** - Contact sellers directly with questions

### For Sellers
- **List Items** - Upload photos and create product listings
- **Pricing Control** - Set your own prices for items
- **Sales Dashboard** - Track your sales and earnings
- **Order Management** - Manage incoming orders and shipping
- **Seller Rating** - Build your reputation with ratings and reviews

### General Features
-  **Cross-Platform** - Works seamlessly on web and mobile devices
-  **Responsive Design** - Optimized for all screen sizes
-  **User Authentication** - Secure login and account management
-  **Notifications** - Real-time updates on orders and messages

## Tech Stack

### Frontend
- **React** - Modern UI library for building interactive user interfaces
- **TypeScript** - Type-safe JavaScript for better code quality
- **React Native / Expo** - Cross-platform mobile support (iOS & Android)
- **Responsive CSS** - Mobile-first design approach

### Backend
- **Django 6.0.1** - Powerful Python web framework
- **Python 3.12** - Latest Python runtime
- **PostgreSQL** - Database support
- **Django REST Framework** - RESTful API development
- **ASGI/WSGI** - Async and sync server support
- **SQLParse 0.5.5** - SQL parsing utilities
- **asgiref 3.11.0** - ASGI compatibility layer

## 📂 Project Structure

```
SecondSpinCrossPlatfrom/
├── frontend/                        # React TypeScript Application
│   ├── components/                  # Reusable UI Components
│   │   ├── Home.tsx                # Landing page
│   │   ├── Shop.tsx                # Product browsing
│   │   ├── Sell.tsx                # Item listing
│   │   └── AboutUs.tsx             # Company information
│   ├── assets/                      # Static assets (images, icons)
│   ├── App.tsx                      # Main application component
│   ├── index.ts                     # Application entry point
│   ├── app.json                     # App metadata
│   ├── package.json                 # Dependencies
│   └── tsconfig.json                # TypeScript configuration
│
├── secondspin/                      # Django Backend
│   ├── backend/                     # Django app configuration
│   │   ├── settings.py              # Django settings
│   │   ├── urls.py                  # URL routing
│   │   ├── asgi.py                  # ASGI configuration
│   │   ├── wsgi.py                  # WSGI configuration
│   │   └── __init__.py
│   ├── manage.py                    # Django management commands
│   ├── requirements.txt             # Python dependencies
│   └── pyvenv.cfg                   # Virtual environment configuration
│
└── README.md                        # Project documentation
```

## Prerequisites

Before you begin, ensure you have the following installed:

### Frontend Requirements
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (v6 or higher) - Usually comes with Node.js
- **Git** - For version control

### Backend Requirements
- **Python 3.12** - [Download](https://www.python.org/)
- **pip** - Python package manager (usually comes with Python)
- **Git** - For version control
- **Virtual Environment** - For isolated Python dependencies

## Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/SecondSpinCrossPlatfrom.git
cd SecondSpinCrossPlatfrom
```

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

### Backend Setup

```bash
cd ../secondspin

# Create and activate virtual environment
python3.12 -m venv .
source bin/activate  # On Windows: venv\Scripts\activate

# Upgrade pip
pip install --upgrade pip

# Install dependencies
pip install -r requirements.txt
```

## Quick Start

### Start the Frontend

```bash
cd frontend
npm start
```

The frontend will open at `http://localhost:3000` (or your configured port).

### Start the Backend

```bash
cd secondspin

# Activate virtual environment if not already active
source bin/activate

# Create superuser for admin panel
python manage.py createsuperuser

# Run migrations
python manage.py migrate


## Database

The project uses Django's ORM with support for multiple databases:

- **Development/Production**: PostgreSQL (recommended,configured in settings.py)

### Running Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### Creating a Superuser

```bash
python manage.py createsuperuser
```

Access Django admin: `http://localhost:8000/admin`

##  Development

### Frontend Development

```bash
cd frontend

# Start development server with hot reload
npm start

# Build for production
npm run build

# Run tests (if configured)
npm test
```

### Backend Development

```bash
cd secondspin

# Run development server
python manage.py runserver 0.0.0.0:8000

# Create migrations for model changes
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Create a superuser for admin access
python manage.py createsuperuser

# Access Django shell
python manage.py shell
```

**SecondSpin** - Giving second-hand items a second spin! 
