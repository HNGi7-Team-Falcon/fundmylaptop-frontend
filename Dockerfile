FROM risingstack/alpine:3.4-v6.7.0-4.0.0
WORKDIR /opt/app

# Install yarn from the local .tgz
RUN mkdir -p /opt
ADD latest.tar.gz /opt/
RUN mv /opt/dist /opt/yarn
ENV PATH "$PATH:/opt/yarn/bin"

# Install packages using Yarn
ADD package.json /tmp/package.json
RUN cd /tmp && yarn
RUN mkdir -p /opt/app && cd /opt/app && ln -s /tmp/node_modules