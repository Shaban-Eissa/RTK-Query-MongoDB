
# ReactJS RTK Query With MongoDB

<img src="https://github.com/Shaban-Eissa/RTK-Query-MongoDB/assets/49924090/62ab465d-9f0c-4b98-ba83-37e4e2e26fa9" width="300" height="160" />

A Fullstack crud operations built with React.js, MongoDB, and Node.js, RTK Query.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)


## Features
- **RTQ Query Endpoints:** Using RTK Query allow to create endpoints for api requests, no need for dispatch or reducer again. with using generated custom hooks that is exported from the api allowing to check for loading and error, fetching and success while sending requests for database. 
- **Create New Item:** Allow users to create items that stored on mongoDB.
- **Delete Item:** Allow users to delete items that stored on MongoDB.
- **Edit Item:** Allow users to edit items that stored on MongoDB.


## Demo

<img src="https://github.com/Shaban-Eissa/RTK-Query-MongoDB/assets/49924090/a18f3b6f-97b0-462a-83fe-b1840cf1edbd" width="900" height="400" />

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Shaban-Eissa/RTK-Query-MongoDB
   ```

2. Navigate to backend folder and install dependencies:
    
    ```bash
    npm install
    ```

3. Run your backend:
   ```bash
   npm run start
   ```

4. Create .env file contain MongoDB url:
   ```bash
   MONGODB_URI = mongoDB_url
   ```
5. Navigate to frontend folder and install dependencies:
    
    ```bash
    npm install
    ```
    
## Usage

1. Start the development server:
    
    ```bash
    npm run dev
    ```
    
2. Open your browser and visit [http://localhost:3000](http://localhost:3000).
    

## Technologies

This project utilizes a fullstack to work with RTK Query:

- React
- RTK Query
- MonogoDB
- Node.js

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature/bugfix: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

