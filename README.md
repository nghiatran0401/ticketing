## Why microservices?

- Each service should run independently and not interfere with other services (database per service) -> data management is a biggest issue in microservices
- Comunication strategies: sync and async
  - Async cons: data duplication -> extra storage -> cloud storage is incredibly cheap!
  - Event bus: RabbitMQ, Kafka, NATs -> receive events and publish them to listeners

## DOCKER

Creating a container - an isolating computing environment - that has everything needed / required
for a single program

## KUBERNETES

Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications. We need to give it some configuration to describe how we want our containers to run and interact with each other.

1. Kubernetes CLuster is a collection of Nodes (virtual machines)
2. Master is a program to manage everything in the Cluster
3. Deployment: monitors a set of containers, make sure they are running and restarts them if they crash
4. Container: in charge of running a docker image
5. Service: Cluster IP, Node Port and Load Balancer. We will focusing on Cluster IP service (default): provides an easy-to-remember URL to access a running container
6. Ingress-nginx:
   - An OSS that creates a Load Balancer Service & Ingress Controller inside a Cluster
   - A Load Balancer serves the outside resquests into the Cluster
   - An Ingress Controller serves requests from the Load Balancer to specific pods

## SKAFFOLD

- Automates many tasks in kubernetes dev env
- Makes it easy to update code inside containers
- Makes it easy to create/delete objects tied to the project
- Command: 'skaffold dev'

## NATS STREAMING SERVER (node-nats-streaming)

- Event-based architecture & callback infrastructure
- Stores all event in memory (default), or in PostgreSQl
- Data shared must be in JSON format

## GENERAL

1. "/etc/hosts": set a domain name to local host
   Ingress-nginx: is a webserver trying to use secure https connection trying to use 'self sign certificates' => Chrome does not trust that kind of certificates -> type "thisisunsafe" to Chrome to get over the error
2. "~/.zshrc": open file and set "alias k="kubectl"" -> save time when run command
3. Install GCloud SDK to set up kubernetes contexts: gcloud container clusters get-credentials cluster-1:
   - step 1: enable google cloud build
   - step 2: update the skaffold.yaml file to google cloud build
   - step 3: setup ingress nginx on google cloud cluster
   - step 4: update hosts file to point to the remote cluster
   - step 5: restart skaffold
4. Browsers and Postman have different ways to handle cookie & send cookie's data back to the server. Supertest server does not manage cookie automatically & it uses http (not https)
5. NextJS getInitialProps func can be executed on the client (using Axios) or server (using Kubernetes service reaching out to ingress-nginx)
6. Mongoose has built-in Database Transaction for handling transaction issues
7. Bulljs: Redis-based queue for Node. (Job scheduling) -> Cache worker service
8. Redis: in-memory data structure store, used as a database, cache, and message broker
