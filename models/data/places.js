import Place from "../Place.js";
import Event from "../data/Event.js"
import 'dotenv/config.js';
import '../../config/database.js'

let places = [{
    name: "GEBA",
    address : "Figueroa Alcorta 5775, CABA",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3wm8311Y4AGpO33x6P7O97bdnnzWLM1EI8ZMF5cb6A&s",
    date: Event._id.date,
    ocupancy: 200000,
}]
Place.insertMany(places)//
