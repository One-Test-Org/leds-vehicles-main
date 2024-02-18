#!/usr/bin/env bash

export KUBE_CERTIFICATE_AUTHORITY=https://raw.githubusercontent.com/UKHomeOffice/acp-ca/master/${DRONE_DEPLOY_TO=notset}.crt

export IMAGE_VERSION=${DRONE_TAG=${DRONE_COMMIT_SHA=notset}}
export COOKIE_SECURE='true'

export GATE_POD_NAME='leds-vehicles-gate'

case ${DRONE_DEPLOY_TO} in
    'acp-notprod')
        export KUBE_SERVER="https://kube-api-notprod.notprod.acp.homeoffice.gov.uk"
        export KUBE_TOKEN=${KUBE_TOKEN_ACP_NOTPROD=notset}
        export REPLICAS=1

        case ${KUBE_NAMESPACE=notset} in
            'leds-person')
                export UPTIME='Mon-Fri 06:00-20:00 Europe/London'
                ;;
            *)
                echo "[ERROR] namespace '${KUBE_NAMESPACE}' is invalid, make sure KUBE_NAMESPACE is set correctly"
                exit 1
                ;;
        esac
        ;;
    *)
        echo "[ERROR] environment '${DRONE_DEPLOY_TO}' is invalid, make sure DRONE_DEPLOY_TO is set correctly"
        exit 1
        ;;
esac
  
