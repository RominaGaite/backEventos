import Event from "../Event.js";
import 'dotenv/config.js';
import '../../config/database.js'
import Place from '../Place.js'
import User from '../User.js'

let events = [{
    place: Place._id ,
    date: "2024-06-18",
    photo: "https://i.pinimg.com/564x/73/68/f3/7368f3e3714623fe008feb02b70d2675.jpg",
    name: "Bresh",
    description:"Party" ,
    attendees: User._id ,
    minimumAge: 18,
    organizer: User._id ,
}]
Event.insertMany(events)//
