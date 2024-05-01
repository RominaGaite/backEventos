import express from 'express'
import 'dotenv/config.js'
import './config/database.js'

import path from 'path'
import logger from 'morgan'
import cors from  'cors'
import { __dirname } from './utils.js'

import indexRouter from './routes/index.js'
import usersRouter from './routes/users.js'


let app = express();//instacia y crea el servidor

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//midleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors()) 

app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app