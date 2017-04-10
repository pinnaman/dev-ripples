FROM node:4.2.3

EXPOSE 3000
EXPOSE 5858
#COPY . /app
WORKDIR /app

RUN cd /app; npm install -g express nodemon
RUN cp -R /usr/local/lib/node_modules /app
#CMD ["node", "--debug=5858","index.js"]
CMD ["nodemon", "-L", "index.js"]
