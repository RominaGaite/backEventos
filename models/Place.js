
import { Schema, model } from "mongoose";
import mongoose from "mongoose";



let collection = "places";
let schema = new Schema({
    name: { type: String, required: true },
    address : { type: String, required: true },
    photo: { type: String, required: false },
    date: { type: mongoose.Types.ObjectId, ref:"events" },
    ocupancy: { type: Number, required: true },
}, {
    timestamps: true
})
let Place = model(collection, schema);

export default Place;
