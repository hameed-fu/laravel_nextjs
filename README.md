# Laravel API CRUD for User Management with Next.js Frontend

## Description
This project consists of a Laravel API backend for managing users and a Next.js frontend for interacting with the API. The API provides CRUD (Create, Read, Update, Delete) operations for user management.

## Features
- User authentication
- Create, Read, Update, and Delete users
- Pagination for listing users
- Error handling
- Frontend UI for user interaction

## Technologies Used
- Laravel (Backend)
- MySQL (Database)
- Next.js (Frontend)
- Tailwind CSS (Styling)

## Installation
### Backend (Laravel API)
1. Clone the repository: `git clone <repository-url>`
2. Navigate to the `backend` directory: `cd backend`
3. Install dependencies: `composer install`
4. Copy the `.env.example` file to `.env` and configure your database settings
5. Generate an application key: `php artisan key:generate`
6. Run database migrations: `php artisan migrate`
7. (Optional) Seed the database with sample data: `php artisan db:seed`
8. Start the Laravel development server: `php artisan serve`

### Frontend (Next.js)
1. Navigate to the `frontend` directory: `cd frontend`
2. Install dependencies: `npm install` or `yarn install`
3. Start the Next.js development server: `npm run dev` or `yarn dev`

## Usage
### Backend API Endpoints
- `GET /api/users`: Get a list of all users
- `POST /api/users`: Create a new user
- `GET /api/users/{id}`: Get details of a specific user
- `PUT /api/users/{id}`: Update details of a specific user
- `DELETE /api/users/{id}`: Delete a specific user

### Frontend Routes
- `/`: Home page displaying a list of users
- `/user/create`: Create a new user form
- `/user/edit/{id}`: Edit details of a specific user

## Contributors
- [Hameed](https://github.com/hameed-fu)

## License
This project is licensed under the [MIT License](LICENSE).
