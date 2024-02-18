#!/usr/bin/env bash

export KUBE_CERTIFICATE_AUTHORITY=https://raw.githubusercontent.com/UKHomeOffice/acp-ca/master/${DRONE_DEPLOY_TO=notset}.crt

export IMAGE_VERSION=${DRONE_TAG=${DRONE_COMMIT_SHA=notset}}
export SKIP_ISSUER_VERIFICATION='false'
export COOKIE_SECURE='true'

export PROXY_UPSTREAMS=http://leds-vehicles:443
export GATE_CONFIG_FILE=/etc/gate-oauth2-proxy.cfg

case ${DRONE_DEPLOY_TO} in
    'acp-notprod')
        export KUBE_SERVER="https://kube-api-notprod.notprod.acp.homeoffice.gov.uk"
        export KUBE_TOKEN=${KUBE_TOKEN_ACP_NOTPROD=notset}
        export REPLICAS=1
        export KC_OIDC_ISSUER_URL=https://sso-dev.notprod.homeoffice.gov.uk/auth/realms/sas-ledsdesign
        export KC_OIDC_VALIDATE_URL=$KC_OIDC_ISSUER_URL/protocol/openid-connect/userinfo
        export REDIS_URL=redis://vehicles-redis:6379
        case ${KUBE_NAMESPACE=notset} in
            'leds-person')
                export UPTIME='Mon-Fri 06:00-20:00 Europe/London'
                export EXTERNAL_URL=leds-vehicles.prototype.homeoffice.gov.uk
                export REDIRECT_URL=https://${EXTERNAL_URL}/oauth2/callback
                export PERMITTED_REDIRECT_DOMAINS=.prototype.homeoffice.gov.uk:*
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
   
    