<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
  <a target="_blank" href="https://github.com/docker/compose" target="blank"><img src="https://raw.githubusercontent.com/docker/compose/v2/logo.png" alt="Docker Compose" title="Docker Compose Logo" width="120"></a>
  <a target="_blank" href="https://www.docker.com/" target="blank"><img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" alt="Docker Logo" title="Docker  Logo" width="120"></a>
<a target="_blank" href="https://graphql.org/" target="blank"  style="height:'30px';"><img src="https://graphql.org/img/brand/logos/logo.svg" alt="GraphQL Logo" title="GraphQL  Logo" width="120"></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

    
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This project was built in with [Nest.js](https://github.com/nestjs/nest) framework, the purpose of this project is understand how we can integrate Nest.js with MongoDB, GraphQL and Docker in Order to have CRUD Operations.

This project is about some products of any type and was created for educational purposes.

## Requirements 
- [Docker Desktop](https://www.docker.com/)
- [Node.js](https://nodejs.org/)

## Configuration

You need to create `.env` file whith these Keys(PD: Feel free to change these values):
```
PORT=3003
DB_URL=mongodb://YOUR_DB_USERNAME:YOUR_DB_PASSWORD@
DB_HOST=localhost
DB_USERNAME=YOUR_DB_USERNAME
DB_PASSWORD=YOUR_DB_PASSWORD
DB_PORT=27018
DB_NAME=YOUR_DB_NAME
```

## Installation
To install Node Modules run un in your terminal
```bash
$ npm install
```

## Run the Docker Container 

In order to build our Dockers Containers you need run this command:

```bash
$ npm run docker:build
```
## Running in Development mode
If you need to run the app in Development mode first you need to stop the container named: `nest-mongo-api-container` then you will need to start the container named `nest-app-db-products-container` , then you can run this command:

```bash
# development
$ npm run start:dev
```
## Running in Poduction mode

```bash
# production mode
$ npm run start:prod
```
 
# GraphQL 
Once that you are running the Docker Containers you will have a GraphQL API located in this URL: `http://localhost:3003/graphql`. 

```graphql
type Product {
  # ID of the Product
  _id: String!
  # Name of the Product
  name: String!
  # Main image URL of the Product ,size minimun 320px width and 200px height
  image: String!
  # Description of the Product
  description: String!
  # Quantity of the Product
  quantity: Int!
  # Price of the Product
  price: Float!
}
type Query {
  products: [Product!]!
  product(id: String!): Product!
}
type Mutation {
  createProduct(createProductInput: CreateProductInput!): Product!
  updateProduct(id: String!, updateProductInput: UpdateProductInput!): Product!
  removeProduct(id: String!): Product!
}
input CreateProductInput {
  # The name of the product
  name: String!
  # Main image URL of the Product ,size minimun 320px width and 200px height
  image: String!
  # The description of the product
  description: String!
  # The quantity of the product
  quantity: Int!
  # The price of the product
  price: Float!
}

input UpdateProductInput {
  # The name of the product
  name: String
  # Main image URL of the Product ,size minimun 320px width and 200px height
  image: String
  # The description of the product
  description: String
  # The quantity of the product
  quantity: Int
  # The price of the product
  price: Float
}
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

