#Iniciar projeto
yarn start ou npm start.

#Testar projeto
yarn test

#Exibe os containers
docker ps -a

#Pausa, Parar, Reiniciar, Iniciar: container
docker pause node-app
docker unpause node-app
docker start node-app
docker restart node-app
docker stop node-app

#Compilar container
docker-compose up -d --build