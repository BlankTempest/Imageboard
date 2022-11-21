var express=require('express')
routes=express.Router()
var MongoClient= require('mongodb').MongoClient


routes.get('/cat',(req,res)=>{
    MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
        if(err) console.log(err)
        else
        {
            db=client.db('catalogs')
            db.collection(req.query.boardName).find({}).toArray(function(err,data){
                if(!err)
                {
                    res.send(data)

                }
            })
            // console.log(rec)
        }
        })
})

module.exports = routes;