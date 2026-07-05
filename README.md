# Mickey the Debug Dog Profile

## Authors
- Roaya Saed
- Bayan Marisat

## Project Description

This project was developed as part of the **Internet Programming** course.

The application demonstrates communication between a Node.js server and a client-side web application using JSON data.

The server reads data from JSON files stored in the **private** directory and exposes them through REST API endpoints. The client retrieves this data using the Fetch API and dynamically renders the profile page without generating HTML on the server.

---

## Technologies Used

- Node.js
- Express.js
- HTML5
- CSS3
- JavaScript (ES6)
- JSON

---

## Project Structure

```
project/
│
├── private/
│   ├── animals.json
│   ├── animaltraits.json
│   └── reviews.json
│
├── public/
│   ├── profile.html
│   ├── profile.css
│   ├── profile.js
│   └── images
│
├── server.js
├── package.json
└── README.md
```

---

## Features

- Reads profile data from JSON files.
- Provides REST API endpoints using Express.
- Dynamically renders the profile page using JavaScript.
- Responsive design for desktop and mobile devices.
- Clean and modular code structure.
- Uses asynchronous programming with Fetch API and async/await.

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/animals` | Returns the debugging squad data |
| GET | `/api/animaltraits` | Returns Mickey's traits |
| GET | `/api/reviews` | Returns endorsements and reviews |

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Run the server:

```bash
node server.js
```

Open your browser:

```
http://localhost:3000/profile.html
```

---

## Project Requirements

This project satisfies the following assignment requirements:

- Server-side JSON generation using Node.js.
- Client-side rendering using JavaScript.
- No server-side HTML generation.
- Responsive layout implemented using CSS media queries.
- Dynamic loading of profile data from JSON files.

---

## Notes

The project follows modern JavaScript practices, including:

- async/await
- Fetch API
- Modular functions
- Clean code conventions
- Responsive CSS design
