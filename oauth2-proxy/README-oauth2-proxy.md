
# OAuth2-proxy

Replacement for EOL keycloak gatekeeper

This is the front door of the application when served over the internet external ingresss. Enforces authorisation via Keycloak for all URLs.

# Setup notes

```bash
kubectl --context=acp-notprod_DESIGN --namespace=leds-person create secret generic leds-vehicles-gate-oidc \
--from-literal=oidc_gate_client_id=leds-vehicles \
--from-literal=oidc_gate_client_secret=XXXXXXXXXXXXXXXX \
--from-literal=oidc_gate_cookie_secret=XXXXXXXXXXXXXXXX
```

## Notes

https://github.com/oauth2-proxy/oauth2-proxy
