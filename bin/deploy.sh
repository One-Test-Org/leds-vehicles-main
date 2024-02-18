#!/usr/bin/env bash

set -o errexit
set -o nounset

# default values
export DRONE_DEPLOY_TO=${DRONE_DEPLOY_TO:?'[error] Please specify which cluster to deploy to.'}
export KUBE_NAMESPACE=${KUBE_NAMESPACE=sas-dev}
export KUBE_CERTIFICATE_AUTHORITY=https://raw.githubusercontent.com/UKHomeOffice/acp-ca/master/${DRONE_DEPLOY_TO}.crt

export NAME="leds-vehicles"
export REPO="ssh://git@gitlab.digital.homeoffice.gov.uk:2222/design/leds-vehicles.git"
export PORT=3000
export IMAGE_VERSION=${DRONE_TAG=${DRONE_COMMIT_SHA=notset}}

case ${DRONE_DEPLOY_TO} in
  'acp-notprod')
    export KUBE_SERVER="https://kube-api-notprod.notprod.acp.homeoffice.gov.uk"
    export KUBE_TOKEN=${KUBE_TOKEN_ACP_NOTPROD}
    ;;
esac

echo "--- kube api url: ${KUBE_SERVER}"
echo "--- environment   : ${DRONE_DEPLOY_TO=notset}"
echo "--- namespace     : ${KUBE_NAMESPACE=notset}"
echo "--- deploying     : ${NAME}"
echo "--- branch        : ${DRONE_BRANCH=notset}"
echo "--- tag           : ${DRONE_TAG=notset}"
echo "--- image version : ${IMAGE_VERSION=notset}"

echo "--- deploying ${NAME}"
if ! kd --timeout=5m \
  -f kube/networkpolicy-external.yaml \
  -f kube/service.yaml \
  -f kube/deployment.yaml ; then
  echo "[error] failed to deploy ${NAME}"
  exit 1
fi

