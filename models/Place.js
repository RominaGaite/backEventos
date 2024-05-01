
import { Schema, model , Types} from "mongoose";


let collection = "places";
let schema = new Schema({
    name: { type: String, required: true },
    address : { type: String, required: true },
    photo: { type: String, required: false },
    date: { type: Types.ObjectId, ref:"events" },
    description: { type: String, required: true },
    ocupancy: { type: Number, required: true },
}, {
    timestamps: true
})
let Place = model(collection, schema);

export default Place;
