# SELK
SELK is an open source project for deploy on demand an architecture with the ELK stack and suricata IDS (with filebeat).

Make sure that, when cloning the project, you use `git clone --recurse-submodules` or run `git submodule init` and `git submodule update` to clone the correct SELK version. You can modify the docker-compose file with the DVWA VM for testing the project.

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
