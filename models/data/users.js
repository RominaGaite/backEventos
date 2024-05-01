import User from "../User.js";
import 'dotenv/config.js';
import '../../config/database.js'

let users = [{
    name : "Romina ", 
    lastname :"Gaite",
    photo:"https://i.pinimg.com/564x/64/76/83/647683137f9bbe50736042409fddd35a.jpg",
    email:"gaiteromina@gmail.com",
    password:"123456",
    age:36,
    genre:"female",
    events:[],
    role:"admin",
}]
User.insertMany(users)//
