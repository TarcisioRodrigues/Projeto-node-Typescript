import express, { request, response } from 'express';
import 'reflect-metadata';
import routes from './routes';
import './database';
const app=express();
app.get('/',(request,response)=>{
  return response.json({message:'Hello world'});
})
app.listen(3333,()=>{
  console.log('Server running')
})
