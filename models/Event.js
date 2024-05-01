
import { Schema, model, Types } from "mongoose";


let collection = "events";
let schema = new Schema({
    place: { type: Types.ObjectId, ref: 'places' },
    date: { type: Date, required: true },
    photo: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    attendees: { type: Types.ObjectId, ref: "users" },
    minimumAge: { type: Number, required: true },
    organizer: { type: Types.ObjectId, ref: 'users' },

}, {
    timestamps: true
})
let Event = model(collection, schema);

export default Event;
