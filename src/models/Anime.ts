import mongoose from "mongoose";



const animeSchema = new mongoose.Schema(
    {
        id : {type : String},
        name : {type : String},
        year : {type: Number},
        seasons : {type : Number},
        mangaFinishied : {type : String}
    },
    {
        versionKey : false
    }
)

    const anime = mongoose.model("anime", animeSchema);


    export default anime ;