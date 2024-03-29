#!/usr/bin/env bash

set -o errexit
set -o nounset

export PORT=80

echo "--- environment   : ${DRONE_DEPLOY_TO=notset}"
echo "--- namespace     : ${KUBE_NAMESPACE=notset}"
echo "--- deploying     : ${NAME}"
echo "--- branch        : ${DRONE_BRANCH=notset}"
echo "--- tag           : ${DRONE_TAG=notset}"
echo "--- image version : ${IMAGE_VERSION=notset}"

if ! kd --timeout=6m \
    -f kube/redis-deployment.yml \
    -f kube/redis-service.yml \
    -f kube/redis-network-policy.yml; then
    echo "[ERROR] failed to deploy ${NAME}"
    exit 1
fi
