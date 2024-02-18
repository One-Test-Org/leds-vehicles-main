FROM quay.io/oauth2-proxy/oauth2-proxy:v7.5.1

USER root
RUN apk add curl

COPY ./gate-oauth2-proxy.cfg /etc/gate-oauth2-proxy.cfg

COPY ./docker-entrypoint.sh /usr/local/bin/
RUN chmod a+x /usr/local/bin/docker-entrypoint.sh
RUN ln -s /usr/local/bin/docker-entrypoint.sh /

USER 1000

ENTRYPOINT ["docker-entrypoint.sh"]

