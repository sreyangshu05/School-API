# School Management API

This project is a **School Management API** built with **Node.js**, **Express.js**, and **MySQL**. It allows users to manage school-related data, including adding schools, retrieving a list of schools based on proximity.

---

## Features

- Add new schools with location data.
- Retrieve a sorted list of schools based on proximity to a user-specified location.
- Manage schools.
- RESTful API architecture for easy integration.

---

## Technologies Used

- **Backend Framework:** Node.js, Express.js
- **Database:** MySQL
- **Tools:** Postman (API testing), Nodemon (Development monitoring)

---

## Installation

### Prerequisites

1. [Node.js](https://nodejs.org/) installed (v14 or above).
2. MySQL server installed and running.
3. [Postman](https://www.postman.com/) for API testing.

### Steps to Install

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/School-API.git
   cd School-API

  2. Install dependencies:
     ```bash
     npm install
  
  3. Configure environment variables:
     ```bash
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=yourpassword
     DB_NAME=school_management
     PORT=3000

4. Start the development server:
   ```bash
   npx nodemon app.js

5. The API will be available at http://localhost:5000.

## API Endpoints
- /addSchool - POST - Add a new school.
- /listSchools - GET - List all schools sorted by proximity.

## Testing
- Use Postman to test the API. Import the provided Postman collection in the postman folder for pre-configured requests and examples. ( https://www.postman.com/shreyangshsarkar/school-api/overview ) 
