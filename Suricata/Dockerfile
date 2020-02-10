FROM alpine:latest

# suricata requirements
RUN apk update \
    && apk add --no-cache autoconf automake build-base \
    cargo file-dev libtool \
    libmagic libnet-dev libpcap-dev lz4-dev perl-yaml-libyaml \
    rust zlib-dev libcap-ng-dev libnetfilter_queue-dev \
    libpcre2-32 jansson-dev nspr-dev \
    nss-dev pcre-dev pkgconf yaml-dev wget \
    python3-dev py3-pip \
    && pip3 install --no-cache-dir -U pip \
    && pip3 install --no-cache-dir suricata-update

# Suricata installation
ENV SURICATA_VERSION 5.0.0
RUN wget http://www.openinfosecfoundation.org/download/suricata-$SURICATA_VERSION.tar.gz \
    && tar -xvzf suricata-$SURICATA_VERSION.tar.gz \
    && rm suricata-$SURICATA_VERSION.tar.gz \
    && cd suricata-$SURICATA_VERSION \
    && ./configure --enable-nfqueue --prefix=/usr --sysconfdir=/etc --localstatedir=/var \
    && make -j$(($(grep processor /proc/cpuinfo|wc -l) + 1)) \
    && make install-full
COPY suricata.yml.tpl /etc/suricata/suricata.yml.tpl

# Filebeat installation
ENV FILEBEAT_VERSION 7.4.2
RUN curl -L -O https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-$FILEBEAT_VERSION-darwin-x86_64.tar.gz \
    && tar xzf filebeat-$FILEBEAT_VERSION-linux-x86_64.tar.gz \
    && rm filebeat-$FILEBEAT_VERSION-linux-x86_64.tar.gz \
    && mv filebeat-$FILEBEAT_VERSION-linux-x86_64 filebeat \
    && ./filebeat modules enable suricata

COPY filebeat.yml.tpl /filebeat/filebeat.yml.tpl

ADD entrypoint.sh /

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
