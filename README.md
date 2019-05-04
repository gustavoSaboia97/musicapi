# Music API

This is an CRUD that is responsible for getting data about some Artist, Music or Album, search information on Apple iTunes API and inserting that in a MongoDB.

## Technologies

* Node.js
* MongoDB

## Necessary Configuration

`MONGO_DB_URI=mongodb://localhost:27017/music`
`APPLE_URI=https://itunes.apple.com/search`

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

### Insert New Author - "/api/author/" - AUTHENTICATED

To insert a new author.

Ex:

    POST: http://localhost:3000/api/author/

    BODY:
            {
                "name": "Author Name"
            }


Response:

* Status Code: 200

``` 
{
    "_id": "5cc6681235d878b785f23b30",
    "name": "Author Name",
    "albums": []
}
```

### Get Authors - "/api/author/" - AUTHENTICATED

To get all authors that are in the database, and all his information.

Ex:

    GET: http://localhost:3000/api/author/

Response:

* Status Code: 200

``` 
    []
```

### Get Author by ID - "/api/author/<ID>/" - AUTHENTICATED

EX: 

    GET: http://localhost:3000/api/author/5cc6681235d878b785f23b30/

Response:

* Status Code: 200

```
{
    "_id": "5cc6681235d878b785f23b30",
    "name": "Author Name",
    "albums": []
}
```

### Edit Author Data - "/api/author/<ID>/" - AUTHENTICATED

To edit author data.

Ex:

    PUT: http://localhost:3000/api/author/5cc6681235d878b785f23b30/

    BODY:
            {
                "name": "New Author Name"
            }


Response:

* Status Code: 200

``` 
{
    "_id": "5cc6681235d878b785f23b30",
    "name": "New Author Name",
    "albums": []
}
```

### Delete Author by ID - "/api/author/<ID>/" - AUTHENTICATED

EX: 

    DELETE: http://localhost:3000/api/author/5cc6681235d878b785f23b30/

Response:

* Status Code: 200

```
```

### Possible Errors on Author Insertion

- 500 - Some Api Error Happened
- 404 - Author Not Found
- 409 - Author Already Exists