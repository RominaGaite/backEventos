
import { Schema, model } from "mongoose";
import mongoose from "mongoose";



let collection = "events";
let schema = new Schema({
    place: { type: mongoose.Types.ObjectId, ref: 'places' },
    date: { type: Date, required: true },
    photo: { type: String, required: false },
    name: { type: String, required: true },
    description: { type: String, required: true },
    attendees: { type: mongoose.Types.ObjectId, ref: "users" },
    minimumAge: { type: Number, required: true },
    organizer: { type: mongoose.Types.ObjectId, ref: 'users' },

}, {
    timestamps: true
})
let Event = model(collection, schema);

export default Event;
