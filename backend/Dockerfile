FROM node:12.12.0-alpine
WORKDIR  ../backend
RUN pwd
COPY . .
RUN yarn
RUN -v /var/run/docker.sock:/var/run/docker.sock
RUN `docker run -ti -v /var/run/docker.sock:/var/run/docker.sock docker`
EXPOSE 4000
CMD ["yarn", "dev"]

