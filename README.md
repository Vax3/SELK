# SELK
SELK is an open source project for deploy on demand an architecture with the ELK stack and suricata IDS (with filebeat).

Jupyterlab is aivailable on <ip_jupyterlab>:8888, the token is available with the following command
- docker-compose logs jupyter|grep -m 1 token|cut -d '=' -f 2

Sometimes the elastalert-server is not ready, please reload the project or the container with this command
- docker-compose up -d
or
- docker-compose up -d elastalert-server

If you want to test the complet stack (with the DVWA container) please follow the instructions:
- uncomment the DVWA service
- on your host:
    - remove the docker route to the dvwa network
        - ip route del 172.16.3.0/24
    - add the following route
        - ip route add 172.16.3.0/24 via <IP_SURICATA_CONTAINER>

- on the DVWA container:
    - remove the default route
        - ip route del default
    - add the following route
        - ip route add default via <IP_SURICATA_CONTAINER>
    - remove the docker others route
        - ip route del 172.16.2.0/24
        - ip route del 172.16.3.0/24


The project contains all the [SELKS project](https://www.stamus-networks.com/) dashboard.
