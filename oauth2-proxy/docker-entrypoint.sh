#!/usr/bin/env sh

echo "Gate starting with config: '${GATE_CONFIG_FILE}'"

/bin/oauth2-proxy --config ${GATE_CONFIG_FILE} $@