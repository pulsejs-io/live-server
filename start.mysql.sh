#!/bin/bash

#Create directory if not exist
if [ ! -d "mysql" ]; then mkdir -p mysql; fi

#Stop MySQL Docker if running...
printf "Stopping MySQL Container: "
docker stop pulsejs-mysql

#Delete mysql container if exist...
printf "Removing MySQL Container: "
docker rm pulsejs-mysql

#Run container mysql with custom parameters
printf "Starting MySQL Container: "
docker run --name pulsejs-mysql \
           -e MYSQL_ROOT_PASSWORD=I2aQydOeE2 \
           -e MYSQL_DATABASE=pulsejs \
           -e MYSQL_USER=pulsejs \
           -e MYSQL_PASSWORD=lcTHJYXcLh \
           -p 3306:3306 \
           -v "$PWD/mysql":/var/lib/mysql \
           -d mysql:5.7

#Get ip docker instance of mysql
export PULSEJS_DB_HOST=`docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' pulsejs-mysql`

printf "MySQL Container started in: $PULSEJS_DB_HOST"

