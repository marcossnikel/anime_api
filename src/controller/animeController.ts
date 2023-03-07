import anime from '../models/Anime.js';

class animeController{
    static listAnimes = (req,res)=>{
        anime.find((err,anime)=>{
            res.status(200).json(anime);
        })
    }

    static listAnimeID = (req,res)=>{
        const id = req.params.id;

        anime.findById(id,(err,anime)=>{
            if(err){
                res.status(400).send({message:`${err.message} - ID Not Found !`})
            }else{
                res.status(200).send(anime);
            }
            })
        }
    static registerAnime = (req,res)=>{
        let anime = new anime(req.body);


        anime.save((err)=>{
            
            if(err){
                res.status(500).send({message: `${err.message} - Fail in register Anime`})
            }else{
                res.status(201).send(anime.toJSON())
            }
            })
        }

    static atualizeAnime = (req,res)=>{
        const id = req.params.id;

        anime.findByIdAndUpdate(id, {$set: req.body},(err)=>{
            if(!err){
                res.status(200).send({message: 'Anime Updated !!'})
            }else{
                res.status(500).send({message: err.message});
            }
        })

    }

    static excludeAnime = (req,res) =>{
        const id = req.params.id;

        anime.findByIdAndDelete(id,(err)=>{
            if(!err){
                res.status(200).send({message: `Anime Removed !!`})
            }else{
                res.status(500).send({message: err.message});
            }
            })
        }
    }

    



    export default animeController;

