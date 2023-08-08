# MERN/GraphQL Google Books Search Engine

Welcome to the MERN/GraphQL Google Books Search Engine project! In this assignment, you'll be refactoring a fully functioning Google Books API search engine that was originally built using a RESTful API, into a GraphQL API using Apollo Server. This project showcases the importance of data and user-driven development in modern web applications.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [GraphQL API](#graphql-api)
- [Authentication](#authentication)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Most modern websites are powered by data and user demands. Personalizing user data and ensuring application performance are key aspects of web development. In this project, we take a Google Books API search engine and enhance it by refactoring it into a GraphQL API built with Apollo Server. The application originally used the MERN stack (MongoDB, Express.js, React, Node.js) with a RESTful API for data communication.

## Features

- Search for books using the Google Books API.
- Save book searches to the backend.
- Fetch and modify data using GraphQL queries and mutations.
- User authentication for secure access.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14 or higher)
- MongoDB (running instance or connection string)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone git@github.com:WenboNi/Book-Search-Engine.git

2. Navigate to the project directory:

    Copy code
    cd mern-graphql-google-books

3. Install server dependencies:

    bash
    Copy code
    cd server
    npm install

4. Install client dependencies:

    cd ../client
    npm install

## Usage
1. Start the server:

    npm run develop

## GraphQL API
The application now uses GraphQL for data communication. You can interact with the GraphQL API by navigating to http://localhost:3001/graphql in your web browser or using tools like Apollo Studio.

## Authentication
Authentication middleware has been modified to work with the GraphQL API. Users can securely access their data while ensuring data privacy.

## Deployment
The application can be deployed to Heroku using the Heroku CLI or GitHub Actions. Refer to Heroku's documentation for more details on deployment.

## Technologies Used
MERN Stack (MongoDB, Express.js, React, Node.js)
GraphQL and Apollo Server
User Authentication
Google Books API

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your proposed changes.

## License
This project is licensed under the MIT License.
