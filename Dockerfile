# base image
FROM node:12.2.0

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_EXTRA_CA_CERTS="/var/jenkins_home/tools/hudson.model.JDK/jdk/jre/lib/security/jssecacerts"

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm config set registry http://registry.npmjs.org/  
RUN npm install
RUN npm install -g @angular/cli@7.3.9

# add app
COPY . /app

# start app
CMD ng serve --host 0.0.0.0