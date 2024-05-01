import Event from "../Event.js";
import 'dotenv/config.js';
import '../../config/database.js'

let events = [{
    place: places._id ,
    date: new Date("2024-06-15T22:00:00Z"),
    photo: "https://i.pinimg.com/564x/73/68/f3/7368f3e3714623fe008feb02b70d2675.jpg",
    name: "Bresh",
    description:"Party" ,
    attendees:users._id ,
    minimumAge: 18,
    organizer: users._id ,
}]
Event.insertMany(events)//
