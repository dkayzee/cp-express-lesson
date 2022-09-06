# ExpressJS

## What is Express?

- Express is a web application framework for Node that is lightweight and unopinionated that provides a set of features leveraging middleware to help you create robust web and mobile applications.

## What does this mean?

- Serve up static sites (built React pages)
- Set up own authentication
- Set up own middleware with basic JavaScript
- Flexibility to use however we want (strict or loose)

Rather than bloat the framework with more features, Express’ functionality is meant to be extended by middleware.

Middlewares are a chain of request handlers functions. They perform on the request and response objects before passing it along.

## Express Functions

Everything is “chained” or passed along through a series of functions.
Each function has the following 3 parameters:

- Request
- Response
- Next

## Middlewares

Express comes with some middleware baked in, such as express.static to serve static files.

## Endpoints

You can leverage middlewares to build out routes and API endpoints using standard HTTP verbs

## Demo

- Create a new folder and navigate to the newly created folder
- Npm init and install express
- Use the node command to run!

## Resources

- [Express Homepage](https://expressjs.com)
- [Express Middleware](https://expressjs.com/en/resources/middleware.html)
