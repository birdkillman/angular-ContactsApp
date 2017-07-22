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
We will install all dependencies with ```npm``` and ```bower```

```bash
$ npm install express
#Express for server side

$ bower install angular
$ bower install bootstrap
```

After creating ```server.js``` for **express** webserver we need to boot the server with [https://nodemon.io/](**nodemon** )
```bash
$ npm install -g nodemon
```

**nodemon** will detect all the changes in ``server.js`` and restart the server however
```bash
$ node server.js
```
will do the same but if you change the ```server.js``` file, you need to run the above command again.
