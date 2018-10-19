#!/usr/bin/env bash

while [[ $# -gt 1 ]]
do
key="$1"

case ${key} in
    -e|--environment)
    ENV="$2"
    shift # past argument
    ;;

    *)
    # unknown option
    ;;
esac
shift # past argument or value
done

if [ -z ${ENV} ]; then
    ENV='dev'
fi

if [ ${ENV} == 'dev' ]; then
    FILE='config/docker-compose.yml'
else
    echo 'Environment not found.'
    exit 1
fi

docker-compose -f ${FILE} build
docker-compose -f ${FILE} stop
docker-compose -f ${FILE} up -d
