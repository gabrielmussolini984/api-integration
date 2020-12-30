# Interaction API
This project makes the interaction between Pipeline and Bling, sending all gain opportunities registered on the Pipeline platform and registering both on Bling and MongoDB.

## Starting
To run the project, you will need to install the following programs

- [Docker](https://docs.docker.com/get-docker/)

## Development

Clone the repository for your machine.

```shell
git clone https://github.com/gabrielmussolini984/api-integration.git
```

### Construct

To run the project with the docker-compose:

```shell
docker-compose up
```

The command will upload all the services necessary for the application to work, like rabbitmq, mongodb and the application itself.


#### Steps Necessary

1. Change file .env.dev with your credentials, if necessary.
1. Access localhost and login with **user admin** and **password admin**.
2. Create a queue called opportunities.
3. In exchange amqp.direct bind routerkey opportunities with a queue opportunities.

### Using application:

[POST] http://localhost:3000/opportunities
- Search for the opportunities won registered in the Pipeline and send to a queue, the consume of the same inserts in the bling and register in the database.
[GET] http://localhost:3000/opportunities
- Search all opportunities won registered in the database.(Accept paginate, standard: ?page=0&limit=10).

## Features

In the project there are two routes, the POST "/ oppotunity" consumes the api of the pipeline and inserts in a queue, when consuming the queue it inserts the data in the bling and mongodb.
GET "/ oppotunity" searches all records registered in mongodb, which is the sum of the day's opportunities, accepting pagination.



#### Thanks!

