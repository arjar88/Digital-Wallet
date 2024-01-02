# Digital Wallet Backend Application

## Overview

This is a microservices-based backend application for a digital wallet. The application is split into three services, each responsible for specific functionalities:

1. **Users Service**: Handles user-related operations.
2. **Payments Service**: Manages payments and transaction functionalities.
3. **Notifications Service**: Notifies users about transaction outcomes.

Each service has its own database, adhering to the microservices architecture standard.

## Folder Structure

  - Config: Contains the DB configuration file.
  - Models: Defines the database schema.
  - Controllers: Holds endpoint functions.
  - Routes: Sets up the service-specific routes.
  - app.js: Initializes the Notifications service server.

## Assumptions

  -I used the userName as the unique identifier
  -used the Mongoose library

## How to Run

To run all services as separate processes, follow these steps:

1. Navigate to the root of the project.
2. Run the following command in the terminal:

   ```bash
   node index.js
