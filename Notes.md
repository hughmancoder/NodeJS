# Node core

- We don’t have the window object in Node. 
- The global object in Node is “global”. 
- Unlike browser applications, variables we define are not added to the “global” object. -Every file in a Node application is a module. Node automatically wraps the code in each file with an IIFE (Immediately-invoked Function Expression) to create scope. So, variables and functions defined in one file are only scoped to that file and not visible to other files unless explicitly exported. 
- To export a variable or function from a module, you need to add them to module.exports: module.exports.sayHello = sayHello; 
- To load a module, use the require function. This function returns the module.exports object exported from the target module: const logger = require(‘./logger’);
- Node has a few built-in modules that enable us to work with the file system, path objects, network, operating system, etc. 
- EventEmitter is one of the core classes in Node that allows us to raise (emit) and handle events. Several built-in classes in Node derive from EventEmitter. 
- To create a class with the ability to raise events, we should extend EventEmitter: class Logger extends EventEmitter { } 


# Node packaging
- npm init --yes // yes flag skips questions
### package json
- npm emit --yes makes node package automatic

### Installs underscore
- npm i underscore 

### re-update node modules folder
- npm i // package.json tells us which version we are using

### semantic semVersioning
- ^4.13.6 = semVersioning: major.monor.patch
  

###  comparing outdated version 
- npm outdated
- npm update
- sudo npm i -g npm-check-updates // g stands for global

### installing development dependencies
- npm i jshint --save-dev // does not go in production environment

### uninstalling packages
- npm un <packagename>

### working with global packages
- sudo npm i -g npm // sudo needed on mac for permissions property
- sudo // we can change permission settings on mac to not need to use this everytime
- npm -g outdated // shows outdated packages

### publishing a package
- go to folder which contains package.json (this is our local package)
- npm adduser // create acount
- https://registry.npmjs.org/ // need an acocunt
- npm login // log into node account
- npm publish // publish package

### install package 
- npm i <package-name>
- once package is puclished, npm adds its own properties

### update package
- npm version major/minor/patch
- npm publish // publishes new versio



# Rest API
- respresentational state transfer -> REST
- builds http services (create read update delete data) -> CRUD operations
- https:// address starts with is (https for secure channel)
- https://vidly.com/api/customers // https request to end point is how we send data
- https methods: GET POST PUT DELETE
- FOCUS: building http services

### Express framework
- keeps code organised
- npm i express
- api notes on expressjss.com -> api references
- localhost:<portnumber>

### nodemom
- global installations allows us to access this anywhere
- sudo npm i -g nodemon // allows us to not have to rerun our server everytime we make changes
- nodemon index.js // runs file
- export PORT=5000 // changes port number

### Route Paremeters
- ? marks a query string parameter
- api/posts/2018/1?sortBy=name

### handling validation
- npm i joi 
- npm i joi@13.1.0 // installs older version

## Advanced topics

### Midleware
- a function which takes request object and returns response to client or passes control to another middleware function
- route handler function: middleware function
- Examples: res.send, express.json()

### changing environments
- export NODE_ENV=production
- in development environment we manually set environment varaibles
- export app_password=1234

### Using debug package
- npm i debug@3.1.0
- access debugging:
- export DEBUG=app:startup
- export DEBUG=app:startup, app:db;   // select multiple debug namespaces
- export DEBUG=app:* // select all for debugging
- shorcut: DEBUG=app:db nodemon index.js

### Templating engines
- here are some examples: (view engines are not actually needed)
- pug (Jade), mustache, EJS -> generates dynamic html and sends to client
- npm i pug
- pug or .jade files render html to client side

## Database integration
- Many options available options: cassandra, mySql, mongoDb, oracle, redis, etc...
- Documentation for integration here: https://expressjs.com/en/guide/database-integration.html
-
## Structuring application
- all routes should be in the routes folder
- all routes with /courses should be in courses.js
- all routes with /authors should be in authors.js 