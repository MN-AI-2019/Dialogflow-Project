# NVM (Node Version Manager)
* Easy to switch between node versions
* For Mac/Linux https://github.com/nvm-sh/nvm
* For Windows https://github.com/coreybutler/nvm-windows

# REST(Representational state transfer) api intro
* A software architecture style
* Mostly popular in RESTful Web service. 
* Think about Web resource
* CRUD maps to Common Verbs: POST, GET, PUT, DELETE
* Request and Response 
  * Header:
    * Content-Type: application/json
    * Accept: application/json
  * Request QueryString
  * Request/Response body
* Response https status code:
  * 200 OK
  * 201 created
  * 202 accepted
  * 400 bad request
  * 401 unauthorized
  * 403 forbidden
  * 404 not found
  * 409 conflict: when adding an already existing entity
  * 500 internal server error
  * 503 service unavailable
* Routing/Url pattern:
  * to get a collection: GET /usa/states
  * to get a single record: GET /usa/states/mn
  * to create: POST /usa/states
  * to update: PUT /usa/states/wi
  * to delete: DELETE /usa/states/wi
   
* For more informaton: https://github.com/jenac/kb/blob/master/2017-01-26-REST-Best-Practice.md

# Popular Framework to build REST api
* Express http://expressjs.com/
  * create project folder `mkdir hello-express`
  * into project folder `cd hello-express`
  * create npm project: `npm init`
  * install express:`npm i --save express` --save means save into package.json as runtime dependency. --save-dev means save to package.json as develop dependency.
  * nodemon: `npm i -g nodemon` -g means global namespace, then run app.js with nodemon `nodemon app.js`
  * to make req.body work:
  	* install body-parser `npm i --save body-parser`
  	* added setup in code:
  	```
  	const bodyParser = require('body-parser')
	app.use(bodyParser.urlencoded({ extended: false }))
	app.use(bodyParser.json())  
	```
  

* NestJs https://nestjs.com/


