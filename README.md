# API Integration Demo

A small Express service that integrates with the public JSONPlaceholder API using Axios.

## Concepts demonstrated
- REST endpoints and HTTP GET requests
- Calling an external API through Axios
- Request timeouts and upstream error handling
- Input validation and status codes
- Environment-based configuration
- Automated test using Node's built-in test runner

## Setup
Requirements: Node.js 18+ and npm.

```bash
npm install
copy .env.example .env
npm start
```

Open `http://localhost:3000/api/health`, `http://localhost:3000/api/posts`, or `http://localhost:3000/api/posts/1`.

Run tests with `npm test`.

## Student Details
- Name: Purwa Nivgare
- Roll No.: 4
- Class: SY CMPN C

This is an educational example. External API access requires an internet connection.
