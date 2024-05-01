import mongoose from "mongoose";
mongoose.set('strictQuery', false)

mongoose.connect(process.env.LINKDB)
.then(()=> console.log( 'MongoDB connected' ))
.catch((err)=> console.error(err));