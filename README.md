# ContactsApp
Angular Contacts App



## Requirement
* Node.js [https://nodejs.org/en/](https://nodejs.org/en/) for Backend
* Bower [https://bower.io/](https://bower.io/) for Frontend 

After instlling node, you can install **Bower** with this command
```bash
$ npm install -g bower
```

## Dependencies
* ```Express```,```Angular``` and ```Bootstrap```

```bash
$ npm install express
#Express for server side

$ bower install angular
$ bower install bootstrap
```

* After creating ```server.js``` for **express** webserver, we need to boot the server with **nodemon**
```bash
$ npm install -g nodemon
```
**nodemon** will detect all the changes in ``server.js`` and restart the server however
```bash
$ node server.js
```
will do the same but if you change the ```server.js``` file, you need to run the above command again.

* Then we need to install the ```angular-route```
```bash
$ bower install angular-route
```

* JSON Database 
```bash
$ npm install bourne
```

* Middleware for parsing the http request
```bash
$ npm install body-parser
```

* Attach the backend to frontend by ```Angular Resource```
```bash
$ bower install angular-resource
```

* Angular messages
```bash
$ bower install angular-messages
```

## Run
1. By default all bower components are in  ```./bower_components```. Move them all into ```/public/lib/``` (As you see the source in the ```/public/main.html```)

2. boot the server with ```nodemon```
```bash
$ nodemon server.js
```

3. In browser go to ```http://localhost:3000```

