Best Runner
==============

Workouts accounting app

### Start app
* Install docker with [instructions](https://docs.docker.com/install/linux/docker-ce/ubuntu/#set-up-the-repository)
* Install docker compose with [instructions](https://docs.docker.com/compose/install/)
* cd project root (~/.../BestRunnerAWT)
* yarn install:all - installs packages both for server and client
* yarn start - would run docker-compose and dependencies watcher
* open [localhost:3000](http://localhost:3000/) URL in browser

### Configuration
Default database connection uri:
*mongodb://admin:p1230h6t34qd4i7ex@aspiritywebtemplate_mongodb_best_runner:27017/aspiritytemplate_best_runner?authSource=admin*

where
  * username: admin
  * password: p1230h6t34qd4i7ex
  * host: aspiritywebtemplate_mongodb_best_runner (it is container name for docker development flow)
  * port: 27017
  
### Known issues
1. "Cannot find module ‘whatevermodule’..." in docker logs output. 
Solution: u ran "docker-compose up" instead of "yarn start". Run "yarn install:all" or run depndencies watcher from project folder (ex. cd client, yarn dependencies)
2. Proxy error, backend requests fails from front-end
Solution: change container name from webpack to "localhost" if running client from "yarn start:dev"

