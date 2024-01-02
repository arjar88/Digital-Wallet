This is my digital wallet backend application. It is built with the microservices architecture and is split into three services:
  1)Users-responsible for handling the users
  2) Payments-handles the payments and transaction functionalities.
  3)Notifications-notifies users once a transaction has either succeded or failed.
each service has its db as per the microservice architecture standard.

The service folder structure is built like this:
  Config-contains the DB config file to initialize the connection to DB
  Models- contains db schema for particular service
  Controllers-contains the endpoint functions
  Routes-sets up the routes
  app.js file - to initialize the services server




To Run all services (separate processes), cd to root of the project and run node index.js
