import mongoose from 'mongoose';
mongoose.connect("mongodb+srv://marcossnikel:321@animeapi.atkk1.mongodb.net/AnimeAPI")

let db = mongoose.connection;

export default db;