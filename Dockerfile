# base image
FROM node:12.2.0

# set working directory
WORKDIR /frontend_app

# add `/frontend_app/node_modules/.bin` to $PATH
ENV PATH /frontend_app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /frontend_app/package.json
RUN npm config set registry http://registry.npmjs.org/  
RUN npm install
RUN npm install -g @angular/cli@7.3.9

# add app
COPY . /frontend_app

# start app
CMD ng serve --host 0.0.0.0