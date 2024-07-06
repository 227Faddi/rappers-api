# 🎤 Rappers API : [Visit Here](https://rappers-api-l2wq.onrender.com/)

A comprehensive API providing detailed information about various rappers.

## How It's Made:

**Tech used:** Node.js, Express

### Description:

The Rappers API is a Node.js application built with Express to serve information about different rappers. The data includes names, dates of birth, ages (calculated dynamically), and nationalities. This API can be used to retrieve a list of all rappers or details about a specific rapper.

### Features:

- **RESTful Endpoints:** Simple and clear API endpoints to fetch data about rappers.
- **Dynamic Data Calculation:** Automatically calculates the current age of each rapper.
- **JSON Response:** Data is served in JSON format for easy integration with other applications.

## Lessons Learned:

Building this API reinforced several key concepts and practices:

- **API Design:** Understanding how to structure and design RESTful API endpoints.
- **Dynamic Data Handling:** Using JavaScript to dynamically calculate and serve data (e.g., calculating ages from dates of birth).
- **Modularity:** Organizing code in a modular fashion for better maintainability and scalability.
- **Error Handling:** Implementing robust error handling to ensure the API responds appropriately to invalid requests.
- **Documentation:** The importance of clear and comprehensive documentation for users and developers interacting with the API.

## Usage

To use the Rappers API, you can send GET requests to the following endpoints:

- **Get All Rappers:**
```http
GET /api/rappers
