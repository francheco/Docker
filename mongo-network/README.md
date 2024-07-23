## Provisioning


#Create a Docker Network

docker network create mongo-network

#Pull the MongoDB Image

docker pull mongo

#Run the MongoDB Container with Authentication

docker run --name mongo \
  --network mongo-network \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=admin \
  -p 27017:27017 \
  -d mongo

#Pull the Mongo Express Image

docker pull mongo-express

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


