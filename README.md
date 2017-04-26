# SELK
SELK is an open source project for deploy on demand an architecture with the ELK stack and suricata IDS (with filebeat).

Make sure that, when cloning the project, you use `git clone --recurse-submodules` or run `git submodule init` and `git submodule update` to clone the correct SELK version. You can modify the docker-compose file with the DVWA VM for testing the project.

If you want to test the complet stack (with the DVWA container) please follow the instructions:
- uncomment the DVWA service
- on your host add the following route 
    - ip route add <CIDR_DVWA_NETWORK> via <IP_SURICATA_CONTAINER>
- remove the docker route to the DVWA network
    - ip route del <CIDR_NETWORK_DOCKER_TO_DVWA_NETWORK>
- on the DVWA container add the following route
    - ip route add <CIDR_HOST_NETWORK> via <IP_SURICATA_CONTAINER>


The project contains all the [SELKS project](https://www.stamus-networks.com/) dashboard.
