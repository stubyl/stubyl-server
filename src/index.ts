const express = require('express')
import { Request, Response, NextFunction } from 'express';
const app = express();

const port=3009;
let router=new express.Router()
let counter = 1
function setupRouter () {
  router = new express.Router()
  console.log('running router setup')
  console.log(`creating path for ${counter}`)
  counter++
  //  Setup dynamic routes here (get them from db?)
  for(let i=0;i<=counter;i++){

    router.get('/'+i, (req:Request, res: Response) => {
      console.log(req)
    res.json({response: 'success '+i});
  })
  }
  
  router.get('/foo', (req:Request, res: Response) => {
    console.log(req)
    res.json({response: 'success'});
  })
}

setupRouter();
app.use(function replaceableRouter (req:Request, res: Response, next: NextFunction ) {
  console.log(req)

  router(req, res, next)
})

/* app.listen((port:Number, err: String) => {
  console.log(port)
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on 3009`);
}); */
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// When you are ready to replace the routes, just call setup again
// Every 10 seconds it will refresh in this example
setInterval(setupRouter, 1000 * 10)
/* import express from 'express';
import {ReloadRouter} from 'express-route-reload';

const reloadRouter = new ReloadRouter();

const app = express();
const port = 3009;
app.get('/', (req, res) => {
  res.send('Test server');
});
app.get('/testing', (req, res) => {
  res.json({response: 'success'});
});
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});

let count = 0;
setInterval(() => {
  console.log("/" + count);
  count++;

  const newRouter = express.Router();
  for (let i = 0; i < count; i++) {
    newRouter.get("/" + i, (req, res, next) => {
      res.send("Hello " + i);
    });
  }

  reloadRouter.reload([newRouter]);
}, 2000);
 */

/**
 * const APIs = [
    {
        route: 'order',
        methods: ['get', 'post']
    },
    {
        route: 'item',
        methods: ['get']
    },
]
APIs.forEach(api => {
    api.methods.forEach(method => {
        app[method]('/' + api.route, (req, res) => require('./routes/' + api.route)[method](req, res))
    })
})
 */
//{"function":{"arguments":"a,b,c","body":"return a*b+c;"}}
//var f = new Function(function.arguments, function.body);