# Music API

## Tests

The tests are configured to run with Jest. To run the tests:

    npm test

## Build

To build the project you must run:

    npm run build

It will generate a directory called dist that contais an file called app.js. To run the project after the build process you must run:

    npm start

## Endpoints

Some routes need you need authentication do something. The authentication that is used is the basic authentication.
The patterns values are:

    LOGIN: login
    PASSWORD: password

But you can change it creating enviroment variables.

    $ export LOGIN=login
    $ export PASSWORD=password

In that documentation, everytime that a route is an authenticated route, it will have an AUTHENTICATED.

### Health - "/api/health/"

If you want to know if the application is running, there is an endpoint called health endpoint that show will the application status.

Ex:

    GET: http://localhost:3000/api/health/

Response:

* Status Code: 200


```   
{
    "status": "UP"
}
```