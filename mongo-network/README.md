### Provisioning


#Create a Docker Network

docker network create mongo-network
docker network ls


#Pull the MongoDB Image

docker pull mongo
docker images
docker logs mongo

#Run the MongoDB Container with Authentication

docker run --name mongo \
  --network mongo-network \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=admin \
  -p 27017:27017 \
  -d mongo
docker ps


#Pull the Mongo Express Image

docker pull mongo-express
docker images
docker inspect mongo-express
docker logs mongo-express


#Run the Mongo Express Container with Authentication

docker run --name mongo-express \
  --network mongo-network \
  -e ME_CONFIG_MONGODB_SERVER=mongo \
  -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
  -e ME_CONFIG_MONGODB_ADMINPASSWORD=admin \
  -p 8081:8081 \
  -d mongo-express

#Accessing Mongo Express

http://localhost:8081


### Summary

Including the port, mapping is important for accessing the services running inside your Docker containers
We have MongoDB and Mongo Express set with Docker, fully connected and accessible
From this point, we can use a node.js code to access Mongo DB and fetch information. 


