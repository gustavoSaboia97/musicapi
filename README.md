# Music API

## Endpoints

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