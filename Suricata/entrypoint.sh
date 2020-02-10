#!/bin/bash

if [ -z "${FILEBEAT_TAG}" ]; then
    FILEBEAT_TAG=filebeat
fi

if [ -z "${HOME_NETWORK}" ]; then
    HOME_NETWORK=192.168.0.0/16,10.0.0.0/8,172.16.0.0/12
fi

if [ -z "${LOGSTASH_HOST}" ]; then
    LOGSTASH_HOST=127.0.0.1
fi

if [ -z "${LOGSTASH_PORT}" ]; then
    LOGSTASH_PORT=5044
fi

if [ -z "${PATH_LOGS}" ]; then
    PATH_LOGS=/var/log/suricata/*.json
fi

function render-template {
  eval "echo \"$(cat $1)\""
}

sysctl -w net.ipv4.ip_forward=1
ethtool -K eth0 tx off rx off sg off gso off gro off

render-template /filebeat/filebeat.yml.tpl > /filebeat/filebeat.yml && rm /filebeat/filebeat.yml.tpl
render-template /etc/suricata/suricata.yml.tpl > /etc/suricata/suricata.yaml && rm /etc/suricata/suricata.yml.tpl

# Services start
suricata -i eth0 -c /etc/suricata/suricata.yaml &
#TODO check if kibana dashboards are presents
/filebeat/filebeat setup
/filebeat/filebeat -e -c /filebeat/filebeat.yml
